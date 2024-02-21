import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import * as card from '@/components/ui/card'
import Image from 'next/image'

const BlogCard: React.FC<PostMeta> = (meta) => (
  <Link href={meta.slug ?? '/'} passHref legacyBehavior>
    <card.Card className="flex h-full w-full cursor-pointer flex-col justify-between border transition-colors hover:bg-secondary">
      <card.CardContent className="p-0">
        <Image
          src={meta.image ?? ''}
          alt={meta.title}
          width={400}
          height={200}
          className="h-auto w-full rounded-t-lg"
        />
      </card.CardContent>

      <card.CardHeader className="flex-col items-start gap-1">
        <card.CardTitle>{meta.title}</card.CardTitle>
        <time>{new Date(meta.date).toDateString()}</time>

        <div className="flex gap-1">{meta.tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
      </card.CardHeader>
    </card.Card>
  </Link>
)

export default BlogCard
