import Image from 'next/image'
import Link from 'next/link'

import type { Post } from '@/content'
import * as card from '@/components/ui/card'

export const BlogCard: React.FC<{ doc: Post }> = ({ doc: { pathname, frontMatter } }) => (
  <Link href={pathname} passHref>
    <card.Card className="transition-colors ease-linear hover:bg-secondary">
      <card.CardHeader className="mb-4 aspect-video w-full">
        <Image src={frontMatter.image} alt={frontMatter.title} className="rounded-t-lg" fill />
      </card.CardHeader>

      <card.CardFooter className="flex-col items-start gap-2">
        <card.CardTitle>{frontMatter.title}</card.CardTitle>
        <card.CardDescription>{frontMatter.description}</card.CardDescription>
      </card.CardFooter>
    </card.Card>
  </Link>
)
