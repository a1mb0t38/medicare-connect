import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '@/lib/stripe'

export async function POST(req) {
  const body = await req.json()


  try {
    const headersList = await headers()
    const origin = headersList.get('origin')

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price: 'price_1TmQgKP7P7EBNkzXZLzuIPnv',
          quantity: 1,
        },
      ],
      mode: 'payment',
      metadata: {
           patientId: body.patientId,
            doctorId: body.doctorId,
            appointmentDate: body.appointmentDate,
            appointmentTime: body.appointmentTime,
            appointmentStatus: "Pending",
            symptoms: body.symptoms,
            consultationFee: body.consultationFee,
            paymentStatus: "paid"
      },
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    // return NextResponse.redirect(session.url, 303)
    return NextResponse.json({
      url: session.url
    })
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}