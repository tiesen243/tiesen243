import { Metadata, NextPage } from 'next'

import HeaderPost from '@/components/HeaderPost'
import BackBtn from '@/components/backBtn'
import { getMDX } from '@/lib/readMDX'
import { baseUrl } from '@/lib/constants'

interface Props {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { meta } = await getMDX(params.slug, 'blogs')
  const image = meta.image ? meta.image : '/logo.png'

  return {
    metadataBase: new URL(baseUrl),
    title: meta.title,
    description: meta.description,
    creator: '@tiesen243',
    classification: 'Blog',
    keywords: meta.tags?.join(', '),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.tiesen.id.vn/blogs/${params.slug}`,
      type: 'article',
      images: [{ url: image }],
    },
    twitter: {
      site: '@tiesen243',
      title: 'Tran Tien | Tiesen243',
      description: "I'm a wibu developer from Vietnam.",
      card: 'summary_large_image',
      creator: 'tiesen243',
      images: image,
    },
    alternates: {
      canonical: `https://www.tiesen.id.vn/blogs/${params.slug}`,
    },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { content, meta } = await getMDX(params.slug, 'blogs')

  return (
    <>
      <BackBtn pathname="blogs" />
      <HeaderPost meta={meta} tags={meta.tags} />
      <article className="typography">{content}</article>
    </>
  )
}

export default Page
