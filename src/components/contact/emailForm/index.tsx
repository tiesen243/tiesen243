import { Card, CardContent, CardFooter, Input, Label, Textarea } from '@/components/ui'
import { action } from './action'
import FormHeader from './formHeader'
import SendBtn from './sendBtn'

const EmailForm: React.FC = () => (
  <Card>
    <FormHeader />
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
        <SendBtn />
      </CardFooter>
    </form>
  </Card>
)

export default EmailForm
