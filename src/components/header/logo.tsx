import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC = () => (
  <Link href="/" legacyBehavior passHref>
    <article className="flex cursor-pointer items-center space-x-2">
      <Image src="/logo.webp" alt="logo" width={40} height={40} className="rounded-full" />
      <section className="flex flex-col">
        <span className="font-medium">Tiesen</span>
        <small className="text-gray-400 transition-colors hover:text-gray-300">@tiesen243</small>
      </section>
    </article>
  </Link>
)

export default Logo
