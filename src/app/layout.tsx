import { variable } from '@/lib/fonts'
import { cn } from '@/lib/utils'

import type { Metadata, Viewport } from 'next'
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Tran Tien | Tiesen243',
  description: "I'm a wibu developer from Vietnam.",
  openGraph: {
    title: 'Tran Tien | Tiesen243',
    description: "I'm a wibu developer from Vietnam.",
    type: 'profile',
    url: 'https://tiesen.id.vn',
    siteName: 'Tran Tien | Tiesen243',
    locale: 'vi_VN',
    images: [
      {
        url: '/logo.png',
        width: 200,
        height: 200,
        alt: 'tiesen243',
      },
    ],
  },
  twitter: {
    site: '@tiesen243',
    title: 'Tran Tien | Tiesen243',
    description: "I'm a wibu developer from Vietnam.",
    card: 'summary_large_image',
    creator: 'tiesen243',
    images: '/logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
}

import './globals.css'
import { baseUrl } from '@/lib/constants'
const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <html lang="en" className="dark" suppressHydrationWarning>
    <body className={cn('min-h-screen bg-background font-sans antialiased', variable)}>
      {children}
    </body>
  </html>
)

export default RootLayout
