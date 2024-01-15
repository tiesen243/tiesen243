import { compileMDX } from 'next-mdx-remote/rsc'
import { siteConfig } from './site'
import rehypeHighlight from 'rehype-highlight'
import customMdxComponents from '@/components/customMdxComponents'

export const getPostsByUrl = async (
  url: string
): Promise<{
  meta: PostMeta
  content: React.ReactElement
}> => {
  const mdxSource = await fetch(url, {
    headers: {
      authorization: `Bearer ${siteConfig.env.githubToken}`,
    },
    next: { revalidate: 60 * 60 },
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
}

export const getAllPostsMeta = async (): Promise<PostMeta[]> => {
  const res = await fetch(`${siteConfig.env.apiEndpoint}?ref=blogs`, {
    next: {
      revalidate: 60 * 60,
    },
  })
  const posts: PostSource[] = await res.json()

  const metas = await Promise.all(
    posts.map(async (post) => {
      const { meta } = await getPostsByUrl(`${post.download_url}?ref=blogs`)

      return {
        ...meta,
        name: post.name,
        slug: `/blogs/${post.name.replace('.mdx', '.html')}`,
      }
    })
  )

  return metas
}
