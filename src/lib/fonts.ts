import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { cn } from './utils'

const fontSans = cn(
  'min-h-screen bg-background font-sans antialiased',
  `${GeistSans.variable} ${GeistMono.variable}`
)

export default fontSans
