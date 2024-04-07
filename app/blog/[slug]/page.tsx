import { BreadCrumbs } from '@/components/ui/breadcrumb'
import { Typography } from '@/components/ui/typography'
import { getPost } from '@/content'
import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
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
    },
    twitter: {
      images: [meta.image, ...previousImages],
    },
  }
}

const Page: NextPage<Props> = async ({ params: { slug } }) => {
  const doc = await getPost(`${slug}.mdx`)
  const { content, meta } = doc
  if (!meta.title) return notFound()

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
    </>
  )
}

export default Page
