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
})

export default withMDX(nextConfig)
