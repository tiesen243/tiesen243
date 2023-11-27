import NavMenu from './navMenu'

const Header: React.FC = () => (
  <header className="sticky inset-0 bg-transparent backdrop-blur">
    <nav className="container flex max-w-screen-lg items-center justify-between">
      <section>Tiesen</section>
      <NavMenu />
    </nav>
  </header>
)

export default Header
