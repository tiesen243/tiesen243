import { ChevronDownIcon } from 'lucide-react'
import Image from 'next/image'
import { MotionDiv, TypeAnimation } from './motion'

const HomeSection = () => (
  <MotionDiv
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    id="home"
  >
    <Image
      src="/images/hero.png"
      alt="hero"
      width={1920}
      height={1080}
      className="h-dvh object-cover"
    />

    <div className="absolute inset-0 flex flex-col items-center justify-start pt-16 text-white">
      <h1>{hi} I&apos;m</h1>

      <pre className="mt-4 select-none font-mono text-4xl font-bold text-white">
        <TypeAnimation sequence={sequence} repeat={Infinity} speed={10} />
      </pre>
    </div>

    <div className="absolute inset-0 flex items-end justify-end p-16">
      <MotionDiv
        initial={{ y: -4 }}
        animate={{ y: [-4, 8, -4] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
        className="flex h-16 w-16 animate-pulse flex-col items-center justify-center border-2 border-white border-t-transparent text-white"
      >
        <ChevronDownIcon size={40} strokeWidth={4} />
        <ChevronDownIcon size={40} strokeWidth={4} />
        <ChevronDownIcon size={40} strokeWidth={4} />
      </MotionDiv>
    </div>
  </MotionDiv>
)

export default HomeSection

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
