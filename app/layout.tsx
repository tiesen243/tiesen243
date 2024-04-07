import { siteConfig } from '@/lib/site'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = siteConfig.metadata

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

import './globals.css'
import { cn } from '@/lib/utils'
const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'flex min-h-screen flex-col overflow-x-hidden bg-background font-sans antialiased',
        fonts
      )}
    >
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
