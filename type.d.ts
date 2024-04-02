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

interface BlogPost {
  meta: {
    title: string
    description: string
    date: Date
    tags: string[]
    image: string
  }
  slug: string
}

interface Route {
  url: string
  lastModified: string
}
