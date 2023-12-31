import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { ChevronLeftIcon } from 'lucide-react'

const BackBtn: React.FC<{ pathname: 'blogs' | 'projects' }> = ({ pathname }) => (
  <Button variant="outline" size="icon" asChild>
    <Link href={`/#${pathname}`}>
      <ChevronLeftIcon size={24} />
    </Link>
  </Button>
)

export default BackBtn
