import type { Metadata, NextPage } from 'next'

import { getAllPostsMeta } from '@/lib/utils'
import Posts from './_posts'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Blogs by me',
  openGraph: {
    title: 'Blogs',
    description: 'Blogs by me',
  },
  twitter: {
    title: 'Blogs',
    description: 'Blogs by me',
  },
}

const Page: NextPage = async () => {
  const metas = await getAllPostsMeta()

  return (
    <div className="landing">
      <article>
        <h1>Blogs</h1>
      </article>

      <Posts metas={metas} />
    </div>
  )
}

export default Page
