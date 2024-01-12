import Header from '@/components/header'
import Notification from '@/components/notification'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="overflow-x-hidden">
    <Header />
    <main className="container max-w-screen-lg">{children}</main>
    <Notification />
  </div>
)

export default MainLayout
