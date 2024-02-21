import { libraries, softwares } from '@/lib/data'
import { cn } from '@/lib/utils'

const Skills: React.FC = () => (
  <>
    {[libraries, softwares].map((items, i) => (
      <div key={i} className="scroll-shadows container inline-flex flex-nowrap overflow-x-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent shadow-2xl shadow-background" />
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
        <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent shadow-2xl shadow-background" />
      </div>
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
