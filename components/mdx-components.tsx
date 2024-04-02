import { cn } from '@/lib/utils'
import { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'

interface PreProps extends React.HTMLProps<HTMLPreElement> {
  filename?: string
}

export const MdxComponents = (components: MDXComponents): MDXComponents => ({
  ...components,
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
      className="scroll-m-20 pb-2 pt-1 text-3xl font-semibold tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props) => <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...props} />,
  h4: (props) => <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...props} />,
  p: (props) => <p className="leading-7 [&:not(:first-child)]:my-2" {...props} />,
  blockquote: (props) => <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />,
  ul: (props) => <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
  ol: (props) => <ol className="my-6 ml-6 list-decimal [&>li]:mt-2" {...props} />,
  pre: (props: PreProps) => (
    <pre {...props} className={cn(props.className)}>
      <p>{props.filename}</p>
      {props.children}
    </pre>
  ),
  code: (props) => <code {...props} className={cn(props.className, 'font-mono')} />,
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
  table: (props) => (
    <div className="relative w-full overflow-auto">
      <table className="w-full caption-bottom text-sm" {...props} />
    </div>
  ),
  thead: (props) => <thead className="[&_tr]:border-b" {...props} />,
  tbody: (props) => <tbody className="[&_tr:last-child]:border-0" {...props} />,
  tfoot: (props) => (
    <tfoot className="border-t bg-muted/50 font-medium [&>tr]:last:border-b-0" {...props} />
  ),
  tr: (props) => (
    <tr
      className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
      {...props}
    />
  ),
  th: (props) => (
    <th
      className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0"
      {...props}
    />
  ),
  td: (props) => <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0" {...props} />,
  caption: (props) => <caption className="mt-4 text-sm text-muted-foreground" {...props} />,
})
