import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { getPostsByUrl } from '@/lib/mdx'
import { baseUrl } from '@/lib/site'

interface Props {
  params: { slug: string }
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { meta } = await getPostsByUrl(
    `${process.env.RAW_BLOGPOST_URL!}/${params.slug.replace('.html', '.mdx')}`
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
              width: 1200,
              height: 630,
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
      canonical: `${baseUrl}/blogs/${params.slug}`,
    },
  }
}

import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import 'highlight.js/styles/github-dark.min.css'
const Page: NextPage<Props> = async ({ params }) => {
  try {
    const { meta, content } = await getPostsByUrl(
      `${process.env.NEXT_PUBLIC_RAW_BLOGPOST!}/${params.slug.replace('.html', '.mdx')}`
    )
    if (!meta.title) throw new Error('No title')

    return (
      <main className="container min-h-dvh flex-grow space-y-4 pt-4">
        <BreadCrumbs
          items={[
            { label: '~', href: '/#about' },
            { label: 'Blogs', href: '/blogs' },
            { label: meta.title, href: `/blogs/${params.slug}` },
          ]}
        />
        <article className="prose-h1:mb-0 prose-blockquote:m-0 prose-pre:bg-secondary-foreground prose-ul:m-0 prose-ul:p-0 dark:prose-pre:bg-secondary">
          <h1>{meta.title}</h1>
          <time dateTime={meta.date.toString()}>{new Date(meta.date).toDateString()}</time>

          <ul className="flex list-none items-center">
            {meta.tags?.map((tag) => (
              <li key={tag} className="m-0">
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

          {content}
        </article>
      </main>
    )
  } catch (e) {
    return notFound()
  }
}

export default Page
