import type { Metadata, NextPage } from 'next'

import { BlogCard } from '@/components/blog-card'
import { BreadCrumbs } from '@/components/ui/breadcrumb'
import { getPosts } from '@/content'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog about web development and programming',
}

const Page: NextPage = async () => {
  const posts = await getPosts()
  return (
    <>
      <BreadCrumbs
        items={[
          { name: '~', href: '/#about' },
          { name: 'Blog', href: '/blog' },
        ]}
      />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </section>
    </>
  )
}

export default Page
