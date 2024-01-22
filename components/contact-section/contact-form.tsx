'use client'

import { Loader2Icon } from 'lucide-react'
import { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { sendEmail } from '@/lib/actions'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const initialFormState = {
  message: '',
}

const ContactForm: React.FC = () => {
  const [state, formAction] = useFormState(sendEmail, initialFormState)
  useEffect(() => {
    if (state.message !== undefined) toast(state.message)
  }, [state])

  return (
    <Card className="grid grid-cols-1 border md:grid-cols-2">
      <CardHeader className="flex-col items-start">
        <h2>Contact Form</h2>

        <CardTitle className="text-2xl font-bold">
          Let&apos;s work together! <span className="text-primary">👋</span>
        </CardTitle>

        <CardDescription className="mt-8">
          I&apos;m currently open to new opportunities, my inbox is always open. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to you!
        </CardDescription>
      </CardHeader>

      <CardContent id="contact-form">
        <form className="my-8 flex flex-col items-center gap-4" action={formAction}>
          <Input name="subject" placeholder="Subject" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Textarea name="message" placeholder="Message" required />

          <p className="text-destructive">{state?.error}</p>

          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  )
}

export default ContactForm

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending && <Loader2Icon className="animate-spin" />}
      Send Message
    </Button>
  )
}
