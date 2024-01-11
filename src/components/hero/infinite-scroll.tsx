'use client'

import { ScrollShadow, cn } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { type Skill, frameworks, tools } from '@/lib/skills'

const InfiniteScroll: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center justify-center"
  >
    {[frameworks, tools].map((skills, i) => (
      <ScrollShadow
        key={i}
        orientation="horizontal"
        visibility="both"
        size={50}
        className="inline-flex max-w-screen-md flex-nowrap overflow-hidden"
      >
        <ul
          className={cn(
            'flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8',
            i === 0 ? 'animate-infinite-scroll' : 'animate-infinite-scroll-reverse'
          )}
        >
          <Items skills={skills} />
        </ul>

        <ul
          className={cn(
            'flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8',
            i === 0 ? 'animate-infinite-scroll' : 'animate-infinite-scroll-reverse'
          )}
          aria-hidden="true"
        >
          <Items skills={skills} />
        </ul>
      </ScrollShadow>
    ))}
  </motion.div>
)

export default InfiniteScroll

const Items: React.FC<{ skills: Skill[] }> = ({ skills }) =>
  skills.map((skill) => (
    <div
      key={skill.name}
      className="m-2 flex h-20 w-52 items-center justify-center gap-4 bg-primary/30 text-lg font-bold backdrop-blur"
    >
      <Image
        src={skill.icon}
        alt={skill.name}
        width={50}
        height={50}
        className={skill.isInvert ? 'dark:invert' : ''}
      />
      {skill.name}
    </div>
  ))
