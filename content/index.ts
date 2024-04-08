import rehypeShiki from '@shikijs/rehype'
import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'

import { mdxComponents } from './mdx-components'

const root = process.cwd()

export interface PostMeta {
  title: string
  description: string
  image: string
  tags: string[]
  date: Date
  slug: string
}

export const getPost = async (slug: string) => {
  try {
    const source = fs.readFileSync(`${root}/content/blog/${slug}`, 'utf8')

    const { content, frontmatter } = await compileMDX<PostMeta>({
      source,
      options: {
        parseFrontmatter: true,
        mdxOptions: { rehypePlugins: [[rehypeShiki as any, { theme: 'dracula' }]] },
      },
      components: mdxComponents,
    })

    return { content, meta: { ...frontmatter, slug: slug.replace('.mdx', '') } }
  } catch (error) {
    return {
      content: '',
      meta: {
        title: '',
        description: '',
        image: '',
        tags: [],
        date: new Date(),
        slug: slug.replace('.mdx', ''),
      },
    }
  }
}

export const getPosts = async () => {
  const slugs = fs.readdirSync(`${root}/content/blog`)
  const posts = await Promise.all(slugs.map(getPost))
  return posts.map((post) => post.meta)
}
