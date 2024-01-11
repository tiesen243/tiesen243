interface Repo {
  name: string
  full_name: string
  description: string
  html_url: string
  homepage: string
  language: string
  topics: string[]
}

interface PostMeta {
  title: string
  description: string
  slug: string
  date: string
  tags: string[]
  image?: string
}
