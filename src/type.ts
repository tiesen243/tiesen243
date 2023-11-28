import { type ReactElement } from 'react'

export interface MDX {
  meta: {
    title: string
    description: string
    date: string
    tags: string[]
    image: string
    slug?: string
  }
  content: ReactElement
}
