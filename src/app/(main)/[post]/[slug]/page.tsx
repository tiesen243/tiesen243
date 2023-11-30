import { Metadata, NextPage } from 'next'

import HeaderPost from '@/components/HeaderPost'
import BackBtn from '@/components/backBtn'
import { getMDX } from '@/lib/readMDX'
import { Suspense } from 'react'
import { Separator } from '@/components/ui'
import { baseUrl } from '@/lib/constants'

interface Props {
  params: {
    post: 'blogs' | 'projects'
    slug: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { meta } = await getMDX(params.slug, params.post)
  const image = meta.image ? meta.image : '/logo.png'
  const url = `https://www.tiesen.id.vn/${params.post}/${params.slug}`

  return {
    metadataBase: new URL(baseUrl),
    title: meta.title,
    description: meta.description,
    creator: '@tiesen243',
    keywords: meta.tags?.join(', '),
    classification: params.post === 'blogs' ? 'article' : 'project',
    openGraph: {
      url,
      type: 'article',
      title: meta.title,
      description: meta.description,
      images: [{ url: image, alt: meta.title, width: 200, height: 200 }],
    },
    twitter: {
      images: image,
      title: meta.title,
      site: '@tiesen243',
      creator: 'tiesen243',
      card: 'summary_large_image',
      description: meta.description,
    },
    alternates: { canonical: url },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { content, meta } = await getMDX(params.slug, params.post)

  return (
    <Suspense fallback="Loading...">
      <BackBtn pathname={params.post} />
      <HeaderPost meta={meta} tags={meta.tags} />
      <Separator />
      <article className="typography my-4">{content}</article>
    </Suspense>
  )
}

export default Page