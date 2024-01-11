import type { Metadata, Viewport } from 'next'
import { cn } from '@nextui-org/react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  metadataBase: new URL('https://tiesen.id.vn'),
  title: {
    default: 'Tiesen',
    template: '%s | Tiesen',
  },
  description: "Hi, I'm Tiesen. I'm a software engineer and a student.",

  openGraph: {
    title: {
      default: 'Tiesen',
      template: '%s | Tiesen',
    },
    description: "Hi, I'm Tiesen. I'm a software engineer and a student.",
    type: 'profile',
    locale: 'vi_VN',
    url: 'https://tiesen.id.vn',
    siteName: 'Tiesen',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Tiesen',
      },
    ],
  },

  twitter: {
    title: {
      default: 'Tiesen',
      template: '%s | Tiesen',
    },
    description: "Hi, I'm Tiesen. I'm a software engineer and a student.",
    images: '/logo.png',
    card: 'summary_large_image',
    creator: '@tiesen243',
    creatorId: '@tiesen243',
  },

  alternates: {
    canonical: 'https://tiesen.id.vn',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  height: 'device-height',
}

import './globals.css'
import 'highlight.js/styles/base16/dracula.css'
import ThemeProvider from '@/components/theme-provider'
const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={cn('min-h-dvh font-sans antialiased', GeistSans.variable, GeistMono.variable)}>
      <ThemeProvider>{children}</ThemeProvider>
    </body>
  </html>
)

export default RootLayout
