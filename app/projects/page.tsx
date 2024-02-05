import type { NextPage } from 'next'

import { MotionLi } from '@/components/motion'
import ProjectCard from '@/components/project-card'
import { siteConfig } from '@/lib/site'
import Image from 'next/image'

const Page: NextPage = async () => {
  const projects: Project[] = await fetch(siteConfig.env.projectsApi, {
    headers: { authorization: siteConfig.env.githubToken },
    next: { revalidate: 60 * 60 },
  })
    .then((res) => res.json())
    .then((data) => data.filter((project: Project) => project.topics.includes('showcase')))

  return (
    <main id="projects" className="landing container min-h-dvh flex-grow space-y-4 pt-4">
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

      <article>
        <h3>Something I have cooked up on my free time</h3>
        <p>
          I have a habit of creating things in my free time, here are some of the things I have
          created.
          <br />
          Hope you like it :3
        </p>
      </article>

      <ul className="space-y-4">
        {[1, 2, 3, 4].map((idx) => (
          <li key={idx}>
            <Image
              src={`${siteConfig.env.rawcontent}/albums/main/des/${idx}.png`}
              alt={`image-${idx}`}
              width={1920}
              height={1080}
              className="rounded object-contain shadow-lg"
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Page
