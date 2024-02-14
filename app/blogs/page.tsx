import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import Link from 'next/link'

import BlogCard from '@/components/blog-card'
import { getAllPostsMeta } from '@/lib/mdx'
import { siteConfig } from '@/lib/site'
import { MotionLi } from '@/components/motion'

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
    <main className="container flex-grow pt-4">
      <article className="mb-4 select-none prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline prose-blockquote:m-0">
        <div className="flex items-center gap-1">
          <Link href="/">~</Link>
          <span>/</span>
          <Link href="/blogs">Blogs</Link>
        </div>
        <blockquote>This is a list of all my blogs, I have written.</blockquote>
      </article>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {metas.map((meta) => (
          <MotionLi
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={meta.slug}
          >
            <BlogCard {...meta} />
          </MotionLi>
        ))}
      </ul>
    </main>
  )
}

export default Page
