import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const NavMenu = () => (
  <ul className="flex">
    {navs.map((nav) => (
      <li key={nav.title}>
        <Link className={cn(buttonVariants({ variant: 'link' }), 'p-2')} href={nav.href}>
          {nav.title}
        </Link>
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
