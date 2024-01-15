'use client'

import NextImage, { type ImageProps as NextImageProps } from 'next/image'
import { type ImageProps as NextUIImageProps } from '@nextui-org/react'
import dynamic from 'next/dynamic'

const NextUIImage = dynamic(() => import('@nextui-org/react').then((mod) => mod.Image), {
  ssr: false,
})

type ImageProps = NextImageProps & NextUIImageProps

const Image: React.FC<ImageProps> = (props) => <NextUIImage as={NextImage} {...props} />

export default Image
