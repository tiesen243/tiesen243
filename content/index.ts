import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import { mdxComponents } from './mdx-components'

const rootDir = process.cwd()

export interface PostMeta {
  title: string
  description: string
  tags: string[]
  image: string
  date: Date
  slug: string
}

export const getPost = async (slug: string) => {
  try {
    const source = fs.readFileSync(`${rootDir}/content/blog/${slug}`, 'utf8')

    const { content, frontmatter } = await compileMDX<PostMeta>({
      source: source,
      options: {
        parseFrontmatter: true,
      },
      components: mdxComponents,
    })

    return { meta: frontmatter, content }
  } catch (error) {
    return {
      meta: { title: '', description: '', tags: [], image: '', date: new Date() },
      content: '',
    }
  }
}

export const getPosts = async (): Promise<PostMeta[]> => {
  const files = fs.readdirSync(`${rootDir}/content/blog`)

  const metas = await Promise.all(
    files.map(async (file) => {
      const { meta } = await getPost(file)
      return {
        ...meta,
        slug: file.replace('.mdx', ''),
      }
    }),
  )

  return metas
}
