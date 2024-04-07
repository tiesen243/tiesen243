import Image from 'next/image'
import { GithubIcon, Link2Icon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import * as card from '@/components/ui/card'
import { buttonVariants } from '@/components/ui/button'

export const ProjectCard: React.FC<Project> = (props) => (
  <card.Card className="group">
    <card.CardHeader className="mb-4 aspect-video w-full space-y-0">
      <Image
        src={`/images/projects/${props.name}.jpg`}
        alt={props.name}
        className="rounded-t-lg object-cover"
        fill
      />
      <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center gap-8 rounded-t-lg bg-card/70 opacity-0 backdrop-blur-xl backdrop-saturate-150 group-hover:opacity-100">
        <a
          href={props.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: 'ghost', size: 'icon' })}
        >
          <GithubIcon />
        </a>

        {props.homepage && (
          <a
            href={props.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'ghost', size: 'icon' })}
          >
            <Link2Icon />
          </a>
        )}
      </div>
    </card.CardHeader>

    <card.CardContent className="flex-grow">
      <card.CardTitle className="capitalize">{props.name.replace(/-/g, ' ')}</card.CardTitle>
      <card.CardDescription className="line-clamp-1">{props.description}</card.CardDescription>
      <card.CardDescription>{new Date(props.created_at).toDateString()}</card.CardDescription>
    </card.CardContent>

    <card.CardFooter>
      <ul className="tags inline-flex max-w-full space-x-1 overflow-x-auto whitespace-nowrap">
        {props.topics
          .filter((topic) => topic !== 'showcase')
          .map((topic) => (
            <li key={topic}>
              <Badge>{topic}</Badge>
            </li>
          ))}
      </ul>
    </card.CardFooter>
  </card.Card>
)
