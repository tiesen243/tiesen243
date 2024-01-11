'use client'

import { Button, Card, CardBody, CardFooter, CardHeader, Input, Textarea } from '@nextui-org/react'
import { useState } from 'react'

import Typography, { Heading } from '@/components/ui/typography'
import { sendEmail } from './actions'
import { errorToast, successToast } from '@/lib/utils'

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<{
    pending: boolean
    error: string | null
  }>({ pending: false, error: null })

  const send = async (formData: FormData) => {
    setFormState({ pending: true, error: null })
    const res = await sendEmail(formData)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (res.error) {
      errorToast(res.error)
      setFormState({ pending: false, error: res.error })
    }
    if (res.message) {
      successToast(res.message)
      console.log(res.message)

      setFormState({ pending: false, error: null })
    }
  }

  return (
    <Card id="contact-form" className="border">
      <CardHeader>
        <Heading>Contact Form</Heading>
      </CardHeader>

      <form action={send}>
        <CardBody className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Typography>
            <h3>Let Connect</h3>
            <p>
              I&apos;m currently looking for new opportunities, my inbox is always open. Whether you
              have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>
          </Typography>
          <section className="space-y-4">
            <Input name="subject" label="Subject" variant="bordered" isRequired />
            <Input name="email" label="Email" type="email" variant="bordered" isRequired />
            <Textarea name="message" label="Message" variant="bordered" isRequired />
          </section>
        </CardBody>

        <CardFooter className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="hidden md:block" />
          <Button type="submit" isLoading={formState.pending}>
            Send Message
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default ContactForm
