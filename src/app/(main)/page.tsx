import { NextPage } from 'next'

import AboutSection from '@/components/about'
import ContactSection from '@/components/contact'
import HomeSection from '@/components/home'
import PostsSection from '@/components/posts'

const Page: NextPage = () => (
  <>
    <HomeSection />
    <AboutSection />
    <PostsSection type="projects" />
    <PostsSection type="blogs" />
    <ContactSection />
  </>
)

export default Page
