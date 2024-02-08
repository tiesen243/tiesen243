import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const BlogCard: React.FC<PostMeta> = (meta) => (
  <Link href={meta.slug ?? '/'} passHref legacyBehavior>
    <Card className="flex h-full w-full cursor-pointer flex-col justify-between border transition-colors hover:bg-secondary">
      <CardHeader className="flex-col items-start gap-1">
        <CardTitle>{meta.title}</CardTitle>
        <CardDescription>{new Date(meta.date).toDateString()}</CardDescription>
      </CardHeader>

      <CardContent>
        {meta.description?.length > 100 ? `${meta.description.slice(0, 100)}...` : meta.description}
      </CardContent>

      <CardFooter className="flex gap-2">
        {meta.tags?.map((tag) => <Badge key={tag}>{tag}</Badge>)}
      </CardFooter>
    </Card>
  </Link>
)

export default BlogCard
