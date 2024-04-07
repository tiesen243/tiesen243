import type { Metadata, NextPage } from 'next'

import { BlogCard } from '@/components/blog-card'
import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import { type Post, posts } from '@/content'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A collection of blogs written by me',
}

const Page: NextPage = () => (
  <main className="container flex-grow">
    <BreadCrumbs
      items={[
        { href: '/#about', label: '~' },
        { href: '/blog', label: 'Blog' },
      ]}
    />

    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.all().map((doc) => (
        <BlogCard key={doc.pathname} doc={doc as Post} />
      ))}
    </section>
  </main>
)

export default Page
