import ProjectCard from '@/components/project-card'
import Typography, { Heading } from '@/components/ui/typography'
import { gh_api_token, gh_api_url } from '@/lib/constants'
import type { NextPage } from 'next'

const Page: NextPage = async () => {
  const res = await fetch(`${gh_api_url}/repos`, {
    headers: { authorization: `Bearer ${gh_api_token}` },
    next: { revalidate: 86400 },
  })
  const data: Repo[] = await res.json()

  return (
    <section id="projects" className="min-h-dvh pt-20">
      <Typography>
        <Heading>Projects</Heading>

        <blockquote>
          This is a list of my projects that I have worked on, and some that I still work on.
        </blockquote>
      </Typography>

      <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
        {data.map((repo) => (
          <li key={repo.name}>
            <ProjectCard repo={repo} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Page
