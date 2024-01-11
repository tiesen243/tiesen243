import Image from '@/components/ui/image'
import Typography from '@/components/ui/typography'
import { Chip } from '@nextui-org/react'

const PostHeader: React.FC<{ meta: PostMeta }> = ({ meta }) => (
  <Typography>
    <section className="grid grid-cols-6">
      <h1 className="col-span-5 break-all">{meta.title}</h1>
      <p className="text-end">{meta.date}</p>
    </section>

    <ul className="flex items-center gap-2">
      {meta.tags.map((tag) => (
        <Chip key={tag}>{tag}</Chip>
      ))}
    </ul>

    <blockquote>{meta.description}</blockquote>

    {meta.image && <Image src={meta.image} alt={meta.title} width={1200} height={630} />}
  </Typography>
)

export default PostHeader
