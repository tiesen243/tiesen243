'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { MotionDiv } from '@/components/motion'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/lib/site'
import { useTheme } from 'next-themes'
import { Switch } from './ui/switch'

const Menu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <button className="fixed top-4 z-50 text-primary" onClick={() => setOpen(!open)}>
        <XIcon
          size={32}
          className={`absolute transition-all duration-500 ease-linear ${open ? 'rotate-180' : 'rotate-0 opacity-0'}`}
        />
        <MenuIcon
          size={32}
          className={`absolute transition-all duration-500 ease-linear ${open ? 'rotate-180 opacity-0' : 'rotate-0'}`}
        />
      </button>

      <MotionDiv
        className="fixed z-40 flex h-fit w-56 gap-4 p-4"
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: open ? 0 : '-100%', opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setOpen(false)}
      >
        <div className="mt-8 h-auto w-[2px] bg-gradient-to-b from-primary/60 via-primary to-primary/60" />

        <Card className="mt-8 w-full bg-background p-4 shadow-lg">
          <nav className="flex flex-col justify-center space-y-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="text-2xl font-bold underline-offset-4 hover:underline"
              >
                {link.label}
              </Link>
            ))}

            <ThemeBtn />
          </nav>
        </Card>
      </MotionDiv>
    </>
  )
}

export default Menu

const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  const [mounted, setMounted] = useState<boolean>(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div className="flex select-none items-center justify-between text-left text-2xl font-bold">
      <label htmlFor="theme">Dark</label>
      <Switch id="theme" checked={theme === 'dark'} onCheckedChange={toggleTheme} />
    </div>
  )
}
