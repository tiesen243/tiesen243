import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { imgBaseUrl } from '@/lib/constants'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href="/" legacyBehavior passHref>
    <article className="flex items-center space-x-2">
      <Avatar>
        <AvatarImage src={imgBaseUrl + '/logo.png'} alt="logo" />
        <AvatarFallback>Logo</AvatarFallback>
      </Avatar>

      <section className="flex flex-col">
        <span className="font-medium">Tiesen</span>
        <a href="https://github.com/tiesen243" target="_blank" rel="noreferrer">
          <small className="text-gray-400 transition-colors hover:text-gray-300">@tiesen243</small>
        </a>
      </section>
    </article>
  </Link>
)

export default Logo
