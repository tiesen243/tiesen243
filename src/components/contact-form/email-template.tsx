import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Img,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

interface Props {
  formData: FormData
}

const EmailTemplate: React.FC<Props> = ({ formData }) => {
  const email = formData.get('email') as string
  const subject = formData.get('subject') as string
  const message = formData.get('message') as string
  return (
    <Html>
      <Head>
        <title>{subject}</title>
      </Head>

      <Preview>{subject}</Preview>

      <Tailwind>
        <Body className="bg-[#09090b] text-white">
          <Container>
            <Section>
              <Heading>You have a new message from contact form</Heading>
              <Text>The sender&#39;s email is {email}</Text>
              <Hr />
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default EmailTemplate
