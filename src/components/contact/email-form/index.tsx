import { Resend } from 'resend'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { info } from '@/lib/data'
import EmailTemplate from './email-template'
import SendBtn from './send-btn'

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY)
const EmailForm: React.FC = () => {
  const sendEmail = async (formData: FormData) => {
    'use server'
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'ttien56906@gmail.com',
      reply_to: formData.get('email') as string,
      subject: formData.get('subject') as string,
      text: formData.get('message') as string,
      react: <EmailTemplate formData={formData} />,
      tags: [{ name: 'contact', value: 'contact' }],
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send me an email</CardTitle>
        <CardDescription>Contact me at {info.email}</CardDescription>
      </CardHeader>

      <form action={sendEmail}>
        <CardContent className="space-y-2">
          <section>
            <Label>Email</Label>
            <Input required type="email" name="email" placeholder="Where should I reply?" />
          </section>

          <section>
            <Label>Subject</Label>
            <Input required type="text" name="subject" placeholder="What is it about?" />
          </section>

          <section>
            <Label>Message</Label>
            <Textarea required name="message" placeholder="What do you want to tell me?" />
          </section>
        </CardContent>

        <CardFooter className="flex justify-end">
          <SendBtn />
        </CardFooter>
      </form>
    </Card>
  )
}

export default EmailForm
