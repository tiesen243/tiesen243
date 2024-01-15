'use client'

import { Button } from '@nextui-org/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <Button aria-label="theme-btn" variant="bordered" isIconOnly isLoading />

  return (
    <Button aria-label="theme-btn" onClick={toggleTheme} variant="bordered" isIconOnly>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default ThemeBtn
