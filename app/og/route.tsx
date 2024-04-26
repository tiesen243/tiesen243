import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

import { siteConfig } from '@/lib/site'

interface Props {
  params: {
    title?: string
    desc?: string
  }
}

export const runtime = 'edge'

export const GET = async (_: NextRequest, { params }: Props): Promise<ImageResponse> => {
  const dotBg = {
    backgroundImage:
      'radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
    backgroundSize: '100px 100px',
  }

  const title = params.title ?? siteConfig.meta.applicationName ?? ''
  const description = params.desc ?? siteConfig.meta.description

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full p-20 items-center justify-center bg-white" style={dotBg}>
        <div tw="flex justify-between w-full items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://raw.githubusercontent.com/tiesen243/tiesen243/main/public/images/tiesen.png"
            alt="Tiesen"
            tw="w-2/3 aspect-video"
          />
        </div>

        <div tw="flex-1 flex w-full items-end justify-between">
          <div tw="flex flex-col items-start w-3/4 pr-4">
            <h2 tw="text-4xl capitalize">{title}</h2>
            <p tw="text-2xl mt-4">{description}</p>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={title}
            src="https://avatars.githubusercontent.com/u/101703006?v=4"
            tw="rounded-md w-1/4 aspect-square"
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
