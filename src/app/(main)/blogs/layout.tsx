import { Button } from '@/components/ui'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

const BlogsLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="typography py-4">
    <Button variant="outline" size="icon" asChild>
      <Link href="/portfolio#blogs" className="mb-4">
        <ChevronLeft size={24} />
      </Link>
    </Button>
    {children}
  </div>
)

export default BlogsLayout
