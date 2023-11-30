import { CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { info } from '@/lib/data'

const FormHeader: React.FC = () => (
  <CardHeader>
    <CardTitle>Send me an email</CardTitle>
    <CardDescription>Contact me at {info.email}</CardDescription>
  </CardHeader>
)

export default FormHeader
