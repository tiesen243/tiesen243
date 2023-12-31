import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: 'Tiesen243',
    template: '%s | Tiesen243',
  },
  description: "I'm a wibu developer from Vietnam.",
  classification: 'Personal',
  keywords: ['Tiesen', 'Tiesen243', 'Tran Tien', 'Tien Tran', 'portfolio'],
  openGraph: {
    url: appUrl,
    title: {
      default: 'Tiesen243',
      template: '%s | Tiesen243',
    },
    description: "I'm a wibu developer from Vietnam.",
    type: 'profile',
    siteName: 'Tiesen243',
    locale: 'vi_VN',
    images: [
      {
        url: '/images/logo.png',
        width: 200,
        height: 200,
        alt: 'tiesen243',
      },
    ],
  },
  twitter: {
    site: '@tiesen243',
    title: {
      default: 'Tiesen243',
      template: '%s | Tiesen243',
    },
    description: "I'm a wibu developer from Vietnam.",
    card: 'summary_large_image',
    creator: 'tiesen243',
    images: '/images/logo.png',
  },
  alternates: {
    canonical: appUrl,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
}

import fontSans from '@/lib/fonts'
import { cn } from '@/lib/utils'
import './globals.css'
const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" className="dark" suppressHydrationWarning>
    <body className={cn('h-max bg-background font-sans antialiased', fontSans)}>
      {children}
      <Analytics />
    </body>
  </html>
)

export default RootLayout
