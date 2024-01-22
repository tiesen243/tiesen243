'use client'

import dynamic from 'next/dynamic'
const Infomation = dynamic(() => import('./infomation'), { ssr: false })

const AboutSection: React.FC = () => (
  <section id="about" className="min-h-dvh pt-16">
    <article className="prose-h2:m-0 prose-h2:pb-2">
      <h2>About Me</h2>

      <p>
        I am a full stack web developer with a passion for creating interactive and responsive web
        applications. I have experience working with TypeScript, React, Redux, TailwindCss, Node.js,
        NestJs Express, MongoDb and Git. I am a quick learner and I am always looking to expand my
        knowledge and skill set. I am a team player and I am excited to work with others to create
        amazing applications.
      </p>
    </article>

    <Infomation />
  </section>
)

export default AboutSection
