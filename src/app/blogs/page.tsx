import type { Metadata, NextPage } from 'next'

import BlogCard from '@/components/blog-card'
import { getAllPostsMeta } from '@/lib/mdx'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Blogs by me',
  openGraph: {
    title: 'Blogs',
    description: 'Blogs by me',
    images: siteConfig.openGraph.images,
    url: `${siteConfig.url}/blogs`,
  },
  twitter: {
    title: 'Blogs',
    description: 'Blogs by me',
    images: siteConfig.twitter.image,
  },
}

const Page: NextPage = async () => {
  const metas = await getAllPostsMeta()

  return (
    <div className="landing">
      <article>
        <h1>Blogs</h1>
      </article>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {metas.map((meta) => (
          <li key={meta.slug}>
            <BlogCard {...meta} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
