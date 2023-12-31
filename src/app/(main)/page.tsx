import type { NextPage } from 'next'

import AboutSection from '@/components/about'
import ContactSection from '@/components/contact'
import HomeSection from '@/components/home'
import PostsSection from '@/components/posts'

const Page: NextPage = () => (
  <div className="landing-page">
    <HomeSection />
    <AboutSection />
    <PostsSection type="projects" />
    <PostsSection type="blogs" />
    <ContactSection />
  </div>
)

export default Page
