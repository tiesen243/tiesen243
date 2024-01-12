import Header from '@/components/header'
import Notification from '@/components/notification'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <Header />
    <main className="container max-w-screen-lg overflow-x-hidden overflow-y-scroll pb-20">
      {children}
    </main>
    <Notification />
  </>
)

export default MainLayout
