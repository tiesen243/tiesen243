'use client'

import { Button } from '@nextui-org/react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { FC, useEffect, useState } from 'react'

const ThemeBtn: FC = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <Button variant="bordered" size="sm" isIconOnly isLoading />

  return (
    <Button variant="bordered" size="sm" onClick={toggleTheme} isIconOnly>
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ThemeBtn
