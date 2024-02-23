import Link from 'next/link'
import { ThemeBtn } from './theme-provider'
import Image from 'next/image'
import { siteConfig } from '@/lib/site'

const Footer: React.FC = () => {
  return (
    <footer className="mt-4 border-t py-4">
      <div className="container flex justify-between gap-4">
        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Link href="/" className="flex h-fit items-center gap-2">
            <div className="h-fit w-fit rounded-lg border-2 bg-background p-2">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={20}
                height={20}
                className="dark:invert"
              />
            </div>
            <span className="text-4xl font-bold md:text-2xl">{siteConfig.title.default}</span>
          </Link>

          <ul className="flex flex-col gap-2 text-2xl md:col-span-2 md:text-xl">
            {siteConfig.navLinks.map((link, idx) => (
              <li key={idx} className="underline-offset-4 hover:underline">
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <ThemeBtn />
      </div>

      <hr className="my-4" />
      <div className="container">
        <p className="text-center">
          &copy; CopyRight {new Date().getFullYear()} | <Link href="/">Tiesen</Link>. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
