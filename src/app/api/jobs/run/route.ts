import { NextResponse } from 'next/server';
import { createClient } from '@/lib/auth/server';

export async function GET(request: Request) {
  try {
    // 1. Verify Cron Bearer Secret
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET || 'dummy_cron';
    
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const supabase = await createClient();

    // 2. Claim pending jobs (Mocked implementation)
    // In PostgreSQL, this would use: SELECT * FROM jobs WHERE status = 'Pending' AND run_after <= NOW() FOR UPDATE SKIP LOCKED
    const { data: jobs, error: fetchError } = await supabase
      .from('jobs')
      .select('*')
      .eq('status', 'Pending')
      .lte('run_after', new Date().toISOString())
      .limit(10);

    if (fetchError) throw fetchError;
    if (!jobs || jobs.length === 0) {
      return NextResponse.json({ processed: 0 }, { status: 200 });
    }

    let processedCount = 0;

    // 3. Process jobs
    for (const job of jobs) {
      try {
        // Mark as running (lease)
        await supabase.from('jobs').update({ status: 'Running' }).eq('id', job.id);

        // Execute job based on type (e.g., 'email', 'publish', 'payment_reconciliation')
        if (job.type === 'transactional_email') {
          // Call Resend adapter
        }

        // Mark as completed
        await supabase.from('jobs').update({ status: 'Completed', updated_at: new Date().toISOString() }).eq('id', job.id);
        processedCount++;

      } catch (err: any) {
        // Handle failure, increment attempt count, set next run_after
        const nextAttempt = job.attempt_count + 1;
        const nextRun = new Date(Date.now() + Math.pow(5, nextAttempt) * 60000); // Exponential backoff

        await supabase.from('jobs').update({ 
          status: nextAttempt >= 4 ? 'Failed' : 'Pending', 
          attempt_count: nextAttempt,
          run_after: nextRun.toISOString(),
          last_error: err.message || 'Unknown error'
        }).eq('id', job.id);
      }
    }

    return NextResponse.json({ processed: processedCount }, { status: 200 });
  } catch (error) {
    console.error('Job Runner Error:', error);
    return NextResponse.json({ error: 'Job runner failed' }, { status: 500 });
  }
}
