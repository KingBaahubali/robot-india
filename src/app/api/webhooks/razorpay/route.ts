import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@/lib/auth/server';

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get('x-razorpay-signature');
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || 'dummy';

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 401 });
    }

    // Verify Razorpay signature
    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(rawBody)
      .digest('hex');

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(rawBody);
    const supabase = await createClient();

    // Handle payment.captured event
    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;
      const orderId = payment.notes?.order_id;
      const amount = payment.amount;
      const currency = payment.currency;

      if (orderId) {
        // Run as transaction in real environment
        const { data: order, error: fetchError } = await supabase
          .from('proposals')
          .select('total_amount_minor, currency, state')
          .eq('id', orderId)
          .single();

        if (fetchError || !order) {
           return NextResponse.json({ error: 'Order not found' }, { status: 404 });
        }

        // Validate amount and currency match the immutable record
        if (order.total_amount_minor === amount && order.currency === currency) {
          // Update order state to paid
          const { error: updateError } = await supabase
            .from('proposals')
            .update({ state: 'Paid', updated_at: new Date().toISOString() })
            .eq('id', orderId);
            
          if (updateError) throw updateError;
        } else {
          console.error('Payment mismatch:', { expected: order.total_amount_minor, actual: amount });
          return NextResponse.json({ error: 'Amount/Currency mismatch' }, { status: 400 });
        }
      }
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error('Razorpay Webhook Error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
