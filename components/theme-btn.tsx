'use client'

import { Loader2Icon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import { Button } from './ui/button'

export const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  React.useEffect(() => setIsMounted(true), [])
  if (!isMounted) return <Button variant="secondary" size="icon" isLoading />

  return (
    <Tabs defaultValue={theme} onValueChange={toggleTheme}>
      <TabsList>
        <TabsTrigger value="light">
          <SunIcon />
        </TabsTrigger>
        <TabsTrigger value="dark">
          <MoonIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
