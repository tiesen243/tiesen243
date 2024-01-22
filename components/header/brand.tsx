import { NavbarBrand } from '@nextui-org/navbar'
import { User } from '@nextui-org/user'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

const Brand: React.FC = () => (
  <NavbarBrand>
    <Link href="/#hero" passHref legacyBehavior>
      <User
        name={<p className="font-bold">Tran Tien</p>}
        description={<p className="text-primary/90">@tiesen243</p>}
        className="group cursor-pointer"
        avatarProps={{
          src: '/images/yuki.webp',
          fallback: <Loader2 className="animate-spin" />,
          showFallback: true,
          className: 'bg-background group-hover:ring-2 ring-ring group-hover:text-primary/60',
        }}
      />
    </Link>
  </NavbarBrand>
)

export default Brand
