import { allDocs } from '@/content'
import { siteConfig } from '@/lib/site'

export async function GET() {
  const feed = allDocs.rss({
    title: siteConfig.metadata.applicationName,
    description: siteConfig.metadata.description,
    copyright: `©${new Date().getFullYear()} @tiesen243`,
  })
  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml',
    },
  })
}
