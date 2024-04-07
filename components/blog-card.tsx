import Image from 'next/image'
import Link from 'next/link'

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { Post } from '@/content'

export const BlogCard: React.FC<Post & { pathname: string }> = (post) => (
  <Link href={post.pathname} passHref>
    <Card key={post.pathname} className="transition-colors ease-linear hover:bg-secondary">
      <CardHeader className="aspect-video w-full">
        <Image
          src={post.frontMatter.image ?? '/og.jpg'}
          alt={post.frontMatter.title}
          className="rounded-t-lg object-cover"
          fill
        />
      </CardHeader>

      <CardFooter className="flex-col items-start gap-1 pt-4">
        <CardTitle>{post.frontMatter.title}</CardTitle>
        <CardDescription className="line-clamp-1">{post.frontMatter?.description}</CardDescription>
        <CardDescription className="text-sm text-muted-foreground">
          {post.frontMatter.date.toDateString()}
        </CardDescription>
      </CardFooter>
    </Card>
  </Link>
)
