import { Skeleton } from '@/components/ui/skeleton'
import { NextPage } from 'next'

const LoadingPage: NextPage = () => (
  <div className="landing">
    <article>
      <h1>Blogs</h1>
    </article>

    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i}>
          <Skeleton className="h-48 w-full" />
        </li>
      ))}
    </ul>
  </div>
)

export default LoadingPage
