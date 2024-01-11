import { Card, CardBody, CardFooter, CardHeader, Chip } from '@nextui-org/react'
import Link from 'next/link'

const PostCard: React.FC<{ post: PostMeta }> = ({ post }) => (
  <Link href={`/blogs/${post.slug}`} passHref legacyBehavior>
    <Card key={post.slug} className="h-full w-full border" isPressable>
      <CardHeader className="justify-between">
        <h3>{post.title.length > 35 ? post.title.slice(0, 35) + '...' : post.title}</h3>
        <p>{post.date}</p>
      </CardHeader>

      <CardBody>
        <p>
          {post.description.length > 100
            ? post.description.slice(0, 100) + '...'
            : post.description}
        </p>
      </CardBody>

      <CardFooter className="flex gap-1 overflow-x-auto">
        {post.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </CardFooter>
    </Card>
  </Link>
)

export default PostCard
