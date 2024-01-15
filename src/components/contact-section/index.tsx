import { siteConfig } from '@/lib/site'
import Social from './social'
import ContactForm from './contact-form'

const ContactSection: React.FC = () => (
  <section id="contact" className="min-h-dvh space-y-8 pt-16">
    <article className="prose-h1:m-0">
      <h1>Contact</h1>
      <blockquote>
        I&apos;m always open to new opportunities. If you have a project that you want to get
        started, think you need my help with something or just fancy saying hey, then get in touch
        at <a href={`mailto:${siteConfig.email}`}>here</a>.
      </blockquote>
    </article>

    <Social />

    <ContactForm />
  </section>
)

export default ContactSection
