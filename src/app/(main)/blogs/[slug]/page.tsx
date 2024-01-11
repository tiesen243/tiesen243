import type { Metadata, NextPage } from 'next'

import BackBtn from '@/components/back-btn'
import Typography from '@/components/ui/typography'
import { getPostBySlug } from '@/lib/utils'
import PostHeader from './_post-header'

interface Props {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { meta } = await getPostBySlug(params.slug.replace(/\.html?$/, ''))
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      tags: meta.tags,
      images: [
        {
          url: meta.image ?? '/logo.png',
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      images: meta.image ?? '/logo.png',
    },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { meta, content } = await getPostBySlug(params.slug.replace(/\.html?$/, ''))
  return (
    <>
      <BackBtn />
      <PostHeader meta={meta} />
      <Typography>{content}</Typography>
    </>
  )
}

export default Page
