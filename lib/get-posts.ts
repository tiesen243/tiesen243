import fs from 'fs'
import path from 'path'
import grayMatter from 'gray-matter'

export const getPosts = (): BlogPost[] => {
  const files = fs.readdirSync('pages/blog')
  const contents = files.map((file) => {
    const filePath = path.join('pages/blog', file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = grayMatter(fileContents)
    return {
      meta: data as BlogPost['meta'],
      slug: file.replace(/\.mdx$/, ''),
    }
  })

  return contents
}
