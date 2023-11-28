import nextMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [import('remark-frontmatter')],
  },
})

export default withMDX(nextConfig)
