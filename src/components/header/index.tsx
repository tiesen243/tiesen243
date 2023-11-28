import dynamic from 'next/dynamic'

import NavMenu from './navMenu'
const Logo = dynamic(() => import('./logo'), { ssr: false })

const Header: React.FC = () => (
  <header className="sticky inset-0 z-50 border border-b bg-transparent py-2 shadow backdrop-blur">
    <nav className="container flex max-w-screen-md items-center justify-between">
      <Logo />
      <NavMenu />
    </nav>
  </header>
)

export default Header
