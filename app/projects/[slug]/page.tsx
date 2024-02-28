import type { Metadata, NextPage } from 'next'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { BreadCrumbs } from '@/components/ui/breadcrumbs'
import { Button } from '@/components/ui/button'
import { baseUrl } from '@/lib/site'
import { GithubIcon, LinkIcon } from 'lucide-react'

interface Props {
  params: { slug: string }
}
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const detail: Project = await fetch(`${process.env.PROJECTS_DETAILS_URL!}/${params.slug}`, {
    headers: { authorization: process.env.GITHUB_TOKEN! },
    next: { revalidate: 60 * 60 },
  }).then((res) => res.json())

  return {
    title: detail.name,
    description: detail.description,
    keywords: detail.topics.join(', '),
    openGraph: {
      title: detail.name,
      description: detail.description,
      images: [
        { url: `/images/projects/${params.slug}.jpg`, alt: detail.name, width: 1200, height: 630 },
      ],
    },
    twitter: {
      title: detail.name,
      description: detail.description,
      images: `/images/projects/${params.slug}.jpg`,
    },
    alternates: {
      canonical: `${baseUrl}/projects/${params.slug}`,
    },
  }
}

const Page: NextPage<Props> = async ({ params }) => {
  const detail: Project = await fetch(`${process.env.PROJECTS_DETAILS_URL!}/${params.slug}`, {
    headers: { authorization: process.env.GITHUB_TOKEN! },
    next: { revalidate: 60 * 60 },
  }).then((res) => res.json())

  return (
    <main className="container min-h-dvh flex-grow space-y-4 pt-4">
      <BreadCrumbs
        items={[
          { label: '~', href: '/#about' },
          { label: 'Projects', href: '/projects' },
          { label: params.slug, href: `/projects/${params.slug}` },
        ]}
      />

      <figure className="aspect-video w-full">
        <Image
          src={`/images/projects/${params.slug}.jpg`}
          alt={params.slug}
          className="rounded-lg object-cover shadow-lg"
          fill
        />
      </figure>

      <div className="flex items-start justify-between">
        <section>
          <article className="prose-h2:m-0">
            <h2 className="capitalize">{detail.name.replace(/-/g, ' ')}</h2>
            <p>{detail.description}</p>
          </article>

          <ul className="flex items-center gap-4">
            {detail.topics
              .filter((topic) => topic !== 'showcase')
              .map((tech) => (
                <li key={tech}>
                  <Badge>{tech}</Badge>{' '}
                </li>
              ))}
          </ul>
        </section>

        <section className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href={detail.html_url} target="_blank" rel="noreferrer">
              <GithubIcon />
            </a>
          </Button>

          {detail.homepage && (
            <Button variant="ghost" size="icon" asChild>
              <a href={detail.homepage} target="_blank" rel="noreferrer">
                <LinkIcon />
              </a>
            </Button>
          )}
        </section>
      </div>
    </main>
  )
}

export default Page
