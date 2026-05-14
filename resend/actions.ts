'use server'

import {contactSchema} from '@/zod/validation'
import {Resend} from 'resend'
import * as z from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: z.infer<typeof contactSchema>) {
  try {
    const {data, error} = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jmaduafokwa@hotmail.com',
      replyTo: formData.email,
      subject: `New Event Inquiry from ${formData.first_name} ${formData.last_name}`,

      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>First name:</strong> ${formData.first_name}</p>
        <p><strong>Last name:</strong> ${formData.last_name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone number:</strong> ${formData.phone}</p>
        <p><strong>Event type:</strong> ${formData.type}</p>
        <p><strong>Event date:</strong> ${formData.date}</p>
        <p><strong>Event location:</strong> ${formData.address}</p>
        <p><strong>Budget:</strong> ${formData.budget}</p>
        <p><strong>Guests:</strong> ${formData.guests}</p>
        <p><strong>Services:</strong> ${formData.services.join(', ')}</p>
        <p><strong>Information about ${formData.first_name}'s event:</strong> ${formData.additional}</p>
      `,
    })

    if (error) {
      return {error}
    }
    return {data}
  } catch (error) {
    return {error}
  }
}
