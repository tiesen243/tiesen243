import { siteConfig } from '@/lib/site'
import { getAllPostsMeta } from '@/lib/utils'
import { MetadataRoute } from 'next'

type Route = {
  url: string
  lastModified: string
}
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'blogs'].map((route) => ({
    url: `${siteConfig.url}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogsPromise = await getAllPostsMeta().then((res) =>
    res.map((blog) => ({
      url: `${siteConfig.url}${blog.slug}`,
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
