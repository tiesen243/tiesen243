import type { Metadata, NextPage } from 'next'

import { BlogCard } from '@/components/blog-card'
import { BreadCrumbs } from '@/components/ui/breadcrumb'
import { getPosts } from '@/content'
import { baseUrl } from '@/lib/site'

const desc = 'A collection of my thoughts and experiences. I write about programming, and life.'

export const metadata: Metadata = {
  title: 'Blog',
  description: desc,
  openGraph: { images: `/og?title=Blog&desc=${desc}`, url: `${baseUrl}/blog` },
  alternates: { canonical: `${baseUrl}/blog` },
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

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </section>
    </>
  )
}

export default Page
