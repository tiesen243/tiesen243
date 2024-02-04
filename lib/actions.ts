'use server'

import { Resend } from 'resend'
import { siteConfig } from './site'

const resend = new Resend(siteConfig.env.resendToken)
export const sendEmail = async (formData: FormData) => {
  try {
    const data = {
      subject: String(formData.get('subject')),
      email: String(formData.get('email')),
      message: String(formData.get('message')),
    }

    if (!data.subject || !data.email || !data.message)
      throw new Error('Please fill out all fields.')

    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: siteConfig.email,
      reply_to: data.email,
      subject: data.subject,
      text: data.message,
      tags: [{ name: 'contact', value: 'contact' }],
    })

    await new Promise((resolve) => setTimeout(resolve, 2000))

    return { message: 'Your message has been sent!' }
  } catch (e: any) {
    return { error: e.message }
  }
}
