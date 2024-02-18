import type { NextPage } from 'next'

import { BreadCrumbs } from '@/components/breadcrumbs'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingPage: NextPage = () => (
  <div className="container flex-grow">
    <BreadCrumbs
      items={[
        { label: '~', href: '/' },
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
  </div>
)

export default LoadingPage
