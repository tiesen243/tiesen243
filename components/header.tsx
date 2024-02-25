'use client'

import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { MotionDiv } from '@/components/motion'
import { Card } from '@/components/ui/card'
import { siteConfig } from '@/lib/site'

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className="fixed inset-0 z-50 flex h-fit justify-start p-2 pb-0 md:justify-end">
      <button aria-label="menu-toggle" className="block md:hidden" onClick={() => setOpen(!open)}>
        <XIcon
          size={24}
          className={`absolute transition-all duration-500 ease-linear ${open ? 'rotate-180' : 'rotate-0 opacity-0'}`}
        />
        <MenuIcon
          size={24}
          className={`transition-all duration-500 ease-linear ${open ? 'rotate-180 opacity-0' : 'rotate-0'}`}
        />
      </button>

      <MotionDiv
        className="absolute flex h-fit w-56 gap-4 p-2 md:hidden"
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: open ? 0 : '-100%', opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => setOpen(false)}
      >
        <div className="mt-6 h-auto w-[2px] bg-gradient-to-b from-primary/60 via-primary to-primary/60" />

        <Card className="mt-6 w-full bg-background p-4 shadow-lg">
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
    </header>
  )
}

export default Header
