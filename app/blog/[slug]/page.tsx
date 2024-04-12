import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { ScrollToTop } from '@/components/scroll-to-top'
import { Badge } from '@/components/ui/badge'
import { BreadCrumbs } from '@/components/ui/breadcrumb'
import { Typography } from '@/components/ui/typography'
import { getPost, getPosts } from '@/content'
import { baseUrl } from '@/lib/site'

interface Props {
  params: { slug: string }
}

export const generateStaticParams = async () => {
  const metas = await getPosts()
  return metas.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { meta } = await getPost(`${params.slug}.mdx`)

  const previousImages = (await parent).openGraph?.images ?? []

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.tags,
    openGraph: {
      images: [meta.image, ...previousImages],
      url: `${baseUrl}/blog/${params.slug}`,
    },
    alternates: { canonical: `${baseUrl}/blog/${params.slug}` },
  }
}

const Page: NextPage<Props> = async ({ params: { slug } }) => {
  const { content, meta } = await getPost(`${slug}.mdx`)
  if (!meta.title) return notFound()

  return (
    <>
      <BreadCrumbs
        className="top list-none"
        items={[
          { name: '~', href: '/#about' },
          { name: 'Blog', href: '/blog' },
          { name: meta.title, href: `/blog/${slug}` },
        ]}
      />

      <article className="mx-auto flex max-w-screen-md flex-col items-center">
        <Typography variant="h1">{meta.title}</Typography>
        <Typography className="text-muted-foreground [&:not(:first-child)]:mt-0">
          {meta.date.toDateString()}
        </Typography>
        <Typography className="[&:not(:first-child)]:mt-0">{meta.description}</Typography>
      </article>

      <section className="my-2 flex cursor-default select-none items-center justify-center gap-2">
        {meta.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </section>

      <article className="mx-auto max-w-screen-md">
        <Image
          src={meta.image}
          width={1920}
          height={1080}
          alt={meta.title}
          className="rounded-lg"
        />

        {content}
      </article>

      <ScrollToTop />
    </>
  )
}

export default Page
