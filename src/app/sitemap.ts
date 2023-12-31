import { getAllMeta } from '@/lib/readMDX'
import { MetadataRoute } from 'next'

type Route = {
  url: string
  lastModified: string
}

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ['', '/projects', 'blogs'].map((route) => ({
    url: `${appUrl}/${route}`,
    lastModified: new Date().toISOString(),
  }))

  const projectsPromise = await getAllMeta('projects').then((res) =>
    res.map((project) => ({
      url: `${appUrl}/projects/${project.slug}`,
      lastModified: new Date().toISOString(),
    }))
  )

  const blogsPromise = await getAllMeta('blogs').then((res) =>
    res.map((blog) => ({
      url: `${appUrl}/blog/${blog.slug}`,
      lastModified: new Date().toISOString(),
    }))
  )

  let fetchedRoutes: Route[] = []
  try {
    fetchedRoutes = (await Promise.all([projectsPromise, blogsPromise])).flat()
  } catch (error) {
    throw JSON.stringify(error, null, 2)
  }
  return [...routesMap, ...fetchedRoutes]
}
