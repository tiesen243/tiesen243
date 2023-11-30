'use server'

import { Resend } from 'resend'
import EmailTemplate from './emailTemplate'

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY)
export const action = async (formData: FormData) => {
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string

  await resend.emails.send({
    from: 'Contact Form <onboarding@resend.dev>',
    to: 'ttien56906@gmail.com',
    reply_to: email,
    subject: subject,
    text: message,
    react: <EmailTemplate email={email} subject={subject} message={message} />,
    tags: [{ name: 'contact', value: 'contact' }],
  })
}
