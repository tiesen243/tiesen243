import { createSource } from 'mdxts'

export const allDocs = createSource<{
  metadata: {
    title: string
    description: string
    image: string
    tags: string[]
    date: Date
  }
  image: string
}>('./**/*.mdx', {
  baseDirectory: 'content',
})

export type Doc = ReturnType<typeof allDocs.all>[0]
