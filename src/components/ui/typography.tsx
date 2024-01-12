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
