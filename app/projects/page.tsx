import type { NextPage } from 'next'

import { MotionLi } from '@/components/motion'
import ProjectCard from '@/components/project-card'
import { siteConfig } from '@/lib/site'

const Page: NextPage = async () => {
  const projects: Project[] = await fetch(siteConfig.env.projectsApi, {
    headers: { authorization: siteConfig.env.githubToken },
    next: { revalidate: 24 * 60 * 60 },
  }).then((res) => res.json())

  return (
    <main id="projects" className="landing container min-h-dvh space-y-4 pt-4">
      <article className="prose-h2:m-0 prose-h2:pb-2">
        <h2>Projects</h2>
        <blockquote>This is a list of all my projects, I have worked on.</blockquote>
      </article>

      <ul className="gird-cols-1 grid gap-4">
        {projects.map((project) => (
          <MotionLi
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={project.id}
          >
            <ProjectCard {...project} />
          </MotionLi>
        ))}
      </ul>
    </main>
  )
}

export default Page
