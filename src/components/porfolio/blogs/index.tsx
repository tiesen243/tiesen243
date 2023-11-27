import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { getAllMeta } from '@/lib/readMDX'
import Link from 'next/link'

const blogs = getAllMeta('blogs')
export const BlogsSection: React.FC = () => (
  <section id="blogs" className="snap-section typography">
    <h1>Blogs</h1>
    <section className="grid max-h-[80%] grid-cols-1 gap-2 overflow-y-auto md:grid-cols-2">
      {blogs.map((blog, idx: number) => (
        <Link key={idx} href={`/blogs/${blog.slug}`} legacyBehavior passHref>
          <Card className="flex cursor-pointer flex-col justify-between transition-colors ease-linear hover:bg-secondary">
            <CardHeader>
              <CardTitle>{blog.title}</CardTitle>
              <CardDescription>{blog.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{blog.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  </section>
)
