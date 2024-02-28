import type { NextPage } from 'next'

import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingPage: NextPage = () => (
  <main className="container min-h-dvh flex-grow space-y-4 pt-4">
    <BreadCrumbs
      items={[
        { label: '~', href: '/#about' },
        { label: 'Blogs', href: '/blogs' },
      ]}
    />

    <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i}>
          <Skeleton className="h-48 w-full" />
        </li>
      ))}
    </ul>
  </main>
)

export default LoadingPage
