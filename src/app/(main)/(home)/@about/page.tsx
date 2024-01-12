import type { NextPage } from 'next'

import Typography from '@/components/ui/typography'
import TabsSection from './_tabs'

const Page: NextPage = () => (
  <Typography id="about" className="min-h-dvh pt-16">
    <h1 className="bg-gradient-text bg-clip-text font-extrabold text-transparent">About</h1>

    <p>
      I am a full stack web developer with a passion for creating interactive and responsive web
      applications. I have experience working with TypeScript, React, Redux, TailwindCss, Node.js,
      NestJs Express, MongoDb and Git. I am a quick learner and I am always looking to expand my
      knowledge and skill set. I am a team player and I am excited to work with others to create
      amazing applications.
    </p>

    <TabsSection />
  </Typography>
)

export default Page
