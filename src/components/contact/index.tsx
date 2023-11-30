import { Card, CardHeader } from '@/components/ui'
import { socials } from '@/lib/data'
import EmailForm from './emailForm'

const ContactSection: React.FC = () => (
  <section id="contact" className="snap-section">
    <article className="typography">
      <h1 className="border-l-8 border-secondary pl-4">Contact</h1>
    </article>

    <section className="mb-4 grid grid-cols-2 gap-2">
      {socials.map((social, idx: number) => (
        <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer">
          <Card className="cursor-pointer transition-colors ease-linear hover:bg-secondary">
            <CardHeader className="flex flex-row items-center justify-center gap-2 text-xl font-bold">
              {social.icon}
              {social.title}
            </CardHeader>
          </Card>
        </a>
      ))}
    </section>

    <EmailForm />
  </section>
)

export default ContactSection
