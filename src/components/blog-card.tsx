import Link from 'next/link'

import { formatDate } from '@/lib/utils'
import { Card, CardBody, CardFooter, CardHeader, Chip } from '@nextui-org/react'

const BlogCard: React.FC<PostData['meta']> = (meta) => (
  <Link href={meta.slug ?? '/'} passHref legacyBehavior>
    <Card className="h-full w-full border" isPressable>
      <CardHeader className="flex-col items-start gap-1">
        <h3>{meta.title}</h3> <p className="text-secondary-foreground">{formatDate(meta.date)}</p>
      </CardHeader>

      <CardBody>{meta.description}</CardBody>

      <CardFooter className="flex gap-2">
        {meta.tags?.map((tag) => <Chip key={tag}>{tag}</Chip>)}
      </CardFooter>
    </Card>
  </Link>
)

export default BlogCard
