import Menu from './menu'

const Header: React.FC = () => (
  <header className="fixed inset-0 z-50 flex h-fit items-center justify-end p-4">
    <Menu />
  </header>
)

export default Header
