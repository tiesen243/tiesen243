import ContactForm from './contact-form'
import Social from './social'

const ContactSection: React.FC = () => (
  <section id="contact" className="container min-h-dvh space-y-8 pt-4">
    <article className="prose-h2:m-0 prose-h2:pb-2">
      <h2>Contact</h2>
    </article>

    <Social />

    <ContactForm />
  </section>
)

export default ContactSection
