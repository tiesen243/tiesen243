import ProjectCard from '@/components/project-card'
import { siteConfig } from '@/lib/site'

const ProjectsSection: React.FC = async () => {
  const projects: Project[] = await fetch(siteConfig.env.projectsApi, {
    headers: { authorization: siteConfig.env.githubToken },
    next: { revalidate: 24 * 60 * 60 },
  }).then((res) => res.json())

  return (
    <section id="projects" className="min-h-dvh space-y-4 pt-16">
      <article className="prose-h1:m-0">
        <h1>Projects</h1>
        <blockquote>This is a list of all my projects, I have worked on.</blockquote>
      </article>

      <ul className="gird-cols-1 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
