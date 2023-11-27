import Image from 'next/image'
import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  text: string
  href?: string
}
const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const Comp = props.href ? 'a' : ('div' as any)
  return (
    <Comp
      {...(props.href ? { href: props.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex h-8 w-fit items-center gap-2 rounded border bg-primary px-2 text-black no-underline transition-colors hover:bg-primary/80"
      ref={ref}
    >
      <Image
        src={props.src}
        alt={props.alt}
        width={20}
        height={10}
        className="max-h-full max-w-full"
        priority
      />
      {props.text}
    </Comp>
  )
})

Badge.displayName = 'Badge'

export default Badge
