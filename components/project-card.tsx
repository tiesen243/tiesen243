import { GithubIcon, LinkIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const ProjectCard: React.FC<Project> = (props) => (
  <Card className="group relative h-full w-full border shadow-lg prose-h2:m-0 prose-p:m-0">
    <CardHeader className="capitalize">
      <CardTitle>{props.name.replace(/-/g, ' ')}</CardTitle>
    </CardHeader>

    <CardContent>
      <time dateTime={props.created_at.toString()}>
        {new Date(props.created_at).toDateString()}
      </time>

      <p className="max-w-[400px] overflow-hidden text-ellipsis whitespace-nowrap md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
        {props.description}
      </p>

      {props.language && <p className="capitalize">Language: {props.language}</p>}
    </CardContent>

    <div className="absolute inset-0 z-30 hidden h-full w-full items-center justify-center gap-8 bg-secondary/50 backdrop-blur group-hover:flex">
      <Button size="icon" className="h-14 w-14 rounded-full" asChild>
        <a href={props.html_url} target="_blank" rel="noopener noreferrer">
          <GithubIcon size={24} />
        </a>
      </Button>
      {props.homepage && (
        <Button size="icon" className="h-14 w-14 rounded-full" asChild>
          <a href={props.homepage} target="_blank" rel="noopener noreferrer">
            <LinkIcon size={24} />
          </a>
        </Button>
      )}
    </div>

    <CardFooter className="flex-row flex-nowrap gap-1">
      {props.topics
        .filter((topic) => topic !== 'showcase')
        .map((topic) => (
          <Badge key={topic}>{topic}</Badge>
        ))}
    </CardFooter>
  </Card>
)

export default ProjectCard
