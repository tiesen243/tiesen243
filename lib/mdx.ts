import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import customMdxComponents from '@/components/customMdxComponents'

const revalidate = 30
interface Post {
  meta: PostMeta
  content: React.ReactElement
}
const token = process.env.GITHUB_TOKEN!
export const getPostsByUrl = async (url: string): Promise<Post> => {
  try {
    const mdxSource = await fetch(url, {
      headers: { authorization: `Bearer ${token}` },
      next: { revalidate },
    }).then((res) => res.text())

    const { content, frontmatter } = await compileMDX<PostMeta>({
      source: mdxSource,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [rehypeHighlight as any],
        },
      },
      components: customMdxComponents,
    })

    return {
      meta: {
        title: frontmatter.title,
        description: frontmatter.description,
        image: frontmatter.image,
        tags: frontmatter.tags,
        date: frontmatter.date,
      },
      content,
    }
  } catch (e) {
    return {
      meta: {
        title: '',
        description: '',
        image: '',
        tags: [],
        date: new Date(),
      },
      content: null as any,
    }
  }
}

export const getAllPostsMeta = async (): Promise<PostMeta[]> => {
  try {
    const res = await fetch(process.env.BLOGPOST_URL!, {
      headers: { authorization: `Bearer ${token}` },
      next: { revalidate },
    })
    const posts: PostSource[] = await res.json()
    posts.filter((post) => post.name.endsWith('.mdx'))

    const metas = await Promise.all(
      posts.map(async (post) => {
        const { meta } = await getPostsByUrl(post.download_url)

        return {
          ...meta,
          name: post.name,
          slug: `/blogs/${post.name.replace('.mdx', '.html')}`,
        }
      })
    )

    return metas
  } catch (e) {
    return []
  }
}
