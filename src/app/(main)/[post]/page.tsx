import type { Metadata, NextPage } from 'next'

import BackBtn from '@/components/back-btn'
import RenderPost from '@/components/render-post'
import { getAllMeta } from '@/lib/readMDX'

interface Props {
  params: {
    post: 'blogs' | 'projects'
  }
}

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export const generateMetadata = ({ params }: Props): Metadata => ({
  title: params.post.charAt(0).toUpperCase() + params.post.slice(1),
  openGraph: {
    title: params.post.charAt(0).toUpperCase() + params.post.slice(1),
    url: `${appUrl}/${params.post}`,
  },
  twitter: {
    title: params.post.charAt(0).toUpperCase() + params.post.slice(1),
  },
  alternates: {
    canonical: `${appUrl}/${params.post}`,
  },
})

const Page: NextPage<Props> = async ({ params }) => {
  const metas = await getAllMeta(params.post)

  return (
    <>
      <BackBtn pathname={params.post} />
      <section className="my-4 space-y-2">
        {metas.map((meta) => (
          <RenderPost key={meta.slug} meta={meta} type={params.post} />
        ))}
      </section>
    </>
  )
}

export default Page
