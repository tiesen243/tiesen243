import { siteConfig } from '@/lib/site'
import { getAllPostsMeta } from '@/lib/mdx'
import { MetadataRoute } from 'next'

const baseUrl = process.env.NODE_ENV === 'production' ? siteConfig.url : 'http://localhost:3000'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'blogs'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogsPromise = await getAllPostsMeta().then((res) =>
    res.map((blog) => ({
      url: `${baseUrl}${blog.slug}`,
      lastModified: new Date().toISOString(),
    }))
  )

  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([blogsPromise])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }
  return [...routesMap, ...fetchedRoutes]
}
