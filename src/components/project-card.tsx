import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Link } from '@nextui-org/react'
import { GithubIcon, LinkIcon } from 'lucide-react'

const ProjectCard: React.FC<{ repo: Repo }> = ({ repo }) => (
  <Card className="group relative h-full border">
    <CardHeader className="flex justify-between">
      <h2 className="text-2xl font-bold capitalize">{repo.name}</h2>
      {typeof repo.language === 'string' ? <Chip>{repo.language}</Chip> : null}
    </CardHeader>

    <CardBody>{repo.description}</CardBody>

    <section className="absolute inset-0 z-20 hidden h-full w-full items-center justify-center gap-4 bg-content1/50 backdrop-blur group-hover:flex">
      <Button
        as={Link}
        href={repo.html_url}
        variant="bordered"
        className="rounded-full"
        size="lg"
        isIconOnly
        isExternal
      >
        <GithubIcon />
      </Button>

      {repo.homepage && (
        <Button
          as={Link}
          href={repo.homepage}
          variant="bordered"
          className="rounded-full"
          size="lg"
          isIconOnly
          isExternal
        >
          <LinkIcon />
        </Button>
      )}
    </section>

    <CardFooter className="flex gap-1 overflow-x-auto">
      {repo.topics.map((topic) => (
        <Chip key={topic} className="z-10">
          {topic}
        </Chip>
      ))}
    </CardFooter>
  </Card>
)

export default ProjectCard
