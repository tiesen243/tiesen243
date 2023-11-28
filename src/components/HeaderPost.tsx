import { MDX } from '@/type'
import Image from 'next/image'
import Badge from './badge'

interface Props {
  meta: MDX['meta']
  tags: string[] | { title: string; icon: string }[]
}

const HeaderPost: React.FC<Props> = ({ meta, tags }) => (
  <div className="typography my-4 text-center prose-h1:mb-2">
    <h1>{meta.title}</h1>
    <time dateTime={meta.date}>{meta.date}</time>
    <section className="flex flex-wrap justify-center gap-1">
      {tags?.map((tag) => {
        if (typeof tag === 'string') return <div key={tag}>{tag}</div>
        else return <Badge key={tag.title} alt={tag.title} text={tag.title} src={tag.icon} />
      })}
    </section>

    {meta.image && <Image src={meta.image} alt={meta.title} width={1920} height={1080} />}
  </div>
)

export default HeaderPost
