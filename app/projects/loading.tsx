import type { NextPage } from 'next'

import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const Loading: NextPage = () => (
  <main className="container min-h-dvh flex-grow space-y-4 pt-4">
    <BreadCrumbs
      items={[
        { label: '~', href: '/#about' },
        { label: 'Projects', href: '/projects' },
      ]}
    />

    <ul className="gird-cols-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4].map((idx) => (
        <li key={idx}>
          <Card>
            <Skeleton className="h-80 w-full" />
          </Card>
        </li>
      ))}
    </ul>
  </main>
)

export default Loading
