'use client'

import { Button } from '@nextui-org/react'
import { MoonIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  return (
    <Button onClick={toggleTheme} variant="bordered" isIconOnly>
      {theme === 'light' ? <MoonIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ThemeBtn
