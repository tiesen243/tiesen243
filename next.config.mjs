import { createMdxtsPlugin } from 'mdxts/next'

const withMdxts = createMdxtsPlugin({
  theme: 'dracula',
  siteUrl:
    process.env.NODE_ENV === 'production' ? 'https://mdxts.vercel.app' : 'http://localhost:3000',
  gitSource: 'https://github.com/souporserious/mdxts',
})

export default withMdxts({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
    ],
  },
})
