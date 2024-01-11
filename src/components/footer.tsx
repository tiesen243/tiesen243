import { Navbar, NavbarContent } from '@nextui-org/react'
import Link from 'next/link'

const Footer: React.FC = () => (
  <Navbar className="border-t">
    <NavbarContent justify="start"></NavbarContent>
    <NavbarContent justify="center">
      <span>
        &copy; {new Date().getFullYear()}{' '}
        <strong>
          <Link href="/">Tiesen</Link>
        </strong>
        . All rights reserved.
      </span>
    </NavbarContent>
    <NavbarContent justify="end"></NavbarContent>
  </Navbar>
)

export default Footer
