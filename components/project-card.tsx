import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import * as card from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkIcon } from 'lucide-react'

const ProjectCard: React.FC<Project> = (props) => (
  <card.Card className="h-full w-full border shadow-lg prose-h2:m-0 prose-p:m-0">
    <card.CardHeader>
      <div className="group aspect-video w-full">
        <Image
          src={`/images/projects/${props.name}.jpg`}
          alt={props.name}
          className="rounded-lg object-cover shadow-lg"
          fill
        />
        <div className="absolute inset-0 flex h-full w-full items-center justify-center gap-8 rounded-lg bg-card/70 opacity-0 backdrop-blur-lg backdrop-saturate-150 group-hover:opacity-100">
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <a href={props.html_url} target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>
          </Button>

          {props.homepage && (
            <Button variant="ghost" size="icon" className="rounded-full">
              <a href={props.homepage} target="_blank" rel="noopener noreferrer">
                <LinkIcon />
              </a>
            </Button>
          )}
        </div>
      </div>
    </card.CardHeader>

    <card.CardContent>
      <card.CardTitle className="capitalize">{props.name.replace(/-/g, ' ')}</card.CardTitle>
      <card.CardDescription>{new Date(props.created_at).toDateString()}</card.CardDescription>
      <card.CardDescription className="line-clamp-2">{props.description}</card.CardDescription>
    </card.CardContent>

    <card.CardFooter className="flex-row flex-nowrap gap-1 overflow-x-auto whitespace-nowrap">
      {props.topics
        .filter((topic) => topic !== 'showcase')
        .map((topic) => (
          <Badge key={topic}>{topic}</Badge>
        ))}
    </card.CardFooter>
  </card.Card>
)

export default ProjectCard
