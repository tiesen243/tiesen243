import { TypeAnimation } from 'react-type-animation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Intro: React.FC = () => (
  <>
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-md font-bold md:text-4xl">{hi}</h1>
      <TypeAnimation
        sequence={sequence}
        repeat={Infinity}
        className="bg-gradient-text  bg-clip-text pb-4 text-center font-mono text-lg font-bold text-transparent md:text-7xl"
      />
    </div>
    <p className="mx-auto mt-4 max-w-lg text-center text-xs font-normal text-muted-foreground md:text-xl">
      Hi there! I'm Tran Tien, a 20 years old developer from Vietnam. I seft-taught love to learn
      new things and build stuffs.
    </p>
    <div className="absolute -top-60 flex h-[890px] w-full items-center justify-center gap-8 md:-top-40 ">
      <Button
        className="z-30 mt-8 rounded-full bg-gradient-text text-xs font-bold text-black md:mt-28 md:px-4 md:py-2 md:text-base"
        asChild
      >
        <Link href="/#contact-form">Contact Me</Link>
      </Button>

      <Button className="z-30 mt-8 inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-xs font-bold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 md:mt-28 md:px-4 md:py-2 md:text-base">
        <Link href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
          Download CV
        </Link>
      </Button>
    </div>
  </>
)

// Button code

export default Intro

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
