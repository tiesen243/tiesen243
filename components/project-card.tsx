import { GithubIcon, LinkIcon } from 'lucide-react'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import * as card from '@/components/ui/card'

export interface Project {
  id: string
  name: string
  description: string
  language: string
  topics: string[]
  html_url: string
  homepage: string
  created_at: Date
}

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <card.Card key={project.id}>
    <card.CardHeader className="group mb-2 aspect-video w-full space-y-0">
      <Image
        src={`/images/projects/${project.name}.jpg`}
        alt={project.name}
        className="rounded-t-lg object-cover"
        fill
      />

      <div className="absolute inset-0 flex items-center justify-center gap-12 rounded-t-lg bg-background/70 opacity-0 backdrop-saturate-150 group-hover:opacity-100 group-hover:backdrop-blur-xl">
        {project.homepage && (
          <a
            href={project.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'ghost', className: 'h-14 w-14' })}
          >
            <LinkIcon size={32} />
          </a>
        )}
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: 'ghost', className: 'h-14 w-14' })}
        >
          <GithubIcon size={32} />
        </a>
      </div>
    </card.CardHeader>

    <card.CardContent>
      <div className="flex items-center justify-between">
        <card.CardTitle className="capitalize">{project.name.replace(/-/g, ' ')}</card.CardTitle>
        <time className="text-muted-foreground">{new Date(project.created_at).toDateString()}</time>
      </div>
      <card.CardDescription>Language: {project.language}</card.CardDescription>
      <card.CardDescription className="line-clamp-1">{project.description}</card.CardDescription>
    </card.CardContent>

    <card.CardFooter className="topics mx-6 flex flex-nowrap gap-1 overflow-x-auto whitespace-nowrap px-0">
      {project.topics
        .filter((topic) => !['showcase'].includes(topic))
        .map((topic) => (
          <Badge key={topic}>{topic}</Badge>
        ))}
    </card.CardFooter>
  </card.Card>
)
