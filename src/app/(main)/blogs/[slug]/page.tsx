import { getContent, getMeta } from '@/lib/readMDX'
import { Metadata, NextPage } from 'next'
import ReactMarkdown from 'react-markdown'

interface Props {
  params: {
    slug: string
  }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const meta = getMeta(params.slug, 'blogs')
  return {
    title: meta.title,
    description: meta.description,
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const content = getContent(params.slug, 'blogs')
  return <ReactMarkdown>{content}</ReactMarkdown>
}

export default Page
