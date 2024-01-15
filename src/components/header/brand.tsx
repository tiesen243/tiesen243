import { NavbarBrand } from '@nextui-org/navbar'
import { User } from '@nextui-org/user'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

const Brand: React.FC = () => (
  <NavbarBrand>
    <Link href="/#hero" passHref legacyBehavior>
      <User
        name="Tiesen"
        description="@tiesen243"
        className="group cursor-pointer"
        avatarProps={{
          src: '/images/yuki.webp',
          fallback: <Loader2 className="animate-spin" />,
          showFallback: true,
          className: 'bg-background group-hover:ring-2 ring-ring',
        }}
      />
    </Link>
  </NavbarBrand>
)

export default Brand
