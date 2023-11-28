import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'

const Logo: React.FC = () => (
  <Link href="/" legacyBehavior passHref>
    <article className="flex cursor-pointer items-center space-x-2">
      <Avatar>
        <AvatarImage src="/logo.webp" alt="Tiesen Logo" />
        <AvatarFallback>Tiesen</AvatarFallback>
      </Avatar>
      <section className="flex flex-col">
        <span className="font-medium">Tiesen</span>
        <small className="text-gray-400 transition-colors hover:text-gray-300">@tiesen243</small>
      </section>
    </article>
  </Link>
)

export default Logo
