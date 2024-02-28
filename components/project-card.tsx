import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import * as card from '@/components/ui/card'
import Link from 'next/link'

const ProjectCard: React.FC<Project> = (props) => (
  <Link href={`/projects/${props.name}`} passHref legacyBehavior>
    <card.Card className="h-full cursor-pointer transition-colors hover:bg-secondary">
      <card.CardHeader className="aspect-video rounded-lg">
        <Image
          src={`/images/projects/${props.name}.jpg`}
          alt={props.name}
          width={630}
          height={354}
        />
      </card.CardHeader>

      <card.CardContent className="flex-grow">
        <card.CardTitle className="capitalize">{props.name.replace(/-/g, ' ')}</card.CardTitle>
        <card.CardDescription>{new Date(props.created_at).toDateString()}</card.CardDescription>
        <card.CardDescription className="line-clamp-1">{props.description}</card.CardDescription>
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
  </Link>
)

export default ProjectCard
