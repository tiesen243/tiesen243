import Header from '@/components/layout/Header'

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="h-screen w-screen snap-y snap-mandatory overflow-y-scroll">
    <Header />
    <main className="container max-w-screen-lg">{children}</main>
  </div>
)

export default MainLayout
