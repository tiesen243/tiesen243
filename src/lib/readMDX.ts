import { MDXSlug } from '@/type'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export const rootBlog = path.join(process.cwd(), 'src', 'contents', 'blogs')
export const rootProj = path.join(process.cwd(), 'src', 'contents', 'projects')

export const getMeta = (slug: string, type: 'blogs' | 'projects'): MDXSlug => {
  const root = type === 'blogs' ? rootBlog : rootProj
  const realSlug = slug.replace(/\.mdx$/, '')

  const filePath = path.join(root, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' })
  const { data } = matter(fileContents)

  return {
    ...(data as MDXSlug),
    slug: realSlug,
  }
}

export const getAllMeta = (type: 'blogs' | 'projects'): MDXSlug[] => {
  const root = type === 'blogs' ? rootBlog : rootProj
  const slugs = fs.readdirSync(root)
  const meta = slugs.map((slug) => getMeta(slug, type))
  return meta
}

export const getContent = (slug: string, type: 'blogs' | 'projects'): string => {
  const root = type === 'blogs' ? rootBlog : rootProj
  const files = path.join(root, slug + '.mdx')
  const fileContent = fs.readFileSync(files, { encoding: 'utf8' })
  const { content } = matter(fileContent)
  return content
}
