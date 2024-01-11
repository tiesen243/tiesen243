import ContactForm from '@/components/contact-form'
import type { NextPage } from 'next'

import Typography, { Heading } from '@/components/ui/typography'
import { email } from '@/lib/contact'
import Social from './_social'

const Page: NextPage = () => (
  <section id="contact" className="flex min-h-dvh flex-col gap-8 pt-20 prose-a:no-underline">
    <Typography>
      <Heading>Contact</Heading>
      <blockquote>
        I&apos; m always open to new opportunities. If you want to get in touch, feel free to email
        me at{' '}
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 hover:underline"
        >
          {email}
        </a>
      </blockquote>
    </Typography>

    <Social />

    <ContactForm />
  </section>
)

export default Page
