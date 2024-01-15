'use client'

import dynamic from 'next/dynamic'

const BlogCard = dynamic(() => import('@/components/blog-card'), { ssr: false })

const Posts: React.FC<{ metas: PostData['meta'][] }> = ({ metas }) => (
  <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
    {metas.map((meta) => (
      <li key={meta.slug}>
        <BlogCard {...meta} />
      </li>
    ))}
  </ul>
)

export default Posts
