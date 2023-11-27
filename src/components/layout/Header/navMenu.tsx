import { Button } from '@/components/ui'
import Link from 'next/link'

const NavMenu = () => (
  <ul className="flex">
    {navs.map((nav, idx: number) => (
      <li key={idx}>
        <Button variant="link" className="text-sm" asChild>
          <Link href={nav.href}>{nav.title}</Link>
        </Button>
      </li>
    ))}
  </ul>
)

export default NavMenu

const navs: { title: string; href: string }[] = [
  {
    title: 'Home',
    href: '/#home',
  },
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'Projects',
    href: '/#projects',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
]
