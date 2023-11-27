import { getContent, getMeta } from '@/lib/readMDX'
import { Metadata, NextPage } from 'next'
import Markdown from 'react-markdown'

interface Props {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const meta = getMeta(params.slug, 'projects')
  return {
    title: meta.title,
    description: meta.description,
  }
}

const Page: NextPage<Props> = ({ params }) => {
  const content = getContent(params.slug, 'projects')

  return <Markdown>{content}</Markdown>
}

export default Page
