import type { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'All my blogs',
  openGraph: {
    title: 'Blogs',
    description: 'All my blogs',
  },
  twitter: {
    title: 'Blogs',
    description: 'All my blogs',
  },
}

import PostCard from '@/components/post-card'
import Typography, { Heading } from '@/components/ui/typography'
import { getAllPostsMetadata } from '@/lib/utils'

const Page: NextPage = async () => {
  const res = await getAllPostsMetadata()

  return (
    <>
      <Typography className="mt-4">
        <Heading>All my blogs</Heading>
      </Typography>
      <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
        {res.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </ul>
    </>
  )
}

export default Page
