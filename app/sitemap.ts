import { getPosts } from '@/lib/get-posts'
import { baseUrl } from '@/lib/site'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'blog', 'projects'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogRoutes = getPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.meta.date).toISOString(),
  }))

  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([blogRoutes])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }
  return [...routesMap, ...fetchedRoutes]
}
