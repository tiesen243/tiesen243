import HeaderPost from '@/components/HeaderPost'
import BackBtn from '@/components/backBtn'
import { appUrl } from '@/lib/constants'
import { getMDX } from '@/lib/readMDX'
import { Metadata, NextPage } from 'next'
import { Suspense } from 'react'

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
    metadataBase: new URL(appUrl),
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
    <>
      <BackBtn pathname={params.post} />
      <HeaderPost meta={meta} tags={meta.tags} />
      <article className="typography my-4 select-auto">
        <blockquote>{meta.description}</blockquote>
        {content}
      </article>
    </>
  )
}

export default Page
