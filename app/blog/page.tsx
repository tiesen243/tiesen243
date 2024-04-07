import type { Metadata, NextPage } from 'next'

import { BlogCard } from '@/components/blog-card'
import { BreadCrumbs } from '@/components/ui/breadcrumb'
import { posts, type Post } from '@/content'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A blog about web development and programming',
}

const Page: NextPage = async () => (
  <>
    <BreadCrumbs
      items={[
        { name: '~', href: '/' },
        { name: 'Blog', href: '/blog' },
      ]}
    />

    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {posts.all().map((post) => (
        <BlogCard key={post.pathname} pathname={post.pathname} {...(post as unknown as Post)} />
      ))}
    </section>
  </>
)

export default Page
