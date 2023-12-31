import RenderPost from '@/components/render-post'
import { getAllMeta } from '@/lib/readMDX'
import Link from 'next/link'

interface Props {
  type: 'blogs' | 'projects'
}

const PostsSection: React.FC<Props> = async ({ type }) => {
  const metas = await getAllMeta(type)
  return (
    <section id={type} className="snap-section">
      <article className="typography">
        <h1 className="border-l-8 border-secondary pl-4 capitalize">{type}</h1>
      </article>
      <section className="space-y-2">
        {metas.slice(0, 3).map((meta) => (
          <RenderPost key={meta.slug} meta={meta} type={type} />
        ))}
      </section>
      <Link href={type} className="mt-4 flex justify-end underline-offset-4 hover:underline">
        See all {type} &rarr;
      </Link>
    </section>
  )
}

export default PostsSection
