import { Navbar, NavbarContent, NavbarMenu, NavbarMenuToggle } from '@nextui-org/react'

import ThemeBtn from '@/components/them-btn'
import { gh_api_token, gh_api_url } from '@/lib/constants'
import Nav from './nav'
import Brand from './brand'

const Header: React.FC = async () => {
  const res = await fetch(gh_api_url, {
    headers: { authorization: `Bearer ${gh_api_token}` },
  })
  const user = await res.json()

  return (
    <Navbar as="header" className="bg-transparent" isBordered>
      <NavbarContent justify="start">
        <Brand {...user} />
      </NavbarContent>

      <NavbarContent justify="center" className="hidden md:flex">
        <Nav />
      </NavbarContent>

      <NavbarMenu className="md:hidden">
        <Nav />
      </NavbarMenu>

      <NavbarContent justify="end">
        <ThemeBtn />
        <NavbarMenuToggle className="md:hidden" />
      </NavbarContent>
    </Navbar>
  )
}

export default Header
