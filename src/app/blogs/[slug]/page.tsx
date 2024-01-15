import type { Metadata, NextPage } from 'next'
import { notFound } from 'next/navigation'

import { siteConfig } from '@/lib/site'
import { getPostsByUrl } from '@/lib/mdx'

interface Props {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { meta } = await getPostsByUrl(
    `${siteConfig.env.postEndpoint}/${params.slug.replace(/\.html$/, '.mdx')}`
  )

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'article',
      images: [
        {
          url: meta.image || siteConfig.image,
          width: 1920,
          height: 1080,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      card: 'summary_large_image',
      images: meta.image || siteConfig.image,
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

        <article>{content}</article>
      </>
    )
  } catch (e) {
    return notFound()
  }
}

export default Page
