'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => setIsMounted(true), [])
  if (!isMounted) return <Button variant="secondary" size="icon" isLoading />

  return (
    <Tabs defaultValue={theme} onValueChange={toggleTheme}>
      <TabsList>
        <TabsTrigger value="light" aria-label="Light Theme" aria-controls="light">
          <SunIcon />
        </TabsTrigger>
        <TabsTrigger value="dark" aria-label="Dark Theme" aria-controls="dark">
          <MoonIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
