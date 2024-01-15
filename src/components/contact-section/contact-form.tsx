'use client'

import { sendEmail } from '@/lib/actions'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { toast } from 'sonner'

const Card = dynamic(() => import('@nextui-org/react').then((mod) => mod.Card))
const CardHeader = dynamic(() => import('@nextui-org/react').then((mod) => mod.CardHeader))
const CardBody = dynamic(() => import('@nextui-org/react').then((mod) => mod.CardBody))
const Input = dynamic(() => import('@nextui-org/react').then((mod) => mod.Input))
const Textarea = dynamic(() => import('@nextui-org/react').then((mod) => mod.Textarea))
const Button = dynamic(() => import('@nextui-org/react').then((mod) => mod.Button))

const initialFormState = {
  message: '',
}

const ContactForm: React.FC = () => {
  const [state, formAction] = useFormState(sendEmail, initialFormState)
  useEffect(() => {
    if (state.message !== '') toast(state.message)
  }, [state])

  return (
    <Card className="grid grid-cols-1 border md:grid-cols-12">
      <CardHeader as="article" className="col-span-7 flex-col items-start prose-headings:m-0">
        <h1>Contact Form</h1>

        <h2>
          Let&apos;s work together! <span className="text-primary">👋</span>
        </h2>

        <p className="mt-8">
          I&apos;m currently open to new opportunities, my inbox is always open. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
      </CardHeader>

      <CardBody className="col-span-5">
        <form className="space-y-4" action={formAction}>
          <Input name="subject" variant="bordered" label="Subject" />
          <Input name="email" variant="bordered" label="Email" type="email" />
          <Textarea name="message" variant="bordered" label="Message" />

          <span className="text-danger">{state?.error}</span>

          <SubmitButton />
        </form>
      </CardBody>
    </Card>
  )
}

export default ContactForm

const SubmitButton: React.FC = () => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" isLoading={pending} fullWidth>
      Send Message
    </Button>
  )
}
