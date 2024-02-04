import { Skeleton } from '@/components/ui/skeleton'
import { NextPage } from 'next'

const LoadingPage: NextPage = () => (
  <main className="container pt-4">
    <Skeleton className="my-4 aspect-square h-12" />
    <section className="space-y-4">
      <Skeleton className="h-12 w-1/2" />
      <Skeleton className="h-12 w-1/3" />
      <Skeleton className="aspect-[20/9] w-full" />

      {Array.from({ length: Math.floor(Math.random() * 10) + 1 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
    </section>
  </main>
)

export default LoadingPage
