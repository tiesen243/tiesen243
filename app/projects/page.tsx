import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import Image from 'next/image'

import { MotionLi } from '@/components/motion'
import ProjectCard from '@/components/project-card'
import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import { baseUrl } from '@/lib/site'

export const generateMetadata = async (_: any, parent: ResolvingMetadata): Promise<Metadata> => ({
  title: 'Projects',
  description: 'A showcase of my projects and things I have created',
  openGraph: {
    title: 'Projects',
    description: 'A showcase of my projects and things I have created',
    url: `${baseUrl}/projects`,
    images: (await parent).openGraph?.images || [],
  },
  twitter: {
    title: 'Projects',
    description: 'A showcase of my projects and things I have created',
    images: (await parent).twitter?.images || [],
  },
})

const Page: NextPage = async () => {
  const projects: Project[] = await fetch(process.env.PROJECTS_URL!, {
    headers: { authorization: process.env.GITHUB_TOKEN! },
    next: { revalidate: 60 * 60 },
  })
    .then((res) => res.json())
    .then((p: Project[]) => p.filter((p) => p.topics.includes('showcase')))
    .catch((_e) => [])

  return (
    <main className="container min-h-dvh flex-grow space-y-4 pt-4">
      <BreadCrumbs
        items={[
          { label: '~', href: '/#about' },
          { label: 'Projects', href: '/projects' },
        ]}
      />

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
          <MotionLi
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={idx}
          >
            <Image
              src={`/images/design/${idx}.png`}
              alt={`image-${idx}`}
              width={1920}
              height={1080}
              className="rounded-lg object-contain shadow-lg"
            />
          </MotionLi>
        ))}
      </ul>
    </main>
  )
}

export default Page
