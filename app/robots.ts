import { siteConfig } from '@/lib/site'

const baseUrl = process.env.NODE_ENV === 'production' ? siteConfig.url : 'http://localhost:3000'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
