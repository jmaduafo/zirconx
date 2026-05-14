import {contactSchema} from '@/zod/validation'
import emailjs from '@emailjs/browser'
import * as z from 'zod'

export const sendEmail = async (form: z.infer<typeof contactSchema>) => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    
    const templateParams = {
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      phone: form.phone,
      type: form.type,
      date: form.date,
      address: form.address,
      budget: form.budget,
      guests: form.guests,
      services: form.services.join(', '),
      additional: form.additional,
    }

    
    return emailjs.send(serviceId, templateId, templateParams, publicKey)
  
}
