'use client'

import { libraries, softwares } from '@/lib/data'
import { cn } from '@nextui-org/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const ScrollShadow = dynamic(() => import('@nextui-org/react').then((mod) => mod.ScrollShadow), {
  ssr: false,
})

const Skills: React.FC = () => (
  <>
    {[libraries, softwares].map((items, i) => (
      <ScrollShadow
        key={i}
        orientation="horizontal"
        className="my-1 inline-flex w-svw max-w-screen-lg flex-nowrap"
        visibility="both"
        hideScrollBar
      >
        {[0, 1].map((j) => (
          <ul
            key={j}
            className={cn(
              'flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-2',
              i === 0 ? 'animate-infinite-scroll' : 'animate-infinite-scroll-reverse'
            )}
            aria-hidden={j === 1}
          >
            {items.map((item) => (
              <Item key={item.label} {...item} />
            ))}
          </ul>
        ))}
      </ScrollShadow>
    ))}
  </>
)

export default Skills

const Item: React.FC<Data> = ({ label, path, isInverted }) => (
  <li className="flex items-center gap-2 rounded bg-secondary p-2">
    <Image
      src={path}
      alt={label.toLowerCase()}
      width={40}
      height={40}
      className={isInverted ? 'dark:invert' : ''}
    />
    <span className="whitespace-nowrap font-bold">{label}</span>
  </li>
)
