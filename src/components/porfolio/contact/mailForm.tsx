'use client'

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
import { useState } from 'react'

const MailForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: '',
  })

  const href: string = `mailto:${info.email}?subject=${formData.subject}&body=${formData.message}`
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send me an email</CardTitle>
        <CardDescription>Contact me at {info.email}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <section>
          <Label>Email</Label>
          <Input
            required
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </section>

        <section>
          <Label>Subject</Label>
          <Input
            required
            type="text"
            placeholder="What is the subject of your email?"
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </section>

        <section>
          <Label>Message</Label>
          <Textarea
            required
            placeholder="What do you want to tell me?"
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </section>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button type="submit" className="space-x-4" asChild>
          <a href={href}>
            Send <SendHorizonalIcon size={20} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default MailForm
