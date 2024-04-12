import { siteConfig } from '@/lib/site'
import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

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

  const title = params.title ?? siteConfig.metadata.title.default
  const description = params.desc ?? siteConfig.metadata.description

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full p-20 items-center justify-center bg-white" style={dotBg}>
        <div tw="flex justify-between w-full items-center">
          <h1 tw="text-8xl ml-4">Tiesen</h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            id="Layer_1"
            x={0}
            y={0}
            viewBox="0 0 800.25 924.05"
            style={{
              width: '10rem',
              height: '10rem',
            }}
          >
            <path
              d="m202.5 331.76 28.37-16.38v-76.26l-28.37 16.37zM334.07 38.33l33 19.03v809.32l-33 19.03 66.05 38.19 155.37-89.69v-38.14l-33.05-19.09-89.26 51.52V495.08h98.15l24.16-13.97v-38.18l-24.16-13.96h-98.15V95.54l89.26 51.52 33.05-19.09V89.84L400.12.14zM775.91 495.08l24.21-13.97v-250l-155.31-89.7-33.05 19.09v108.74l33 19.04 33.05-19.04v-32.48l56.26 32.48v159.73h-98.05l-24.26 14.01v320.57l33.05 19.08 155.31-89.69V584.2l-33-19.09-33.05 19.08v70.62l-56.26 32.47v-192.2z"
              className="st1"
            />
            <path
              d="m.12 269.24 33.06 19.04 89.26-51.52v64.94l-.11.06v72.04l.11 4.14v385.6l66.06 38.19V339.89l.02-.02v-72.06l-.02-4.11v-65.07l122.31-70.61V51.71L.12 231.11z"
              className="st1"
            />
            <path
              d="m244.85 231.06-.09 603.15 66.05 38.13V231.11l-33.05-19.09zM.12 692.94l33.06 19.09 33-19.04V410.46l42.18-24.34v-76.27L.12 372.32z"
              className="st1"
            />
          </svg>
        </div>

        <div tw="flex-1 flex w-full items-end justify-between">
          <div tw="flex flex-col items-start w-3/4 pr-4">
            <h2 tw="text-4xl">{title}</h2>
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
