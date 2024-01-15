interface Data {
  label: string
  path: string
  isInverted?: boolean
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

interface PostData {
  meta: {
    title: string
    description: string
    tags: string[]
    date: Date
    slug?: string
    name?: string
    image?: string
  }
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}
