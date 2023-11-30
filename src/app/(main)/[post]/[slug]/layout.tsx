import { baseUrl } from '@/lib/constants'
import { getMDX } from '@/lib/readMDX'

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { meta } = await getMDX(params.slug, params.post)
  const image = meta.image ? meta.image : '/logo.png'
  const url = `https://www.tiesen.id.vn/${params.post}/${params.slug}`

  return {
    metadataBase: new URL(baseUrl),
    title: meta.title,
    description: meta.description,
    creator: '@tiesen243',
    keywords: meta.tags?.join(', '),
    classification: params.post === 'blogs' ? 'article' : 'project',
    openGraph: {
      url,
      type: 'article',
      title: meta.title,
      description: meta.description,
      images: [{ url: image, alt: meta.title, width: 200, height: 200 }],
    },
    twitter: {
      images: image,
      title: meta.title,
      site: '@tiesen243',
      creator: 'tiesen243',
      card: 'summary_large_image',
      description: meta.description,
    },
    alternates: { canonical: url },
  }
}

const PostLayout: React.FC<React.PropsWithChildren> = ({ children }) => <>{children}</>

export default PostLayout
