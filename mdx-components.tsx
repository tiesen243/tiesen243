import Image, { type ImageProps } from '@/components/ui/image'
import { Link, type LinkProps } from '@nextui-org/react'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: (props) => <Link {...(props as LinkProps)} color="foreground" showAnchorIcon isExternal />,
    img: (props) => <Image {...(props as ImageProps)} width={200} height={100} />,
  }
}
