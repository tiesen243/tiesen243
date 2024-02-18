import type { NextPage } from 'next'

import { BreadCrumbs } from '@/components/breadcrumbs'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingPage: NextPage = () => (
  <main className="container flex-grow">
    <BreadCrumbs
      items={[
        { label: '~', href: '/' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'loading...', href: '#' },
      ]}
    />

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
