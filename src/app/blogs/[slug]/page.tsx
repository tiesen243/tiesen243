import type { Metadata, NextPage } from 'next'
import { formatDate, getPostsByUrl } from '@/lib/utils'
import Image from 'next/image'

import { siteConfig } from '@/lib/site'

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
  }
}

import { Chip } from '@nextui-org/react'
import 'highlight.js/styles/github-dark.css'
const Page: NextPage<Props> = async ({ params }) => {
  const { meta, content } = await getPostsByUrl(
    `${siteConfig.env.postEndpoint}/${params.slug.replace(/\.html$/, '.mdx')}`
  )

  return (
    <>
      <article>
        <section className="prose-h1:mb-0">
          <h1>{meta.title}</h1>
          <time>{formatDate(meta.date)}</time>

          <ul className="m-0 flex list-none flex-row gap-2 pl-0">
            {meta.tags?.map((tag) => (
              <li key={tag}>
                <Chip>{tag}</Chip>
              </li>
            ))}
          </ul>

          <blockquote>{meta.description || 'No description provided.'}</blockquote>

          {meta.image && (
            <Image
              src={meta.image}
              alt={meta.title}
              width={1920}
              height={1080}
              className="rounded object-cover shadow-lg"
            />
          )}
        </section>

        {content}
      </article>
    </>
  )
}

export default Page
