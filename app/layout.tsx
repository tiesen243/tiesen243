import type { Metadata, NextPage } from 'next'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = siteConfig.metadata

import { fonts } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import Provider from '@/components/provider'
import './globals.css'
import Footer from '@/components/footer'
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
    </body>
  </html>
)

export default RootLayout
