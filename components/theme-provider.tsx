'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import * as nextThemes from 'next-themes'
import * as React from 'react'
import * as tabs from '@/components/ui/tabs'

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <nextThemes.ThemeProvider attribute="class" disableTransitionOnChange>
    {children}
  </nextThemes.ThemeProvider>
)

export const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = nextThemes.useTheme()
  const [mounted, setMounted] = React.useState<boolean>(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <tabs.Tabs defaultValue={theme}>
      <tabs.TabsList>
        <tabs.TabsTrigger value="light" onClick={() => setTheme('light')} aria-label="Light Theme">
          <SunIcon />
        </tabs.TabsTrigger>
        <tabs.TabsTrigger value="dark" onClick={() => setTheme('dark')} aria-label="Dark Theme">
          <MoonIcon />
        </tabs.TabsTrigger>
      </tabs.TabsList>
    </tabs.Tabs>
  )
}
