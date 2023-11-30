import { type ReactElement } from 'react'

export interface MDX {
  meta: {
    title: string
    description: string
    date: string
    tags: string[]
    slug: string
    image?: string
    repository?: string
  }
  content: ReactElement
}

export interface Skill {
  title: string
  icon: string
  url: string
}

export interface Social {
  title: string
  icon: ReactElement
  url: string
}
