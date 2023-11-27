import Logo from './logo'
import NavMenu from './navMenu'

const Header: React.FC = () => (
  <header className="sticky inset-0 border border-b bg-transparent py-2 shadow backdrop-blur">
    <nav className="container flex max-w-screen-md items-center justify-between">
      <Logo />
      <NavMenu />
    </nav>
  </header>
)

export default Header
