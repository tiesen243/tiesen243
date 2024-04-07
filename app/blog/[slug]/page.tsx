import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { posts } from '@/content'

interface Props {
  params: { slug: string }
}

import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const doc = await posts.get(`blog/${slug}`)
  if (!doc) return notFound()

  const { frontMatter } = doc
  const previousImages = (await parent).openGraph?.images ?? []

  return {
    title: frontMatter.title,
    description: frontMatter.description,
    keywords: frontMatter.tags,
    openGraph: {
      images: [frontMatter.image, ...previousImages],
    },
    twitter: {
      images: [frontMatter.image, ...previousImages],
    },
  }
}

const Page: NextPage<Props> = async ({ params: { slug } }) => {
  const doc = await posts.get(`blog/${slug}`)
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

      <main className="container flex-grow">
        <BreadCrumbs
          items={[
            { href: '/#about', label: '~' },
            { href: '/blog', label: 'Blog' },
            { href: `/blog/${slug}`, label: frontMatter.title },
          ]}
        />

        <article className="mx-auto max-w-screen-md">
          <h1 className="mb-4 scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
            {frontMatter.title}
          </h1>

          <section className="mb-4 flex justify-center gap-4">
            {frontMatter.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </section>

          <p className="text-center text-muted-foreground">
            {new Date(frontMatter.date).toDateString()}
          </p>

          <p className="leading-7 [&:not(:first-child)]:my-2">{frontMatter.description}</p>

          <Image
            src={frontMatter.image}
            alt={frontMatter.title}
            width={1920}
            height={1080}
            className="rounded-lg shadow-lg"
          />

          {Content && <Content />}
        </article>
      </main>
    </>
  )
}

export default Page
