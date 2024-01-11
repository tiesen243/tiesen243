import { Image as NextUiImage, ImageProps as NextUiImageProps } from '@nextui-org/react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

export type ImageProps = NextUiImageProps & NextImageProps

const Image: React.FC<ImageProps> = (props) => <NextUiImage as={NextImage} {...props} />

export default Image
