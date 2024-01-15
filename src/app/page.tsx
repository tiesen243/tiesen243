import type { NextPage } from 'next'

import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'

const Page: NextPage = () => (
  <div className="landing">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
  </div>
)

export default Page
