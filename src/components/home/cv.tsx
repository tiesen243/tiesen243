import { Button } from '@/components/ui/button'
import Link from 'next/link'

const CV: React.FC = () => (
  <Button variant="outline" className="mx-auto mt-2 w-fit font-bold" asChild>
    <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
      Download CV
    </Link>
  </Button>
)

export default CV
