'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation'

import { Button } from '@/components/ui/button'

const Hello: React.FC = () => (
  <>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:place-items-center">
      <article className="text-center prose-headings:m-0 prose-a:no-underline prose-pre:overflow-hidden prose-pre:bg-transparent prose-pre:p-0 md:col-span-7 md:text-left">
        <h1>{hi} I&apos;m</h1>

        <pre className="bg-none font-mono text-4xl font-bold">
          <TypeAnimation sequence={sequence} repeat={Infinity} speed={10} />{' '}
        </pre>

        <p className="text-lg">
          Hi there! I&apos;m <strong>Tran Tien</strong>, a {new Date().getFullYear() - 2004} years
          old developer from Vietnam. I seft-taught love to learn new things and build stuffs.
        </p>
      </article>

      <div className="mx-auto md:col-span-5 md:row-span-2">
        <Image src="/images/yuki.webp" alt="Yuki" className="rounded-lg" width={400} height={400} />
      </div>

      <div className="grid w-full grid-cols-2 gap-4 md:col-span-7">
        <Button className="bg-gradient-text font-bold text-primary" asChild>
          <Link href="/#contact-form">Hire me</Link>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </Button>
      </div>
    </div>
  </>
)

export default Hello

const currentHour = Number(
  new Date().toLocaleString('vi', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: 'numeric',
  })
)

const hi =
  currentHour > 5 && currentHour < 12
    ? 'Ohayou~'
    : currentHour > 12 && currentHour < 18
      ? 'Konnichiwa~'
      : 'Konbanwa~'

const sequence = [
  'Tiesen',
  1000,
  'Weaboo',
  1000,
  'Frontend Developer',
  1000,
  'Backend Developer',
  1000,
  'NextJs Developer',
  1000,
]
