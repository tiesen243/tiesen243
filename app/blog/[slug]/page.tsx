import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import { allDocs } from '@/content'

interface Props {
  params: { slug: string }
}

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const doc = await allDocs.get(`blog/${slug}`)
  if (!doc) return notFound()

  const { metadata } = doc
  const previousImages = (await parent).openGraph?.images ?? []

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.tags,
    openGraph: {
      images: [doc.metadata.image, ...previousImages],
    },
    twitter: {
      images: [doc.metadata.image, ...previousImages],
    },
  }
}

import './style.css'
const Page: NextPage<Props> = async ({ params: { slug } }) => {
  const doc = await allDocs.get(`blog/${slug}`)
  if (!doc) return notFound()

  const { Content } = doc
  return (
    <main className="container flex-grow">
      <BreadCrumbs
        items={[
          { href: '/#about', label: '~' },
          { href: '/blog', label: 'Blog' },
          { href: `/blog/${slug}`, label: slug },
        ]}
      />

      <article className="mx-auto max-w-screen-md">{Content && <Content />}</article>
    </main>
  )
}

export default Page
