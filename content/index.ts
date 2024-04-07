import { createSource } from 'mdxts'

type FrontMatter = {
  title: string
  description: string
  image: string
  tags: string[]
  date: Date
}

export const posts = createSource<{
  metadata: { date: string }
  frontMatter: FrontMatter
}>('./**/*.mdx', {
  baseDirectory: 'content',
})

export type Post = ReturnType<typeof posts.all>[0] & {
  frontMatter: FrontMatter
}
