import type { Metadata, NextPage, ResolvingMetadata } from 'next'

import BlogCard from '@/components/blog-card'
import { MotionLi } from '@/components/motion'
import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import { getAllPostsMeta } from '@/lib/mdx'
import { baseUrl } from '@/lib/site'

export const generateMetadata = async (_: any, parent: ResolvingMetadata): Promise<Metadata> => ({
  title: 'Blogs',
  description: 'A collection of blogs written by me',
  openGraph: {
    title: 'Blogs',
    description: 'A collection of blogs written by me',
    url: `${baseUrl}/blogs`,
    images: (await parent).openGraph?.images || [],
  },
  twitter: {
    title: 'Blogs',
    description: 'A collection of blogs written by me',
    images: (await parent).twitter?.images || [],
  },
})

const Page: NextPage = async () => {
  const metas = await getAllPostsMeta()

  return (
    <main className="container min-h-dvh flex-grow space-y-4 pt-4">
      <BreadCrumbs
        items={[
          { label: '~', href: '/#about' },
          { label: 'Blogs', href: '/blogs' },
        ]}
      />

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
