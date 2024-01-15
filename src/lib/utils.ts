import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'

import customMdxComponents from './comp'
import { siteConfig } from './site'

export const getPostsByUrl = async (url: string): Promise<PostData> => {
  const mdxSource = await fetch(url, {
    headers: {
      authorization: `Bearer ${siteConfig.env.githubToken}`,
    },
    next: { revalidate: 60 * 60 },
  }).then((res) => res.text())

  const { content, frontmatter } = (await compileMDX({
    source: mdxSource,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [rehypeHighlight as any],
      },
    },
    components: customMdxComponents,
  })) as any

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

export const getAllPostsMeta = async (): Promise<PostData['meta'][]> => {
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

export const formatDate = (date: Date | string): string =>
  new Date(date).toLocaleDateString('vi-VN', { year: 'numeric', month: '2-digit', day: 'numeric' })
