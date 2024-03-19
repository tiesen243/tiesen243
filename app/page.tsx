'use client'

import type { NextPage } from 'next'

import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/header'), { ssr: false })
const HeroSection = dynamic(() => import('@/components/hero-section'), { ssr: false })
const AboutSection = dynamic(() => import('@/components/about-section'), { ssr: false })
const ContactSection = dynamic(() => import('@/components/contact-section'), { ssr: false })

const Page: NextPage = () => (
  <>
    <Header />

    <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </main>
  </>
)

export default Page
