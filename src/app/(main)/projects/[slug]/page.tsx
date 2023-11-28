import { Metadata, NextPage } from 'next'

import HeaderPost from '@/components/HeaderPost'
import BackBtn from '@/components/backBtn'
import { skills } from '@/lib/data'
import { getMDX } from '@/lib/readMDX'

interface Props {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { meta } = await getMDX(params.slug, 'projects')
  const image = meta.image ? meta.image : '/logo.png'

  return {
    title: meta.title,
    description: meta.description,
    creator: '@tiesen243',
    classification: 'Project',
    keywords: meta.tags?.join(', '),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.tiesen.id.vn/projects/${params.slug}`,
      type: 'article',
      images: [{ url: image }],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      card: 'summary_large_image',
      site: '@tiesen243',
      creator: '@tiesen243',
      images: [{ url: image }],
    },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const { content, meta } = await getMDX(params.slug, 'projects')
  const tags = skills.filter((skill) => meta.tags?.includes(skill.title))

  return (
    <>
      <BackBtn pathname="projects" />
      <HeaderPost meta={meta} tags={tags} />
      <article className="typography">{content}</article>
    </>
  )
}

export default Page
