import { Button } from '@/components/ui'
import { ChevronLeftIcon } from 'lucide-react'
import Link from 'next/link'

const BackBtn: React.FC<{ pathname: 'blogs' | 'projects' }> = ({ pathname }) => (
  <Button variant="outline" size="icon" asChild>
    <Link href={`/#${pathname}`} className="my-4">
      <ChevronLeftIcon size={24} />
    </Link>
  </Button>
)

export default BackBtn
