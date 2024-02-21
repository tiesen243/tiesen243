import Link from 'next/link'
import { ThemeBtn } from './theme-provider'

const Footer: React.FC = () => {
  return (
    <footer className="mt-4 border-t py-4">
      <div className="container flex items-center justify-between">
        <p>
          &copy; CopyRight {new Date().getFullYear()} | <Link href="/">Tiesen</Link>. All rights
          reserved.
        </p>

        <ThemeBtn />
      </div>
    </footer>
  )
}

export default Footer
