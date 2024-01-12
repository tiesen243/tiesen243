import { Navbar, NavbarContent, NavbarMenu, NavbarMenuToggle } from '@nextui-org/react'

import ThemeBtn from '@/components/them-btn'
import { gh_api_token, gh_api_url } from '@/lib/constants'
import Brand from './brand'
import Nav from './nav'

const Header: React.FC = async () => {
  const res = await fetch(gh_api_url, {
    headers: { authorization: `Bearer ${gh_api_token}` },
  })
  const user = await res.json()

  return (
    <Navbar as="header" className="bg-transparent" isBordered>
      <Brand {...user} />

      <NavbarContent justify="center" className="hidden md:flex">
        <Nav />
      </NavbarContent>

      <NavbarMenu className="md:hidden">
        <Nav />
      </NavbarMenu>

      <NavbarContent as="section" justify="end">
        <ThemeBtn />
        <NavbarMenuToggle className="md:hidden" />
      </NavbarContent>
    </Navbar>
  )
}

export default Header
