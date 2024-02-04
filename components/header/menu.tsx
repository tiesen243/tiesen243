'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { MotionDiv } from '@/components/motion'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/lib/site'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'

const Menu: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    setOpen(false)
  }

  return (
    <>
      <Button className="z-50" variant="outline" size="icon" onClick={() => setOpen(!open)}>
        <XIcon
          size={32}
          className={`absolute transition-all duration-500 ease-linear ${open ? 'rotate-180' : 'rotate-0 opacity-0'}`}
        />
        <MenuIcon
          size={32}
          className={`absolute transition-all duration-500 ease-linear ${open ? 'rotate-180 opacity-0' : 'rotate-0'}`}
        />
      </Button>

      <MotionDiv
        className="fixed right-0 top-0 z-40 flex h-fit w-52 gap-2 p-4"
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: open ? 0 : '-100%', opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mt-12 w-full bg-background p-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                className="text-right text-2xl font-bold underline-offset-4 hover:underline"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="text-right text-2xl font-bold underline-offset-4 hover:underline"
            >
              {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </nav>
        </Card>
        <div className="mt-12 h-64 w-[1px] bg-gradient-to-b from-primary/60 via-primary to-primary/60" />
      </MotionDiv>
    </>
  )
}

export default Menu
