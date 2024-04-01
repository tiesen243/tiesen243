interface Icon {
  label: string
  color?: string
  icon: (props: LucideProps) => JSX.Element
}

interface Project {
  id: string
  name: string
  description: string
  language: string
  topics: string[]
  html_url: string
  homepage: string
  created_at: Date
}

interface PostSource {
  name: string
  sha: string
  html_url: string
  download_url: string
}

interface PostMeta {
  title: string
  description: string
  tags: string[]
  date: Date
  slug: string
  name: string
  image: string
}

interface Route {
  url: string
  lastModified: string
}
