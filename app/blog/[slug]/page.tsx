import { BreadCrumbs } from '@/components/ui/breadcrumb'
import { Typography } from '@/components/ui/typography'
import { posts } from '@/content'
import type { NextPage } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return posts.paths().map((pathname) => ({ slug: pathname.at(-1) }))
}

const Page: NextPage<Props> = async ({ params: { slug } }) => {
  const doc = await posts.get(`/blog/${slug}`)
  if (!doc) return notFound()

  const { frontMatter, Content } = doc

  return (
    <>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
      <BreadCrumbs
        className="list-none"
        items={[
          { name: '~', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: frontMatter.title, href: `/blog/${slug}` },
        ]}
      />

      <article className="flex flex-col items-center">
        <Typography variant="h1">{frontMatter.title}</Typography>
        <Typography className="text-muted-foreground [&:not(:first-child)]:mt-0">
          {frontMatter.date.toDateString()}
        </Typography>
        <Typography className="[&:not(:first-child)]:mt-0">{frontMatter.description}</Typography>
      </article>

      <article className="prose prose-zinc dark:prose-invert md:prose-lg prose-pre:bg-transparent">
        {/* @ts-expect-error cuz Content is a component */}
        <Content />
      </article>
    </>
  )
}

export default Page
