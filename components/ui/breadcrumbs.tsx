import { cn } from '@/lib/utils'
import Link from 'next/link'
import { type FC, Fragment } from 'react'

interface Items {
  label: string
  href: string
}

interface BreadCrumbsProps {
  items: Items[]
  className?: string
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ items, className = '' }) => (
  <div className={cn('my-4 flex select-none items-center gap-1 text-xl font-medium', className)}>
    {items.map((item, idx) => (
      <Fragment key={idx}>
        <Link href={item.href} className="capitalize hover:underline">
          {item.label}
        </Link>
        {idx !== items.length - 1 && <span>/</span>}
      </Fragment>
    ))}
  </div>
)
