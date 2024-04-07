import { type Module, createSource } from 'mdxts'

export interface Post {
  frontMatter: {
    title: string
    description: string
    image: string
    tags: string[]
    date: Date
  }
}

export const posts = createSource<Post>('./**/*.mdx', {
  baseDirectory: 'content',
})
