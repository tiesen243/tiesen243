import RenderPost from '@/components/render-post'
import { getAllMeta } from '@/lib/readMDX'

interface Props {
  type: 'blogs' | 'projects'
}

const PostsSection: React.FC<Props> = async ({ type }) => {
  const metas = await getAllMeta(type)
  return (
    <section id={type} className="snap-section typography">
      <h1 className="border-l-8 border-secondary pl-4 capitalize">{type}</h1>
      <section className="max-h-[45rem] space-y-2 overflow-y-auto">
        {metas.map((meta) => (
          <RenderPost key={meta.slug} meta={meta} type={type} />
        ))}
      </section>
    </section>
  )
}

export default PostsSection
