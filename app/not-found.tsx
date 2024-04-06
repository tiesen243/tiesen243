import type { NextPage } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const NotFound: NextPage = () => (
  <main className="flex min-h-dvh flex-grow flex-col items-center justify-center space-y-8">
    <h1 className="text-center text-5xl font-bold">Egg!!</h1>
    <p className="text-2xl">404 | Page Not Found</p>

    <Link href="/" passHref>
      <Button className="bg-gradient-to-br from-[var(--from)] to-[var(--to)] text-xl font-black">
        Back to Home
      </Button>
    </Link>
  </main>
)

export default NotFound
