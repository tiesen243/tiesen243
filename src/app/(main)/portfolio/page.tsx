import { NextPage } from 'next'
import { AboutSection, BlogsSection, ContactSection, ProjectsSection } from '@/components/porfolio'

const Page: NextPage = () => (
  <>
    <AboutSection />
    <ProjectsSection />
    <BlogsSection />
    <ContactSection />
  </>
)

export default Page
