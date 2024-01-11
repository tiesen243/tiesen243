import { NavbarBrand, User as Props, User } from '@nextui-org/react'
import Link from 'next/link'

interface Props {
  name: string
  login: string
  avatar_url: string
  html_url: string
}

const Brand: React.FC<Props> = (user) => (
  <NavbarBrand>
    <Link href="/#hero" passHref legacyBehavior>
      <User
        classNames={{
          base: 'cursor-pointer',
          name: 'text-lg font-bold text-foreground',
        }}
        name={user.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}
        description={` @${user.login}`}
        avatarProps={{
          src: user.avatar_url,
          isBordered: true,
          className: 'bg-background',
        }}
      />
    </Link>
  </NavbarBrand>
)

export default Brand
