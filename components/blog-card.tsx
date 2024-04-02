import Image from 'next/image'
import Link from 'next/link'

import * as card from '@/components/ui/card'

export const BlogCard: React.FC<{ blog: BlogPost }> = ({ blog }) => (
  <Link key={blog.slug} href={`/blog/${blog.slug}`} passHref>
    <card.Card className="transition-colors ease-linear hover:bg-secondary">
      <card.CardHeader className="mb-2 aspect-video w-full">
        <Image
          src={blog.meta.image}
          alt={blog.meta.title}
          className="rounded-t-lg object-cover"
          fill
        />
      </card.CardHeader>

      <card.CardFooter className="flex-col items-start">
        <card.CardTitle>{blog.meta.title}</card.CardTitle>
        <card.CardDescription>{blog.meta.description}</card.CardDescription>
        <card.CardDescription>{blog.meta.date.toDateString()}</card.CardDescription>
      </card.CardFooter>
    </card.Card>
  </Link>
)
