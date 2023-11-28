import { getAllMeta } from '@/lib/readMDX'
import RenderPost from '@/components/renderPost'

const ProjectsSection: React.FC = async () => {
  const projMetas = await getAllMeta('projects')

  return (
    <section id="projects" className="snap-section typography">
      <h1 className="border-l-8 border-secondary pl-4">Projects</h1>
      <section className="max-h-[80%] space-y-2 overflow-y-auto">
        {projMetas.map((meta) => (
          <RenderPost key={meta.slug} meta={meta} type="projects" />
        ))}
      </section>
    </section>
  )
}

export default ProjectsSection
