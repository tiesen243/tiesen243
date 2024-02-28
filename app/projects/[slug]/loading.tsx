import type { NextPage } from 'next'

import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingPage: NextPage = () => (
  <main className="container min-h-dvh flex-grow space-y-4 pt-4">
    <BreadCrumbs
      items={[
        { label: '~', href: '/#about' },
        { label: 'Projects', href: '/projects' },
        { label: 'loading...', href: '#' },
      ]}
    />

    <section className="space-y-4">
      <Skeleton className="aspect-video w-full" />

      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-4 w-full" />
      ))}
    </section>
  </main>
)

export default LoadingPage
