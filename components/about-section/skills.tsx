'use client'

import { ScrollShadow } from '@nextui-org/scroll-shadow'

import { libraries, softwares } from '@/lib/data'
import { cn } from '@/lib/utils'

const Skills: React.FC = () => (
  <>
    {[libraries, softwares].map((items, i) => (
      <ScrollShadow
        key={i}
        orientation="horizontal"
        className="container inline-flex flex-nowrap overflow-x-hidden"
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

const Item: React.FC<Icon> = (data) => (
  <li className="flex basis-auto select-none items-center gap-2 rounded-lg bg-secondary px-4 py-2 shadow-lg">
    <data.icon className={`h-8 w-8 ${!data.color && 'dark:invert'}`} fill={data.color} />
    <span className="whitespace-nowrap text-xl font-bold">{data.label}</span>
  </li>
)
