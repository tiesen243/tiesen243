import Link from 'next/link'
import { type FC, Fragment } from 'react'

interface Items {
  label: string
  href: string
}

export const BreadCrumbs: FC<{ items: Items[] }> = ({ items }) => (
  <article className="mb-4 select-none prose-a:no-underline prose-a:underline-offset-4 hover:prose-a:underline prose-blockquote:m-0">
    <div className="flex items-center gap-1">
      {items.map((item, idx) => (
        <Fragment key={idx}>
          <Link href={item.href}>{item.label}</Link>
          {idx !== items.length - 1 && <span>/</span>}
        </Fragment>
      ))}
    </div>
  </article>
)
