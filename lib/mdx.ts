import { compileMDX } from 'next-mdx-remote/rsc'
import { siteConfig } from './site'
import rehypeHighlight from 'rehype-highlight'
import customMdxComponents from '@/components/customMdxComponents'

const revalidate = 30
export const getPostsByUrl = async (
  url: string
): Promise<{
  meta: PostMeta
  content: React.ReactElement
}> => {
  try {
    const mdxSource = await fetch(url, {
      headers: { authorization: `Bearer ${siteConfig.env.githubToken}` },
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
    const res = await fetch(`${siteConfig.env.blogPostApi}?ref=main`, {
      headers: { authorization: `Bearer ${siteConfig.env.githubToken}` },
      next: { revalidate },
    })
    const posts: PostSource[] = await res.json()

    const metas = await Promise.all(
      posts.map(async (post) => {
        const { meta } = await getPostsByUrl(`${post.download_url}?ref=main`)

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
