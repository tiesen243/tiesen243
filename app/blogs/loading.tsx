import { Skeleton } from '@/components/ui/skeleton'
import { NextPage } from 'next'

const LoadingPage: NextPage = () => (
  <div className="landing container pt-4">
    <article>
      <h1>Blogs</h1>
    </article>

    <ul className="grid grid-cols-1 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <li key={i}>
          <Skeleton className="h-48 w-full" />
        </li>
      ))}
    </ul>
  </div>
)

export default LoadingPage
