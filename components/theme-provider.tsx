'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NextThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
    {children}
  </NextThemeProvider>
)
