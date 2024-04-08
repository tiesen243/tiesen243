import { siteConfig } from '@/lib/site'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = siteConfig.metadata

import { fonts } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import Footer from '@/components/footer'
import Provider from '@/components/provider'
import './globals.css'
const RootLayout: NextPage<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body
      className={cn(
        'flex min-h-dvh flex-col gap-4 bg-background font-sans text-foreground antialiased',
        fonts,
      )}
    >
      <Provider>
        <main className="container flex-grow">{children}</main>
        <Footer />
      </Provider>

      <SpeedInsights />
      <Analytics />
    </body>
  </html>
)

export default RootLayout
