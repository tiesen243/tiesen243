import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

interface Props {
  meta: MDX['meta']
  type: 'blogs' | 'projects'
}

const RenderPost: React.FC<Props> = ({ meta, type }) => (
  <Link href={`/${type}/${meta.slug}`} legacyBehavior passHref>
    <Card className="cursor-pointer transition-colors ease-linear hover:bg-secondary">
      <CardHeader>
        <CardTitle>
          {meta.title.length > 40 ? `${meta.title.slice(0, 40)}...` : meta.title}
        </CardTitle>
        <CardDescription>{meta.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          {meta.description.length > 100
            ? `${meta.description.slice(0, 100)}...`
            : meta.description}
        </p>
        {meta.tags?.length > 0 && <p>Tags: {meta.tags.join(', ')}</p>}
      </CardContent>
    </Card>
  </Link>
)

export default RenderPost
