import { baseUrl, siteConfig } from '@/lib/site'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: siteConfig.title,
  metadataBase: new URL(baseUrl),
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  applicationName: siteConfig.title.default,
  keywords: siteConfig.keywords,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  alternates: { canonical: baseUrl },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { fonts } from '@/lib/fonts'

import '@/styles/globals.css'
const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={fonts}>
      <ThemeProvider>
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
