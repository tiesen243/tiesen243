'use client'

import Image from '@/components/ui/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import ButtonGroup from './button-group'
import { Heading } from '../ui/typography'

const animate = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
}
const Hello: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-12">
    <motion.section {...animate} className="col-span-7 place-self-center text-center md:text-left">
      <Heading>{hi}, I&apos;m</Heading>

      <pre className="mb-2 mt-4 font-mono">
        <TypeAnimation sequence={sequence} repeat={Infinity} className="text-4xl font-extrabold" />
      </pre>

      <p className="mt-4">
        Hi there <span className="animate-wave mx-1">👋</span>, I&apos;m <strong>Tran Tien</strong>,
        a {new Date().getFullYear() - 2004} years old developer and student from Vietnam. I&apos;m
        self-taught and I love to learn new things.{' '}
      </p>

      <ButtonGroup className="hidden md:grid" />
    </motion.section>

    <motion.section {...animate} className="col-span-5 mt-4 place-self-center md:mt-0">
      <Image src="/yuki.webp" alt="Yuki" width={500} height={500} />
    </motion.section>
  </div>
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
  2000,
  'Weaboo',
  2000,
  'Frontend Developer',
  1000,
  'Backend Developer',
  1000,
  'NextJs Developer',
  1000,
]
