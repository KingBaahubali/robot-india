-- ENQUIRIES
CREATE TABLE public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_id TEXT UNIQUE NOT NULL, -- Public friendly ID like REQ-1234
    customer_id UUID REFERENCES auth.users(id), -- Nullable for anonymous
    contact_name TEXT NOT NULL,
    contact_email TEXT NOT NULL,
    contact_phone TEXT,
    requirements JSONB NOT NULL DEFAULT '{}'::jsonb,
    state TEXT NOT NULL DEFAULT 'New', -- 'New', 'Triaged', 'Contacted', 'Qualified', 'Assessment', 'Proposal', 'Won', 'Lost'
    owner_id UUID REFERENCES auth.users(id),
    follow_up_date TIMESTAMPTZ,
    submission_key TEXT UNIQUE NOT NULL, -- Idempotency key
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- PROPOSALS
CREATE TABLE public.proposals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    enquiry_id UUID REFERENCES public.enquiries(id) ON DELETE CASCADE,
    customer_id UUID REFERENCES auth.users(id) NOT NULL,
    version INT NOT NULL DEFAULT 1,
    line_snapshot JSONB NOT NULL DEFAULT '[]'::jsonb,
    total_amount_minor INT NOT NULL,
    currency TEXT NOT NULL DEFAULT 'INR',
    valid_until TIMESTAMPTZ NOT NULL,
    state TEXT NOT NULL DEFAULT 'Draft', -- 'Draft', 'Sent', 'Accepted', 'Rejected', 'Expired'
    acceptance_evidence JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.proposals ENABLE ROW LEVEL SECURITY;

-- PROJECTS
CREATE TABLE public.projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    proposal_id UUID REFERENCES public.proposals(id),
    customer_id UUID REFERENCES auth.users(id) NOT NULL,
    title TEXT NOT NULL,
    progress_state TEXT NOT NULL DEFAULT 'Awaiting payment',
    warranty_end_date TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- JOBS (Outbox pattern for emails, AI, background tasks)
CREATE TABLE public.jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type TEXT NOT NULL,
    entity_id UUID NOT NULL,
    idempotency_key TEXT UNIQUE NOT NULL,
    run_after TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    attempt_count INT NOT NULL DEFAULT 0,
    lease_expiry TIMESTAMPTZ,
    status TEXT NOT NULL DEFAULT 'Pending', -- 'Pending', 'Running', 'Failed', 'Completed'
    last_error TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- RLS POLICIES

-- Enquiries: Clients can see their own (if linked). Staff can see all.
CREATE POLICY "Clients view own enquiries" ON public.enquiries FOR SELECT USING (auth.uid() = customer_id);
CREATE POLICY "Staff view all enquiries" ON public.enquiries FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('editor', 'consultant', 'operations', 'owner'))
);

-- Proposals: Clients can view own. Staff view all.
CREATE POLICY "Clients view own proposals" ON public.proposals FOR SELECT USING (auth.uid() = customer_id);
CREATE POLICY "Staff view all proposals" ON public.proposals FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('consultant', 'operations', 'owner'))
);

-- Projects: Clients can view own. Staff view all.
CREATE POLICY "Clients view own projects" ON public.projects FOR SELECT USING (auth.uid() = customer_id);
CREATE POLICY "Staff view all projects" ON public.projects FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('consultant', 'operations', 'owner'))
);

-- Jobs: System/Admin only
CREATE POLICY "Admins view jobs" ON public.jobs FOR ALL USING (
  EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'owner')
);

-- Triggers for updated_at
CREATE TRIGGER set_updated_at_enquiries BEFORE UPDATE ON public.enquiries FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_updated_at_proposals BEFORE UPDATE ON public.proposals FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_updated_at_projects BEFORE UPDATE ON public.projects FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
CREATE TRIGGER set_updated_at_jobs BEFORE UPDATE ON public.jobs FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
