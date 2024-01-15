'use client'

import { Loader2Icon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  if (!mounted)
    return (
      <Button aria-label="theme-btn" variant="outline" size="icon">
        <Loader2Icon className="animate-spin" />
      </Button>
    )

  return (
    <Button aria-label="theme-btn" onClick={toggleTheme} variant="outline" size="icon">
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default ThemeBtn
