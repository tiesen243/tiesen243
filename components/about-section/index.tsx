import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import Infomation from './infomation'
import Skills from './skills'

const AboutSection: React.FC = () => (
  <section id="about" className="container min-h-dvh space-y-4 pt-4">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:place-items-center">
      <article className="text-center prose-headings:m-0 prose-a:no-underline prose-pre:overflow-hidden prose-pre:bg-transparent prose-pre:p-0 md:col-span-7 md:text-left">
        <p className="text-lg">
          Hi there! I&apos;m <strong>Tran Tien</strong>, a {new Date().getFullYear() - 2004} years
          old developer from Vietnam. I seft-taught love to learn new things and build stuffs.
        </p>
      </article>

      <div className="mx-auto md:col-span-5 md:row-span-2">
        <Image src="/images/yuki.webp" alt="Yuki" className="rounded-lg" width={400} height={400} />
      </div>

      <div className="grid w-full grid-cols-2 gap-4 md:col-span-7">
        <Button className="bg-gradient-text font-bold text-primary" asChild>
          <Link href="/#contact-form">Contact me</Link>
        </Button>
        <Button variant="outline" asChild>
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </Button>
      </div>
    </div>

    <Skills />

    <article className="prose-h2:m-0 prose-h2:pb-2">
      <h2>About Me</h2>

      <p>
        I am a full stack web developer with a passion for creating interactive and responsive web
        applications. I have experience working with TypeScript, React, Redux, TailwindCSS, Node.js,
        Prisma, tRPC, MongoDB and Git. I am a quick learner and I am always looking to expand my
        knowledge and skill set. I am a team player and I am excited to work with others to create
        amazing applications.
      </p>
    </article>

    <Infomation />
  </section>
)

export default AboutSection
