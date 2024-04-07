import {
  CoffeeIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react'

export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://tiesen.id.vn' : 'http://localhost:3000'

export type Site = typeof siteConfig

export const siteConfig = {
  metadata: {
    metadataBase: new URL(baseUrl),
    title: { default: 'Tiesen', template: '%s | Tiesen' },
    description:
      "Hi there, I'm Tiesen, a web developer from Vietnam. I seft-taught and love to build new things.",
    authors: { name: 'Tiesen', url: baseUrl },
    creator: '@tiesen243',
    keywords: ['tiesen', 'tiesen243', 'tiesen 243', 'Trần Tiến', 'Tran Tien', 'portfolio', 'blog'],
    applicationName: 'Tiesen',
    openGraph: {
      type: 'profile',
      locale: 'vi_VN',
      url: baseUrl,
      siteName: 'Tiesen',
      images: '/og.jpg',
    },
    twitter: {
      card: 'summary_large_image',
      creator: '@tiesen243',
      images: '/og.jpg',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    alternates: { canonical: baseUrl },
  },
  email: 'ttien56906@gmail.com',

  socials: [
    {
      label: 'Github',
      href: 'https://github.com/tiesen243',
      icon: GithubIcon,
    },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/tiesen243/',
      icon: LinkedinIcon,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/tiesen243/',
      icon: FacebookIcon,
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/tiesen243',
      icon: TwitterIcon,
    },
    {
      label: 'Youtube',
      href: 'https://www.youtube.com/@tiesen243',
      icon: YoutubeIcon,
    },
    {
      label: 'Support me',
      href: 'https://me.momo.vn/tiesen243',
      icon: CoffeeIcon,
    },
  ],

  navLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'About',
      url: '/#about',
    },

    {
      label: 'Contact',
      url: '/#contact',
    },
    {
      label: 'Projects',
      url: '/projects',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
  ],
}
