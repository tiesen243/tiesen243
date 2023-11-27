import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { getAllMeta } from '@/lib/readMDX'
import Link from 'next/link'

const projects = getAllMeta('projects')
export const ProjectsSection: React.FC = () => (
  <section id="projects" className="snap-section typography">
    <h1>Projects</h1>
    <section className="grid max-h-[80%] grid-cols-1 gap-2 overflow-y-auto md:grid-cols-2">
      {projects.map((project, idx: number) => (
        <Link href={`projects/${project.slug}`} key={idx} legacyBehavior passHref>
          <Card className="flex cursor-pointer flex-col justify-between transition-colors ease-linear hover:bg-secondary">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  </section>
)
