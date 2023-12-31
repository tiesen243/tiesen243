import Header from '@/components/header'

import '@/lib/syntax.modules.css'
const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="h-screen w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
    <Header />
    <main className="container mb-20 mt-4 max-w-screen-md">{children}</main>
  </div>
)

export default MainLayout
