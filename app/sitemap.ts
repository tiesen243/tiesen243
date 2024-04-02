import { getPosts } from '@/lib/get-posts'
import { baseUrl } from '@/lib/site'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'blogs'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogsPromise = getPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.meta.date.toISOString(),
  }))

  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([blogsPromise])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }
  return [...routesMap, ...fetchedRoutes]
}
