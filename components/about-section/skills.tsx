'use client'

import { ScrollShadow } from '@nextui-org/scroll-shadow'
import Image from 'next/image'

import { libraries, softwares } from '@/lib/data'
import { cn } from '@/lib/utils'

const Skills: React.FC = () => (
  <>
    {[libraries, softwares].map((items, i) => (
      <ScrollShadow
        key={i}
        orientation="horizontal"
        className="my-1 inline-flex max-w-[500px] flex-nowrap md:max-w-screen-xl"
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
  <li className="flex basis-auto items-center gap-2 rounded bg-secondary px-4 py-2">
    <Image
      src={path}
      alt={label.toLowerCase().replace(/ /g, '-') + '-logo'}
      width={40}
      height={40}
      className={isInverted ? 'dark:invert' : ''}
    />
    <span className="whitespace-nowrap font-bold">{label}</span>
  </li>
)
