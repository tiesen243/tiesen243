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
    title: 'About',
    href: '/portfolio#about',
  },
  {
    title: 'Projects',
    href: '/portfolio#projects',
  },
  {
    title: 'Blogs',
    href: '/portfolio#blogs',
  },
  {
    title: 'Contact',
    href: '/portfolio#contact',
  },
]
