import { Skeleton } from '@/components/ui/skeleton'
import type { NextPage } from 'next'
import Link from 'next/link'

const LoadingPage: NextPage = () => (
  <main className="container flex-grow pt-4">
    <article className="mb-4 select-none prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline">
      <div className="flex items-center gap-1">
        <Link href="/">~</Link>
        <span>/</span>
        <Link href="/blogs">Blogs</Link>
        <span>/</span>
        <Skeleton className="h-8 w-32" />
      </div>
    </article>

    <section className="space-y-4">
      <Skeleton className="h-12 w-1/2" />
      <Skeleton className="h-12 w-1/3" />
      <Skeleton className="aspect-[20/9] w-full" />

      {Array.from({ length: Math.floor(Math.random() * 10) + 4 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
    </section>
  </main>
)

export default LoadingPage
