import { Button } from '@/components/ui'
import Link from 'next/link'

const NavMenu = () => (
  <ul className="flex">
    {navs.map((nav, idx: number) => (
      <li key={idx}>
        <Button variant="link" className="p-2 text-sm" asChild>
          <Link href={nav.href}>{nav.title}</Link>
        </Button>
      </li>
    ))}
  </ul>
)

export default NavMenu

const navs: { title: string; href: string }[] = [
  {
    title: 'About',
    href: '/#about',
  },
  {
    title: 'Projects',
    href: '/#projects',
  },
  {
    title: 'Blogs',
    href: '/#blogs',
  },
  {
    title: 'Contact',
    href: '/#contact',
  },
]
