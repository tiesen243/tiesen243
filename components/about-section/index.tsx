import Image from 'next/image'
import Infomation from './infomation'
import Skills from './skills'

const AboutSection: React.FC = () => (
  <section id="about" className="container min-h-dvh space-y-4 pt-4">
    <section className="col-span-1 grid md:grid-cols-12">
      <article className="prose-h2:m-0 prose-h2:pb-2 md:col-span-7">
        <h2 className="bg-gradient-text bg-clip-text text-6xl font-extrabold text-transparent">
          About Me
        </h2>

        <p>
          I am a full stack web developer with a passion for creating interactive and responsive web
          applications. I have experience working with TypeScript, React, Redux, TailwindCSS,
          Node.js, Prisma, tRPC, MongoDB and Git. I am a quick learner and I am always looking to
          expand my knowledge and skill set. I am a team player and I am excited to work with others
          to create amazing applications.
        </p>
      </article>

      <div className="aspect-square h-full w-full md:col-span-5">
        <Image src="/images/yuki.gif" fill className="rounded" alt="Yuki" />
      </div>
    </section>

    <Skills />
    <Infomation />
  </section>
)

export default AboutSection
