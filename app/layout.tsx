import { siteConfig } from '@/lib/site'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <ThemeProvider>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </ThemeProvider>

      <Analytics />
      <SpeedInsights />
    </body>
  </html>
)

export default RootLayout
