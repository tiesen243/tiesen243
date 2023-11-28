import { Card, CardHeader, CardTitle } from '@/components/ui'
import { socials } from '@/lib/data'
import MailForm from './mailForm'

const ContactSection: React.FC = () => (
  <section id="contact" className="snap-section">
    <article className="typography">
      <h1 className="border-l-8 border-secondary pl-4">Contact</h1>
    </article>

    <section className="mb-4 grid grid-cols-2 gap-2">
      {socials.map((social, idx: number) => (
        <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer">
          <Card className="flex cursor-pointer flex-col justify-between transition-colors ease-linear hover:bg-secondary">
            <CardHeader>
              <CardTitle className="flex gap-2 no-underline">
                {social.icon}
                {social.title}
              </CardTitle>
            </CardHeader>
          </Card>
        </a>
      ))}
    </section>

    <MailForm />
  </section>
)

export default ContactSection
