import { getAllPostsMetadata } from '@/lib/utils'
import { MetadataRoute } from 'next'

type Route = {
  url: string
  lastModified: string
}

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', 'blogs'].map((route) => ({
    url: `${appUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const blogsPromise = await getAllPostsMetadata().then((res) =>
    res.map((blog) => ({
      url: `${appUrl}/blogs/${blog.slug}.html`,
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
