import Footer from '@/components/footer'
import Header from '@/components/header'
import Notification from '@/components/notification'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="flex min-h-dvh flex-col">
    <Header />
    <main className="container max-w-screen-lg flex-grow">{children}</main>
    <Notification />
    <Footer />
  </div>
)

export default MainLayout
