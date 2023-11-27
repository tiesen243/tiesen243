import Image from 'next/image'
import React from 'react'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  text: string
}
const Badge: React.FC<BadgeProps> = (props, ref) => {
  return (
    <div
      className="flex h-8 w-fit items-center gap-2 rounded border bg-primary px-2 text-black no-underline transition-colors hover:bg-primary/80"
      ref={ref}
    >
      <Image
        src={props.src}
        alt={props.alt}
        width={20}
        height={10}
        className="max-h-full max-w-full"
      />
      {props.text}
    </div>
  )
}

export default Badge
