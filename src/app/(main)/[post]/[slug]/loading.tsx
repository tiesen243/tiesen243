import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'

const PostLoading: React.FC = () => (
  <div className="space-y-4">
    <Skeleton className="h-10 w-1/2" />
    <Skeleton className="h-10 w-1/4" />

    <Separator />

    <article className="space-y-4">
      {Array.from({ length: Math.floor(Math.random() * 20) + 1 }).map((_, i) => (
        <Skeleton key={i} className="h-10 w-full" />
      ))}
    </article>
  </div>
)

export default PostLoading
