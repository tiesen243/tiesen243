import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'

import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const customMdxComponents: MDXComponents = {
  a: (props) => <Link {...(props as LinkProps)} />,
  img: (props) => (
    <Image {...(props as ImageProps)} alt={props.alt ?? ''} width={1920} height={1080} />
  ),
  button: (props) => <Button {...(props as ButtonProps)} />,
  h2: (props) => (
    <h2 {...props} id={props.children?.toString().toLowerCase().replace(/\s/g, '-')} />
  ),
  pre: (props) => <pre {...props} className="p-0" />,
  code: (props) => <code {...props} className={cn(props.className, 'font-mono')} />,
}

export default customMdxComponents
