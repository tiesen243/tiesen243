import { Image, ImageProps, Link, LinkProps } from '@nextui-org/react'
import { MDXComponents } from 'mdx/types'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

const customMdxComponents: MDXComponents = {
  a: (props) => <Link {...(props as LinkProps)} isExternal />,
  img: (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image as={NextImage} {...(props as ImageProps & NextImageProps)} width={1920} height={1080} />
  ),
}

export default customMdxComponents
