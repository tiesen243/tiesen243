import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/navbar'

import { siteConfig } from '@/lib/site'
import Brand from './brand'
import DesktopNav from './desktop-nav'
import MobileNav from './mobile-nav'
import ThemeBtn from './theme-btn'

const Header: React.FC = () => (
  <Navbar isBordered>
    <Brand />

    <NavbarContent justify="center" className="hidden md:flex">
      <DesktopNav navLinks={siteConfig.navLinks} />
    </NavbarContent>

    <NavbarContent justify="end">
      <NavbarItem>
        <ThemeBtn />
      </NavbarItem>

      <NavbarItem className="md:hidden">
        <MobileNav navLinks={siteConfig.navLinks} />
      </NavbarItem>
    </NavbarContent>
  </Navbar>
)

export default Header
