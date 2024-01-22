import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { siteConfig } from '@/lib/site'
import { getPostsByUrl } from '@/lib/mdx'

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
    `${siteConfig.env.postEndpoint}/${params.slug.replace(/\.html$/, '.mdx')}`
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

import BlogHeader from '@/components/blog-header'
import 'highlight.js/styles/github-dark.css'
const Page: NextPage<Props> = async ({ params }) => {
  try {
    const { meta, content } = await getPostsByUrl(
      `${siteConfig.env.postEndpoint}/${params.slug.replace(/\.html$/, '.mdx')}`
    )
    if (!meta.title) throw new Error('No title')

    return (
      <>
        <BlogHeader {...meta} />

        <article className="prose-pre:bg-secondary-foreground dark:prose-pre:bg-secondary">
          {content}
        </article>
      </>
    )
  } catch (e) {
    return notFound()
  }
}

export default Page
