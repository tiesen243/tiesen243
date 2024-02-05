import type { NextPage } from 'next'

import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import HomeSection from '@/components/home-section'

const Page: NextPage = () => (
  <main className="landing flex-grow">
    <HomeSection />
    <AboutSection />
    <ContactSection />
  </main>
)

export default Page
