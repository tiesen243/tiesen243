import type { NextPage } from 'next'

import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import HeroSection from '@/components/hero-section'

const Page: NextPage = () => (
  <main className="flex-grow">
    <HeroSection />
    <AboutSection />
    <ContactSection />
  </main>
)

export default Page
