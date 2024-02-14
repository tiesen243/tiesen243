import { Skeleton } from '@/components/ui/skeleton'
import type { NextPage } from 'next'
import Link from 'next/link'

const LoadingPage: NextPage = () => (
  <div className="container flex-grow pt-4">
    <article className="mb-4 select-none prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline prose-blockquote:m-0">
      <div className="flex items-center gap-1">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/blogs">Blogs</Link>
      </div>

      <blockquote>This is a list of all my blogs, I have written.</blockquote>
    </article>

    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i}>
          <Skeleton className="h-48 w-full" />
        </li>
      ))}
    </ul>
  </div>
)

export default LoadingPage
