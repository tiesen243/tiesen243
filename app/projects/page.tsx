import type { Metadata, NextPage } from 'next'

import { type Project, ProjectCard } from '@/components/project-card'
import { BreadCrumbs } from '@/components/ui/breadcrumb'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects I have worked on',
}

const Page: NextPage = async () => {
  const projects: Project[] = await fetch(process.env.PROJECTS_URL!, {
    headers: { authorization: process.env.GITHUB_TOKEN! },
    next: { revalidate: 60 * 60 },
  })
    .then((res) => res.json())
    .then((p: Project[]) => p.filter((p) => p.topics.includes('showcase')))
    .catch((_e) => [])

  return (
    <>
      <BreadCrumbs
        items={[
          { name: '~', href: '/' },
          { name: 'Projects', href: '/projects' },
        ]}
      />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <section className="mt-4 space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Image
            key={i}
            src={`/images/design/0${i + 1}.png`}
            alt={`Design ${i + 1}`}
            className="rounded-lg object-cover shadow-lg"
            width={1920}
            height={1080}
          />
        ))}
      </section>
    </>
  )
}

export default Page
