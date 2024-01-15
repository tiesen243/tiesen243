import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar'
import Link from 'next/link'

import { type Site } from '@/lib/site'

const MobileNav: React.FC<{ navLinks: Site['navLinks'] }> = ({ navLinks }) => (
  <>
    <NavbarMenuToggle />
    <NavbarMenu>
      {navLinks.map((link) => (
        <NavbarMenuItem key={link.label} className="underline-offset-4 hover:underline">
          <Link href={link.url}>{link.label}</Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  </>
)

export default MobileNav
