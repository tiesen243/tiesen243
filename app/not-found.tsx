import { Button } from '@/components/ui/button'
import { NextPage } from 'next'
import Link from 'next/link'

const NotFound: NextPage = () => {
  return (
    <main className="flex min-h-dvh flex-grow flex-col items-center justify-center">
      <article>
        <h1 className="text-center text-5xl font-bold">Egg!!</h1>
        <p className="text-center">404 | Page Not Found</p>
      </article>

      <Link href="/" passHref legacyBehavior>
        <Button className="bg-gradient-text text-primary">Back to Home</Button>
      </Link>
    </main>
  )
}

export default NotFound
