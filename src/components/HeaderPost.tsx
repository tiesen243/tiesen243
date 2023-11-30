import { MDX } from '@/type'
import { GithubIcon } from 'lucide-react'
import Image from 'next/image'
import Badge from './badge'
import { Button } from './ui'

interface Props {
  meta: MDX['meta']
  tags: string[]
}

const HeaderPost: React.FC<Props> = ({ meta, tags }) => (
  <div className="typography mx-auto my-4 prose-h1:mb-2">
    <section className="flex items-center justify-between">
      <div>
        <h1>{meta.title}</h1>
        <time dateTime={meta.date}>{meta.date}</time>
      </div>

      {meta.repository && (
        <Button variant="outline" size="icon" asChild>
          <a href={meta.repository} target="_blank" rel="noopener noreferrer">
            <GithubIcon size={24} />
          </a>
        </Button>
      )}
    </section>

    <section className="flex flex-wrap justify-center gap-1">
      {tags?.map((tag, idx: number) => <Badge key={idx} tag={tag} type="dev" />)}
    </section>

    {meta.image && <Image src={meta.image} alt={meta.title} width={1920} height={1080} />}
  </div>
)

export default HeaderPost
