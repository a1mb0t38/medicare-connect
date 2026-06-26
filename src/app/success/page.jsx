import { redirect } from 'next/navigation'

import { stripe } from '@/lib/stripe'
import Link from 'next/link'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  // const {
  //   status,
  //   customer_details: { email: customerEmail }
  // } = await stripe.checkout.sessions.retrieve(session_id, {
  //   expand: ['line_items', 'payment_intent']
  // })

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })
  const {status} = session;
  const customerEmail = session.customer_details?.email;

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {

    await fetch(`${process.env.BASE_URL}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
           patientId: session.metadata.patientId,
            doctorId: session.metadata.doctorId,
            appointmentDate: session.metadata.appointmentDate,
            appointmentTime:session.metadata.appointmentTime,
            appointmentStatus: "Pending",
            symptoms: session.metadata.symptoms,
            consultationFee: session.metadata.consultationFee,
            paymentStatus: "paid"
      }),
    })

    return (
      <section className='min-h-screen flex items-center justify-center' id="success">
        {/* <p>
          We appreciate your business! A confirmation email will be sent to{' '}
          {customerEmail}. If you have any questions, please email{' '}
        </p> */}
        <div className='max-w-[800px] w-full text-center'>
          <div className='space-y-4'>
            <h1 className='text-3xl font-bold'>Your payment for appointment has successfull</h1>
          <button className='btn'><Link href='/doctors'>Go back</Link></button>
          </div>
        </div>
      </section>
    )
  }
}