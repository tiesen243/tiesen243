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
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

interface Props {
  email: string
  subject: string
  message: string
}

const EmailTemplate: React.FC<Props> = ({ email, subject, message }) => (
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

export default EmailTemplate
