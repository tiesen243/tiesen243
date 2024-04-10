import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'

import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import { getHighlighter } from 'shiki'

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
        mdxOptions: {
          rehypePlugins: [
            [
              rehypePrettyCode as any,
              /** @type {import("rehype-pretty-code").Options} */
              {
                theme: 'dracula',
                getHighlighter,
                onVisitLine(node) {
                  // Prevent lines from collapsing in `display: grid` mode, and allow empty
                  // lines to be copy/pasted
                  if (node.children.length === 0) {
                    node.children = [{ type: 'text', value: ' ' }]
                  }
                },
                onVisitHighlightedLine(node) {
                  node.properties.className?.push('line--highlighted')
                },
                onVisitHighlightedChars(node, id) {
                  node.properties.className = ['word']
                  node.properties['data-word-id'] = id
                },
              } satisfies Options,
            ],
          ],
        },
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
