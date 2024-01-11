import type { NextPage } from 'next'

import Hello from '@/components/hero/hello'
import InfiniteScroll from '@/components/hero/infinite-scroll'
import ButtonGroup from '@/components/hero/button-group'

const Home: NextPage = () => {
  return (
    <section className="flex min-h-dvh flex-col justify-center gap-8">
      <Hello />
      <InfiniteScroll />
      <ButtonGroup className="grid md:hidden" />
    </section>
  )
}

export default Home
