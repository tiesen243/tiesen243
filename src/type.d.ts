interface MDX {
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

interface Skill {
  title: string
  icon: string
  url: string
}

interface Social {
  title: string
  icon: ReactElement
  url: string
}
