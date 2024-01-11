'use client'

import { Button } from '@nextui-org/react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const BackBtn: React.FC = () => {
  const { push } = useRouter()

  return (
    <Button variant="bordered" isIconOnly>
      <Link href="/blogs">
        <ChevronLeft size={24} />
      </Link>
    </Button>
  )
}

export default BackBtn
