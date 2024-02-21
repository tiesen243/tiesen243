'use client'

import { Loader2Icon } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import { toast } from 'sonner'
import { useRef } from 'react'

import { Button } from '@/components/ui/button'
import * as card from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import sendEmail from '@/lib/send-email'

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const send = async (formData: FormData) => {
    const res = await sendEmail(formData)
    if (res.error) return toast.error(res.message)
    formRef.current?.reset()
    return toast.success(res.message)
  }

  return (
    <card.Card className="grid grid-cols-1 border md:grid-cols-2">
      <card.CardHeader className="flex-col items-start">
        <h2 className="bg-gradient-text bg-clip-text text-6xl font-extrabold text-transparent">
          Contact Form
        </h2>

        <card.CardTitle className="text-2xl font-bold">
          Let&apos;s work together! <span className="text-primary">👋</span>
        </card.CardTitle>

        <card.CardDescription className="mt-8">
          I&apos;m currently open to new opportunities, my inbox is always open. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to you!
        </card.CardDescription>
      </card.CardHeader>

      <form className="mt-8" action={send} ref={formRef}>
        <card.CardContent id="contact-form" className="flex flex-col items-center gap-4">
          <Input name="subject" placeholder="Subject" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Textarea name="message" placeholder="Message" required />
        </card.CardContent>

        <card.CardFooter className="justify-end">
          <SubmitButton />
        </card.CardFooter>
      </form>
    </card.Card>
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
