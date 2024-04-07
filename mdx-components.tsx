import { MDXComponents } from 'mdxts/components'
import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'

import { cn } from '@/lib/utils'

export const useMDXComponents = (): MDXComponents => ({
  h1: (props) => (
    <h1
      {...props}
      className={cn(
        'mb-4 scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl',
        props.className
      )}
    />
  ),
  h2: (props) => (
    <h2
      id={props.children?.toString().toLowerCase().replace(/\s/g, '-')}
      className="scroll-m-20 pb-2 pt-4 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="scroll-m-20 pt-2 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h4: (props) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...props} />,
  p: (props) => <p className="leading-7 [&:not(:first-child)]:my-2" {...props} />,
  blockquote: (props) => <blockquote className="my-4 border-l-2 pl-6 italic" {...props} />,

  ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  ol: (props) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,

  a: (props) => (
    <Link
      {...(props as LinkProps)}
      className={cn('underline-offset-4 hover:underline', props.className)}
    />
  ),

  img: (props) => (
    <Image
      {...(props as ImageProps)}
      width={1920}
      height={1080}
      alt={props.alt || ''}
      className={cn(props.className, 'rounded-lg')}
    />
  ),

  code: (props) => <MDXComponents.code {...props} className={cn('font-mono', props.className)} />,
  pre: (props) => (
    <MDXComponents.pre
      {...props}
      style={{
        width: 'calc(100% + 2rem)',
        margin: '0 -1rem',
      }}
    />
  ),
})
