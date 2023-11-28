import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Textarea,
} from '@/components/ui'
import { info } from '@/lib/data'
import { SendHorizonalIcon } from 'lucide-react'
import { Resend } from 'resend'
import EmailTemplate from './emailTemplate'

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY)

const MailForm: React.FC = () => {
  const action = async (formData: FormData) => {
    'use server'
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send me an email</CardTitle>
        <CardDescription>Contact me at {info.email}</CardDescription>
      </CardHeader>

      <form action={action}>
        <CardContent className="space-y-4">
          <section className="space-y-1">
            <Label>Email</Label>
            <Input required type="email" name="email" placeholder="Where should I reply?" />
          </section>

          <section className="space-y-1">
            <Label>Subject</Label>
            <Input required type="text" name="subject" placeholder="What is it about?" />
          </section>

          <section className="space-y-1">
            <Label>Message</Label>
            <Textarea required name="message" placeholder="What do you want to tell me?" />
          </section>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button type="submit">
            Send
            <SendHorizonalIcon className="ml-2" />
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default MailForm
