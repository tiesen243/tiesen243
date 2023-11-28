import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://tiesen.id.vn/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://acme.com/blogs',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.8,
    },
    {
      url: 'https://acme.com/projects',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.5,
    },
  ]
}
