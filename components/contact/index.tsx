import { ContactForm } from './form'
import { Socials } from './socials'

export const Contact: React.FC = () => (
  <section id="contact" className="space-y-8 pt-4">
    <h2 className="bg-gradient-to-br from-[var(--from)] to-[var(--to)] bg-clip-text text-6xl font-extrabold text-transparent">
      Contact
    </h2>

    <Socials />
    <ContactForm />
  </section>
)
