import { NavbarBrand } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  name: string
  login: string
  avatar_url: string
  html_url: string
}

const Brand: React.FC<Props> = (user) => (
  <Link href="/" passHref legacyBehavior>
    <NavbarBrand className="group gap-2">
      <Image
        src={user.avatar_url}
        alt={user.name}
        width={50}
        height={50}
        className="rounded-full ring-ring group-hover:ring-2"
      />
      <section>
        <p className="text-lg font-bold">
          {user.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')}
        </p>
        <p className="text-gray-500">@{user.login}</p>
      </section>
    </NavbarBrand>
  </Link>
)

export default Brand
