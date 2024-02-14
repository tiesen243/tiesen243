import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const BlogCard: React.FC<PostMeta> = (meta) => (
  <Link href={meta.slug ?? '/'} passHref legacyBehavior>
    <Card className="flex h-full w-full cursor-pointer flex-col justify-between border transition-colors hover:bg-secondary">
      <CardContent className="p-0">
        <Image
          src={meta.image ?? ''}
          alt={meta.title}
          width={400}
          height={200}
          className="h-auto w-full rounded-t-lg"
        />
      </CardContent>

      <CardHeader className="flex-col items-start gap-1">
        <CardTitle>{meta.title}</CardTitle>
        <time>{new Date(meta.date).toDateString()}</time>

        <div className="flex gap-1">{meta.tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
      </CardHeader>
    </Card>
  </Link>
)

export default BlogCard
