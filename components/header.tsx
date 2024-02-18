'use client'

import { MenuIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { MotionDiv } from '@/components/motion'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/lib/site'
import { useTheme } from 'next-themes'

export const Header: React.FC = () => (
  <header className="sticky inset-0 z-50 flex h-fit items-start justify-between p-4 pb-0">
    <MenuBtn />
    <ThemeBtn />
  </header>
)

const MenuBtn: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <button aria-label="menu-toggle" onClick={() => setOpen(!open)}>
        <XIcon
          size={32}
          className={`absolute transition-all duration-500 ease-linear ${open ? 'rotate-180' : 'rotate-0 opacity-0'}`}
        />
        <MenuIcon
          size={32}
          className={`transition-all duration-500 ease-linear ${open ? 'rotate-180 opacity-0' : 'rotate-0'}`}
        />
      </button>

      <MotionDiv
        className="absolute flex h-fit w-56 gap-4 p-4"
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
          </nav>
        </Card>
      </MotionDiv>
    </>
  )
}

const ThemeBtn: React.FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button aria-label="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <SunIcon size={32} className="absolute rotate-0 opacity-100 dark:rotate-90 dark:opacity-0" />
      <MoonIcon size={32} className="rotate-180 opacity-0 dark:rotate-0 dark:opacity-100" />
    </button>
  )
}
