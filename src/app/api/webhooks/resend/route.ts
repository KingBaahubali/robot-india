import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@/lib/auth/server';

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get('svix-signature');
    const secret = process.env.RESEND_WEBHOOK_SECRET || 'dummy';

    if (!secret || !signature) {
      return NextResponse.json({ error: 'Missing signature or secret' }, { status: 401 });
    }

    // Parse the Resend event payload
    const event = JSON.parse(rawBody);
    const { type, data } = event;
    
    // The email ID provided by Resend
    const providerEventId = data.email_id;

    const supabase = await createClient();

    // Map back to our internal job ID using tags sent during the original email request
    const jobId = data.tags?.job_id;

    if (jobId) {
      // Deduplicate and update
      const { error } = await supabase
        .from('jobs')
        .update({ status: type, updated_at: new Date().toISOString() })
        .eq('id', jobId)
        .neq('status', type); // Prevent stale overwrites

      if (error) throw error;
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('Resend Webhook Error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 400 });
  }
}
