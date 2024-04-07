import Image, { ImageProps } from 'next/image'

import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { MDXComponents } from 'mdx/types'

export const mdxComponents = {
  h1: (props) => <Typography variant="h1" {...props} />,
  h2: (props) => (
    <Typography
      variant="h2"
      id={props.children?.toString().toLowerCase().replace(/\s/g, '-')}
      {...props}
    />
  ),
  h3: (props) => <Typography variant="h3" {...props} />,
  h4: (props) => <Typography variant="h4" {...props} />,
  p: (props) => <Typography variant="p" {...props} />,

  blockquote: (props) => <Typography variant="blockquote" {...(props as any)} />,
  ul: (props) => <Typography variant="ul" {...(props as any)} />,
  ol: (props) => <Typography variant="ol" {...(props as any)} />,

  a: (props) => <Typography variant="link" {...(props as any)} />,
  img: (props) => (
    <Image
      {...(props as ImageProps)}
      width={1920}
      height={1080}
      alt={props.alt || ''}
      className={cn(props.className, 'rounded-lg')}
    />
  ),

  pre: (props) => (
    <pre {...props} className={cn('overflow-x-auto rounded-lg p-4 font-mono', props.className)} />
  ),
} satisfies MDXComponents
