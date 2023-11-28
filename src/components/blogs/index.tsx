import { getAllMeta } from '@/lib/readMDX'
import RenderPost from '@/components/renderPost'

const BlogsSection: React.FC = async () => {
  const blogMetas = await getAllMeta('blogs')

  return (
    <section id="blogs" className="snap-section typography">
      <h1 className="border-l-8 border-secondary pl-4">Blogs</h1>
      <section className="max-h-[45rem] space-y-2 overflow-y-auto">
        {blogMetas.map((meta) => (
          <RenderPost key={meta.slug} meta={meta} type="blogs" />
        ))}
      </section>
    </section>
  )
}

export default BlogsSection
