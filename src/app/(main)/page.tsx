import { NextPage } from 'next'

import AboutSection from '@/components/about'
import BlogsSection from '@/components/blogs'
import ContactSection from '@/components/contact'
import HomeSection from '@/components/home'
import ProjectsSection from '@/components/projects'

const Page: NextPage = () => (
  <>
    <HomeSection />
    <AboutSection />
    <ProjectsSection />
    <BlogsSection />
    <ContactSection />
  </>
)

export default Page
