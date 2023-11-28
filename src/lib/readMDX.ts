import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { ReactElement } from 'react'
import { MDX } from '@/type'

export const rootBlog = path.join(process.cwd(), 'src', 'contents', 'blogs')
export const rootProj = path.join(process.cwd(), 'src', 'contents', 'projects')

export const getMDX = async (slug: string, type: 'blogs' | 'projects'): Promise<MDX> => {
  const root = type === 'blogs' ? rootBlog : rootProj
  const formatedSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(root, `${formatedSlug}.mdx`)

  const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { content, frontmatter } = await compileMDX({
    source: fileContents,
    options: { parseFrontmatter: true },
  })

  return {
    meta: frontmatter as MDX['meta'],
    content: content,
  }
}

export const getAllMeta = async (type: 'blogs' | 'projects'): Promise<MDX['meta'][]> => {
  const root = type === 'blogs' ? rootBlog : rootProj
  const slugs = fs.readdirSync(root)
  const metas = await Promise.all(
    slugs.map(async (slug: string) => {
      const { meta } = await getMDX(slug, type)
      meta.slug = slug.replace(/\.mdx$/, '')
      return meta
    })
  )

  return metas
}
