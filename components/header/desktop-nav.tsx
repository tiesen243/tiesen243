import { type Site } from '@/lib/site'
import { NavbarItem } from '@nextui-org/navbar'
import Link from 'next/link'

const DesktopNav: React.FC<{ navLinks: Site['navLinks'] }> = ({ navLinks }) =>
  navLinks.map((link) => (
    <NavbarItem key={link.label} className="underline-offset-4 hover:underline">
      <Link href={link.url}>{link.label}</Link>
    </NavbarItem>
  ))

export default DesktopNav
