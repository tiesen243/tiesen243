import Image from 'next/image'
import { MotionDiv } from './motion'
import { ChevronDownIcon } from 'lucide-react'

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

    <div className="absolute inset-0 flex items-end justify-end p-16">
      <MotionDiv
        initial={{ y: -4 }}
        animate={{ y: [-4, 8, -4] }}
        transition={{ repeat: Infinity, duration: 2 }}
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
