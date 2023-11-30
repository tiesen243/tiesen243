import { skills } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

interface BadgeProps {
  tag: string
  type: 'dev' | 'languages'
}

const Badge: React.FC<BadgeProps> = (props) => {
  const tag = skills[props.type]?.find((skill) => skill.title === props.tag)
  if (!tag) return null

  return (
    <a
      href={tag.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-8 w-fit items-center gap-2 rounded border bg-primary px-2 text-black no-underline transition-colors hover:bg-primary/80"
    >
      <Image src={tag.icon} alt={tag.title} width={15} height={10} className="h-auto" />
      {tag.title}
    </a>
  )
}

export default Badge
