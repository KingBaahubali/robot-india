import { NextResponse } from 'next/server';
import { createClient } from '@/lib/auth/server';

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const body = await request.json();

    // 1. Schema Validation (mocked here, would use Zod in prod)
    if (!body.contact_email || !body.contact_name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 2. Turnstile Verification (mocked check)
    if (!body.turnstile_token) {
      return NextResponse.json({ error: 'Security challenge failed' }, { status: 403 });
    }

    // 3. Idempotency Check
    const idempotencyKey = request.headers.get('x-idempotency-key');
    if (!idempotencyKey) {
      return NextResponse.json({ error: 'Missing idempotency key' }, { status: 400 });
    }

    // 4. Generate public reference
    const referenceId = `REQ-${Math.floor(1000 + Math.random() * 9000)}`;

    // 5. Database transaction (mocked as individual inserts for demo)
    // In real app, this goes via Supabase RPC for full transaction with the Outbox pattern
    const { data: enquiry, error } = await supabase
      .from('enquiries')
      .insert({
        reference_id: referenceId,
        contact_name: body.contact_name,
        contact_email: body.contact_email,
        requirements: body.requirements || {},
        submission_key: idempotencyKey,
      })
      .select()
      .single();

    if (error) {
      if (error.code === '23505') { // Unique violation
        return NextResponse.json({ error: 'Duplicate submission' }, { status: 409 });
      }
      throw error;
    }

    // 6. Return 201 with public reference only
    return NextResponse.json({ reference: referenceId }, { status: 201 });
    
  } catch (error) {
    console.error('Enquiry API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process enquiry. Please try again.' }, 
      { status: 500 }
    );
  }
}
