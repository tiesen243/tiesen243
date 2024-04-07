import { createMdxtsPlugin } from 'mdxts/next'

const withMdxts = createMdxtsPlugin({
  theme: 'dracula',
  siteUrl: 'https://tiesen.id.vn',
  gitSource: 'https://github.com/souporserious/mdxts',
})

export default withMdxts({
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'github.com' }],
  },
})
