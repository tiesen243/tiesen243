import { BlogCard } from '@/components/blog-card'
import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import { getPosts } from '@/lib/get-posts'
import { baseUrl } from '@/lib/site'
import type { NextPage } from 'next'

export const metadata = {
  title: 'Blog',
  description: 'A collection of blogs written by me',
  openGraph: {
    title: 'Blog',
    description: 'A collection of blogs written by me',
    url: `${baseUrl}/blog`,
    images: '/og.jpg',
  },
  twitter: {
    title: 'Blog',
    description: 'A collection of blogs written by me',
    images: '/og.jpg',
  },
}

const Page: NextPage = () => {
  const blogs = getPosts()
  return (
    <main className="container flex-grow">
      <BreadCrumbs
        items={[
          { href: '/#about', label: '~' },
          { href: '/blog', label: 'Blog' },
        ]}
      />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </section>
    </main>
  )
}

export default Page
