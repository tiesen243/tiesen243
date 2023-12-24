import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { action } from './action'
import FormHeader from './form-header'
import SendBtn from './send-btn'

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
