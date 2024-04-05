import createMDX from '@next/mdx'

import remarkFrontmatter from 'remark-frontmatter'
import remarkPrism from 'remark-prism'

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

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    jsx: true,
    providerImportSource: '@mdx-js/react',
    remarkPlugins: [remarkFrontmatter, remarkPrism],
  },
})

export default withMDX(nextConfig)
