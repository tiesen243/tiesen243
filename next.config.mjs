import { createMdxtsPlugin } from 'mdxts/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
}

const withMDX = createMdxtsPlugin({
  theme: 'dracula',
  siteUrl: 'https://tiesen.id.vn',
  gitSource: 'https://github.com/souporserious/mdxts',
})

export default withMDX(nextConfig)
