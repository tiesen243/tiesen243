'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { useRouter } from 'next/navigation'

const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { push } = useRouter()

  return (
    <NextUIProvider navigate={push}>
      <NextThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  )
}

export default ThemeProvider
