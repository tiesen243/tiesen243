import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui'
import { MDX } from '@/type'

interface Props {
  meta: MDX['meta']
  type: 'blogs' | 'projects'
}

const RenderPost: React.FC<Props> = ({ meta, type }) => (
  <Link href={`/${type}/${meta.slug}`} legacyBehavior passHref>
    <Card className="flex cursor-pointer flex-col justify-between transition-colors ease-linear hover:bg-secondary">
      <CardHeader>
        <CardTitle>{meta.title}</CardTitle>
        <CardDescription>{meta.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{meta.description}</p>
      </CardContent>
    </Card>
  </Link>
)

export default RenderPost
