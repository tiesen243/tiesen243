import Image from 'next/image'

import { Typography } from '@/components/ui/typography'
import { Skills } from './skills'
import { Infomation } from './infomation'
import { ViewMore } from './view-more'

export const About: React.FC = () => (
  <section id="about" className="min-h-dvh space-y-4 pt-4">
    <section className="col-span-1 grid gap-4 md:grid-cols-12">
      <article className="md:col-span-8">
        <h2 className="bg-gradient-to-br from-[var(--from)] to-[var(--to)] bg-clip-text text-6xl font-extrabold text-transparent">
          About Me
        </h2>

        <Typography className="text-2xl">
          I am a full stack web developer with a passion for creating interactive and responsive web
          applications.
          <br /> I have experience working with TypeScript, Next.js, TailwindCSS, ElysiaJS, tRPC,
          Prisma and more... I am a quick learner and I am always looking to expand my knowledge and
          skill set.
        </Typography>
      </article>

      <div className="aspect-square h-full w-full md:col-span-4">
        <Image
          src="/images/yuki.gif"
          className="rounded object-cover"
          alt="Yuki"
          unoptimized
          fill
        />
      </div>
    </section>

    <Skills />
    <Infomation />
    <ViewMore />
  </section>
)
