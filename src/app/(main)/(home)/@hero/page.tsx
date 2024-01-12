import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Hello = dynamic(() => import('@/components/hero/hello'), { ssr: false })
const InfiniteScroll = dynamic(() => import('@/components/hero/infinite-scroll'), { ssr: false })
const ButtonGroup = dynamic(() => import('@/components/hero/button-group'), { ssr: false })

const Home: NextPage = () => (
  <section className="flex min-h-dvh flex-col justify-center gap-8">
    <Hello />
    <InfiniteScroll />
    <ButtonGroup className="grid md:hidden" />
  </section>
)

export default Home
