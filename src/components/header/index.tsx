import { siteConfig } from '@/lib/site'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Spinner,
  User,
} from '@nextui-org/react'
import Link from 'next/link'
import ThemeBtn from './theme-btn'

const Header: React.FC = () => (
  <Navbar isBordered>
    <NavbarBrand>
      <Link href="/#hero">
        <User
          name="Tiesen"
          description="@tiesen243"
          className="group"
          avatarProps={{
            src: '/images/yuki.webp',
            fallback: <Spinner color="default" />,
            showFallback: true,
            className: 'bg-background group-hover:ring-2 ring-default',
          }}
        />
      </Link>
    </NavbarBrand>

    <NavbarContent justify="center" className="hidden md:flex">
      {siteConfig.navLinks.map((link) => (
        <NavbarItem key={link.label} className="underline-offset-4 hover:underline">
          <Link href={link.url}>{link.label}</Link>
        </NavbarItem>
      ))}
    </NavbarContent>

    <NavbarContent justify="end">
      <NavbarItem>
        <ThemeBtn />
      </NavbarItem>
      <NavbarItem className="md:hidden">
        <NavbarMenuToggle />
        <NavbarMenu>
          {siteConfig.navLinks.map((link) => (
            <NavbarMenuItem key={link.label} className="underline-offset-4 hover:underline">
              <Link href={link.url}>{link.label}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
)

export default Header
