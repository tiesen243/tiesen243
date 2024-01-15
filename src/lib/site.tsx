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
  description: "Hi there, I'm Tiesen. I'm a web developer.",
  url: 'https://tiesen.id.vn',
  image: '/images/logo.png',
  author: 'Tiesen',
  creator: '@tiesen243',
  locale: 'vi_VN',
  keywords: [
    'Tiesen',
    'Tiesen243',
    'Portfolio',
    'Blogs',
    'React',
    'Next.js',
    'Tailwindcss',
    'NextUI',
  ],
  email: 'ttien56906@gmail.com',
  openGraph: {
    type: 'profile',
    locale: 'vi_VN',
    title: {
      default: 'Tiesen',
      template: '%s | Tiesen',
    },
    description:
      "Hi there, I'm Tiesen. I'm a web developer. I'm currently studying at the Industrial University of Ho Chi Minh City. I'm passionate about building products that help people. I'm also a big fan of open source and I love to contribute to open source projects.",
    url: 'https://tiesen.id.vn',
    siteName: 'Tiesen',
    images: [
      {
        url: '/images/logo.png',
        width: 630,
        height: 630,
        alt: 'Tiesen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'Tiesen',
      template: '%s | Tiesen',
    },
    description:
      "Hi there, I'm Tiesen. I'm a web developer. I'm currently studying at the Industrial University of Ho Chi Minh City. I'm passionate about building products that help people. I'm also a big fan of open source and I love to contribute to open source projects.",
    image: '/images/logo.png',
    creator: '@tiesen243',
  },
  socials: [
    {
      label: 'Github',
      href: 'https://github.com/tiesen243',
      icon: <GithubIcon />,
    },
    {
      label: 'Linkedin',
      href: 'https://www.linkedin.com/in/tiesen243/',
      icon: <LinkedinIcon />,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/tiesen243/',
      icon: <FacebookIcon />,
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/tiesen243',
      icon: <TwitterIcon />,
    },
    {
      label: 'Youtube',
      href: 'https://www.youtube.com/@tiesen243',
      icon: <YoutubeIcon />,
    },
    {
      label: 'Buy me a coffee',
      href: 'https://me.momo.vn/tiesen243',
      icon: <CoffeeIcon />,
    },
  ],

  navLinks: [
    {
      label: 'About',
      url: '/#about',
    },
    {
      label: 'Projects',
      url: '/#projects',
    },
    {
      label: 'Contact',
      url: '/#contact',
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
    postEndpoint: process.env.NEXT_PUBLIC_POST_ENDPOINT || '',
  },
}
