'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

const Button = dynamic(() => import('@nextui-org/react').then((mod) => mod.Button), {
  ssr: false,
})
const TypeAnimation = dynamic(
  () => import('react-type-animation').then((mod) => mod.TypeAnimation),
  { ssr: false }
)

const Hello: React.FC = () => (
  <>
    <div className="grid grid-cols-1 place-items-center gap-2 md:grid-cols-12">
      <article className="col-span-7 text-center prose-h1:m-0 prose-h2:m-0 prose-a:no-underline prose-pre:p-0 md:text-left">
        <h1>{hi} I&apos;m</h1>

        <pre className="font-mono text-xl text-default">
          <TypeAnimation sequence={sequence} wrapper="h2" repeat={Infinity} speed={10} />
        </pre>

        <p className="text-lg text-default">
          Hi there! I&apos;m <strong>Tran Tien</strong>, a {new Date().getFullYear() - 2004} years
          old developer from Vietnam. I seft-taught love to learn new things and build stuffs.
        </p>
      </article>

      <section className="col-span-5 row-span-2 mx-auto">
        <Image
          src="/images/yuki.webp"
          alt="Yuki"
          className="rounded-lg object-cover"
          width={400}
          height={400}
        />
      </section>

      <section className="col-span-7 grid w-full grid-cols-2 gap-4">
        <Link href="/#contact-form" passHref legacyBehavior>
          <Button className="bg-gradient-text font-bold text-default">Hire me</Button>
        </Link>
        <Button variant="bordered">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </Button>
      </section>
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
