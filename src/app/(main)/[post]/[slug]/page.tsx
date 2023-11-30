import { NextPage } from 'next'

import HeaderPost from '@/components/HeaderPost'
import BackBtn from '@/components/backBtn'
import { getMDX } from '@/lib/readMDX'
import { Suspense } from 'react'
import { Separator } from '@/components/ui'

interface Props {
  params: {
    post: 'blogs' | 'projects'
    slug: string
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
