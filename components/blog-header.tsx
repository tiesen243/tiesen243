import { ChevronLeftIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const BlogHeader: React.FC<PostMeta> = (meta) => (
  <>
    <article className="prose-h1:mb-0">
      <h1>{meta.title}</h1>
      <time>{formatDate(meta.date)}</time>

      <ul className="m-0 flex list-none flex-row gap-2 pl-0">
        {meta.tags?.map((tag) => (
          <li key={tag}>
            <Badge>{tag}</Badge>
          </li>
        ))}
      </ul>

      <blockquote>{meta?.description}</blockquote>

      {meta.image && (
        <Image
          src={meta.image}
          alt={meta.title}
          width={1920}
          height={1080}
          className="rounded object-cover shadow-lg"
        />
      )}
    </article>
  </>
)

export default BlogHeader
