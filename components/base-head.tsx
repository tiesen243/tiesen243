import { baseUrl } from '@/lib/site'
import Head from 'next/head'
import { BreadCrumbs } from './ui/breadcrumbs'

interface Props {
  title: string
  description?: string
  image?: string
  slug: string
  children?: React.ReactNode
}
export const BaseHead: React.FC<Props> = (props) => {
  const title = props.title ? `${props.title} | Tiesen` : 'Tiesen'
  const description = props.description ?? 'A collection of blogs written by me'
  const image = props.image ?? '/og.jpg'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/blog/${props.slug}`} />
        <meta name="twitter:site" content="@tiesen243" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={`${baseUrl}/blog/${props.slug}`} />
      </Head>

      <BreadCrumbs
        items={[
          { href: '/#about', label: '~' },
          { href: '/blog', label: 'Blog' },
          { href: `/blog/${props.slug}`, label: props.title },
        ]}
      />

      <article className="mx-auto max-w-screen-md">{props.children}</article>
    </>
  )
}
