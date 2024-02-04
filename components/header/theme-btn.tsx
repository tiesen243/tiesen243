'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Loader2Icon, SunIcon, MoonIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  if (!mounted)
    return (
      <Button variant="outline" size="icon" disabled>
        <Loader2Icon className="animate-spin" />
      </Button>
    )

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon">
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ThemeBtn
