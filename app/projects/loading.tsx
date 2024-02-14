import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import type { NextPage } from 'next'
import Link from 'next/link'

const Loading: NextPage = () => (
  <main className="container min-h-dvh flex-grow space-y-4 pt-4">
    <article className="mb-4 select-none prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline prose-blockquote:m-0">
      <div className="flex items-center gap-1">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/projects">Projects</Link>
      </div>
      <blockquote>This is a list of all my projects, I have worked on.</blockquote>
    </article>

    <ul className="gird-cols-1 grid gap-4">
      {[1, 2, 3, 4].map((idx) => (
        <li key={idx}>
          <Card>
            <Skeleton className="h-48 w-full" />
          </Card>
        </li>
      ))}
    </ul>
  </main>
)

export default Loading
