'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes'
import * as React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <NextThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
    {children}
  </NextThemeProvider>
)

export const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState<boolean>(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <Tabs defaultValue={theme}>
      <TabsList>
        <TabsTrigger value="light" onClick={() => setTheme('light')}>
          <SunIcon />
        </TabsTrigger>
        <TabsTrigger value="dark" onClick={() => setTheme('dark')}>
          <MoonIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
