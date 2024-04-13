import type { Metadata, NextPage } from 'next'

import { BlogCard } from '@/components/blog-card'
import { BreadCrumbs } from '@/components/ui/breadcrumb'
import { getPosts } from '@/content'
import { baseUrl } from '@/lib/site'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

const desc = 'A collection of my thoughts and experiences. I write about programming, and life.'

interface Props {
  params: { lang: 'en' | 'vi' }
}

export const metadata: Metadata = {
  title: 'Blog',
  description: desc,
  openGraph: { images: `/og?title=Blog&desc=${desc}`, url: `${baseUrl}/blog` },
  alternates: { canonical: `${baseUrl}/blog` },
}

const Page: NextPage<Props> = async ({ params }) => {
  const posts = await getPosts(params.lang)

  return (
    <>
      <BreadCrumbs
        items={[
          { name: '~', href: '/#about' },
          { name: 'Blog', href: '/blog' },
        ]}
      />

      <Tabs defaultValue={params.lang} className="mb-4">
        <TabsList>
          <Link href="/blog/en" passHref>
            <TabsTrigger value="en">English</TabsTrigger>
          </Link>
          <Link href="/blog/vi" passHref>
            <TabsTrigger value="vi">Vietnamese</TabsTrigger>
          </Link>
        </TabsList>
      </Tabs>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.title} {...post} lang={params.lang} />
        ))}
      </section>
    </>
  )
}

export default Page
