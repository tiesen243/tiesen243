'use client'

import { Loader2Icon } from 'lucide-react'
import * as React from 'react'
import { useFormStatus } from 'react-dom'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import * as card from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { siteConfig } from '@/lib/site'

const ContactForm: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement>(null)

  const send = async (formData: FormData) => {
    try {
      const data = Object.fromEntries(formData)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const res: {
        error?: Record<string, string>
        message?: string
      } = await fetch(process.env.NEXT_PUBLIC_SEND_EMAIL!, {
        method: 'POST',
        body: JSON.stringify({
          from: 'Contact Form',
          to: siteConfig.email,
          reply_to: data.email,
          subject: data.subject,
          message: data.message,
        }),
      }).then((res) => res.json())

      if (res.error)
        return toast.error("Email couldn't be sent", {
          description: Object.values(res.error).map((err: string, idx: number) => (
            <p key={idx}>{err}</p>
          )),
        })

      formRef.current?.reset()
      return toast.success(res.message)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error instanceof Error) toast.error(error.message)
    }
  }

  return (
    <card.Card className="grid grid-cols-1 border md:grid-cols-2">
      <card.CardHeader className="flex-col items-start">
        <h2 className="bg-gradient-to-br from-[var(--from)] to-[var(--to)] bg-clip-text text-6xl font-extrabold text-transparent">
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
          <Input name="subject" placeholder="Subject" />
          <Input name="email" type="email" placeholder="Email" />
          <Textarea name="message" placeholder="Message" />
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
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2Icon className="animate-spin" /> : 'Send Message'}
    </Button>
  )
}
