import { siteConfig } from '@/lib/site'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.creator,
  alternates: {
    canonical: siteConfig.url,
    types: {
      'application/rss+xml': [
        { url: `${siteConfig.url}/feed.xml`, title: `${siteConfig.title} RSS Feed` },
      ],
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

import Header from '@/components/header'
import ThemeProvider from '@/components/theme-provider'
import { cn } from '@nextui-org/react'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { Toaster } from '@/components/toast'
const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'min-h-dvh overflow-x-hidden font-sans',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <ThemeProvider>
        <Header />
        <main className="container mb-16 max-w-screen-lg">{children}</main>
        <Toaster />
      </ThemeProvider>
    </body>
  </html>
)

export default RootLayout
