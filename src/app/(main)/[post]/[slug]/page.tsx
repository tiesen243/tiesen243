import type { Metadata, NextPage } from 'next'

import BackBtn from '@/components/back-btn'
import HeaderPost from '@/components/header-post'
import { getMDX } from '@/lib/readMDX'

interface Props {
  params: {
    post: 'blogs' | 'projects'
    slug: string
  }
}

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { meta } = await getMDX(params.slug, params.post)
  const image = meta.image ? meta.image : '/logo.png'
  const url = `${appUrl}/${params.post}/${params.slug}`

  return {
    metadataBase: new URL(appUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.tags?.join(', '),
    classification: params.post === 'blogs' ? 'article' : 'project',
    openGraph: {
      url,
      title: meta.title,
      description: meta.description,
      images: [{ url: image, alt: meta.title, width: 200, height: 200 }],
    },
    twitter: {
      images: image,
      title: meta.title,
      description: meta.description,
    },
    alternates: { canonical: url },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { content, meta } = await getMDX(params.slug, params.post)

  return (
    <>
      <BackBtn pathname={params.post} />
      <HeaderPost meta={meta} tags={meta.tags} />
      <article className="typography my-4 select-auto scroll-auto">
        <blockquote>{meta.description}</blockquote>
        {content}
      </article>
    </>
  )
}

export default Page
