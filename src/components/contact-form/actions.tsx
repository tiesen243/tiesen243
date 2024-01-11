'use server'

import { Resend } from 'resend'
import EmailTemplate from './email-template'

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY || '')
export const sendEmail = async (formData: FormData) => {
  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ttien56906@gmail.com',
      reply_to: formData.get('email') as string,
      subject: formData.get('subject') as string,
      text: formData.get('message') as string,
      react: <EmailTemplate formData={formData} />,
      tags: [{ name: 'contact', value: 'contact' }],
    })

    return { message: 'Email sent successfully' }
  } catch (err: any) {
    return { error: err.message }
  }
}
