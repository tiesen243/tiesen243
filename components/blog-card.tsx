import Image from 'next/image'
import Link from 'next/link'

import type { Doc } from '@/content'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

export const BlogCard: React.FC<{ doc: Doc }> = ({ doc }) => (
  <Link href={doc.pathname} passHref>
    <Card className="transition-colors ease-linear hover:bg-secondary">
      <CardHeader className="mb-4 aspect-video w-full">
        <Image
          src={`/images/blog/${doc.pathname.split('/').at(-1)}.png`}
          alt={doc.title}
          className="rounded-t-lg"
          fill
        />
      </CardHeader>

      <CardFooter className="flex-col items-start gap-2">
        <CardTitle>{doc.title}</CardTitle>
        <CardDescription>{doc.description}</CardDescription>
      </CardFooter>
    </Card>
  </Link>
)
