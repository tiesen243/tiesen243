import { Link, NavbarItem } from '@nextui-org/react'

const Nav: React.FC = () => {
  return navs.map((nav) => (
    <NavbarItem key={nav.name}>
      <Link href={nav.path} color="foreground" className="underline-offset-4 hover:underline">
        {nav.name}
      </Link>
    </NavbarItem>
  ))
}

export default Nav

const navs = [
  {
    name: 'About',
    path: '/#about',
  },
  {
    name: 'Projects',
    path: '/#projects',
  },
  {
    name: 'Contact',
    path: '/#contact',
  },
  {
    name: 'Blogs',
    path: '/blogs',
  },
]
