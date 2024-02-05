import {
  CoffeeIcon,
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from 'lucide-react'

export type Site = typeof siteConfig

export const siteConfig = {
  title: 'Tiesen',
  description:
    "Hi there, I'm Tiesen, a web developer from Vietnam. I seft-taught and love to build new things.",
  url: 'https://tiesen.id.vn',
  author: 'Tiesen',
  creator: '@tiesen243',
  locale: 'vi_VN',
  keywords: ['tiesen', 'tiesen243', 'tiesen 243', 'Trần Tiến', 'Tran Tien', 'portfolio', 'blogs'],
  email: 'ttien56906@gmail.com',
  openGraph: {
    type: 'profile',
    locale: 'vi_VN',
    title: {
      default: 'Tiesen',
      template: '%s | Tiesen',
    },
    description:
      "Hi there, I'm Tiesen, a web developer from Vietnam. I seft-taught and love to build new things.",
    url: 'https://tiesen.id.vn',
    siteName: 'Tiesen',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'Tiesen',
      template: '%s | Tiesen',
    },
    description:
      "Hi there, I'm Tiesen, a web developer from Vietnam. I seft-taught and love to build new things.",
    creator: '@tiesen243',
  },
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
      label: 'Blogs',
      url: '/blogs',
    },
  ],

  env: {
    githubToken: process.env.NEXT_PUBLIC_GITHUB_TOKEN || '',
    resendToken: process.env.NEXT_PUBLIC_RESEND_TOKEN || '',
    projectsApi: process.env.NEXT_PUBLIC_PROJECTS_API || '',
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT || '',
    rawcontent: process.env.NEXT_PUBLIC_RAWCONTENT_ENDPOINT || '',
  },
}
