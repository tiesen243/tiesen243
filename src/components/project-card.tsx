'use client'

import { formatDate } from '@/lib/utils'
import { GithubIcon, LinkIcon } from 'lucide-react'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@nextui-org/react').then((mod) => mod.Button))
const Card = dynamic(() => import('@nextui-org/react').then((mod) => mod.Card))
const CardBody = dynamic(() => import('@nextui-org/react').then((mod) => mod.CardBody))
const CardFooter = dynamic(() => import('@nextui-org/react').then((mod) => mod.CardFooter))
const CardHeader = dynamic(() => import('@nextui-org/react').then((mod) => mod.CardHeader))
const Chip = dynamic(() => import('@nextui-org/react').then((mod) => mod.Chip))

const ProjectCard: React.FC<Project> = (props) => (
  <Card as="article" className="group relative h-full border prose-h3:m-0 prose-p:m-0">
    <CardHeader as="h3" className="capitalize">
      {props.name.replace(/-/g, ' ')}
    </CardHeader>

    <CardBody className="flex flex-col justify-between">
      <time dateTime={props.created_at.toString()}>{formatDate(props.created_at)}</time>
      <p>
        {props.description?.length > 50
          ? `${props.description.slice(0, 50)}...`
          : props.description}
      </p>

      <p>
        Language: <span className="capitalize">{props.language}</span>
      </p>
    </CardBody>

    <div className="absolute z-20 hidden h-full w-full items-center justify-evenly bg-secondary/40 backdrop-blur transition-all group-hover:flex">
      <Button variant="bordered" size="lg" radius="full" isIconOnly>
        <a href={props.html_url} target="_blank" rel="noopener noreferrer">
          <GithubIcon />
        </a>
      </Button>
      {props.homepage && (
        <Button variant="bordered" size="lg" radius="full" isIconOnly>
          <a href={props.homepage} target="_blank" rel="noopener noreferrer">
            <LinkIcon />
          </a>
        </Button>
      )}
    </div>

    <CardFooter className="flex-col gap-1">
      {props.topics.map((topic) => (
        <Chip key={topic}>{topic}</Chip>
      ))}
    </CardFooter>
  </Card>
)

export default ProjectCard
