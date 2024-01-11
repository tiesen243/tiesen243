import { cn } from '@nextui-org/react'
import React from 'react'

const Typography: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <article
    className={cn(
      'prose prose-zinc dark:prose-invert lg:prose-lg prose-pre:bg-transparent',
      className
    )}
    {...props}
  >
    {children}
  </article>
)

export default Typography

export const Heading: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h1
    className={cn(
      'bg-gradient-to-br from-[#d16ba5] via-[#86a8e7] to-[#5ffbf1] bg-clip-text text-4xl  font-extrabold text-transparent',
      className
    )}
    {...props}
  >
    {children}
  </h1>
)
