import type { Metadata, NextPage, ResolvingMetadata } from 'next'

import BlogCard from '@/components/blog-card'
import { getAllPostsMeta } from '@/lib/mdx'
import { siteConfig } from '@/lib/site'

export const generateMetadata = async (_: any, parent: ResolvingMetadata): Promise<Metadata> => ({
  title: 'Blogs',
  description: 'Blogs by me',
  openGraph: {
    title: 'Blogs',
    description: 'Blogs by me',
    url: `${siteConfig.url}/blogs`,
    images: (await parent).openGraph?.images || [],
  },
  twitter: {
    title: 'Blogs',
    description: 'Blogs by me',
    images: (await parent).twitter?.images || [],
  },
})

const Page: NextPage = async () => {
  const metas = await getAllPostsMeta()

  return (
    <div className="landing">
      <article className="prose-h1:pb-2">
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
