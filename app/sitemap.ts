import type { MetadataRoute } from 'next'

import { posts } from '@/content'
import { baseUrl } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'projects', '/blog'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = posts.all().map((post) => ({
    url: `${baseUrl}${post.pathname}`,
    lastModified: new Date().toISOString(),
  }))

  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([blogRoutes])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }
  return [...routesMap, ...fetchedRoutes]
}
