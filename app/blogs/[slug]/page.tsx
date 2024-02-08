import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { getPostsByUrl } from '@/lib/mdx'
import { siteConfig } from '@/lib/site'
interface Props {
  params: {
    slug: string
  }
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { meta } = await getPostsByUrl(
    `${siteConfig.env.rawcontent}/${params.slug.replace(/\.html$/, '.mdx')}`
  )

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.tags,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'article',
      images: meta.image
        ? [
            {
              url: meta.image,
              width: 1920,
              height: 1080,
              alt: meta.title,
            },
          ]
        : (await parent).openGraph?.images || [],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      card: 'summary_large_image',
      images: meta.image ? meta.image : (await parent).twitter?.images || [],
    },
    alternates: {
      canonical: `${siteConfig.url}/blogs/${params.slug}`,
    },
  }
}

import 'highlight.js/styles/github-dark.css'
const Page: NextPage<Props> = async ({ params }) => {
  try {
    const { meta, content } = await getPostsByUrl(
      `${siteConfig.env.rawcontent}/tiesen243/blogs/${params.slug.replace(/\.html$/, '.mdx')}`
    )
    if (!meta.title) throw new Error('No title')

    return (
      <main className="container flex-grow pt-4">
        <article className="mb-4 select-none prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline">
          <div>
            <Link href="/">~</Link>
            <span>/</span>
            <Link href="/blogs">Blogs</Link>
            <span>/</span>
            <Link href={`/blogs/${params.slug}`}>{params.slug}</Link>
          </div>
        </article>

        <article className="prose-h1:mb-0 prose-ul:m-0 prose-ul:p-0">
          <h1>{meta.title}</h1>
          <time dateTime={meta.date.toString()}>{new Date(meta.date).toDateString()}</time>

          <ul className="flex list-none flex-row gap-2">
            {meta.tags?.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>

          <blockquote>{meta?.description}</blockquote>

          {meta.image && (
            <Image
              src={meta.image}
              alt={meta.title}
              width={1920}
              height={1080}
              className="rounded object-cover shadow-lg"
            />
          )}
        </article>

        <article className="prose-pre:bg-secondary-foreground dark:prose-pre:bg-secondary">
          {content}
        </article>
      </main>
    )
  } catch (e) {
    return notFound()
  }
}

export default Page
