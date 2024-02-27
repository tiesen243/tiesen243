import Link from 'next/link'
import { ChevronsRight } from 'lucide-react'

import { MotionLink, MotionSpan } from '@/components/motion'

const ViewMore = () => (
  <div className="flex flex-col items-start justify-between text-xl font-bold md:flex-row md:items-center md:gap-20">
    {['projects', 'blogs'].map((link) => (
      <Link href={`/${link}`} key={link} passHref legacyBehavior>
        <MotionLink
          className="group inline-flex w-full items-center justify-between gap-2"
          initial="initial"
          animate="initial"
          whileHover="animate"
        >
          View my {link}
          <MotionSpan variants={line} className="h-max border-b border-primary" />
          <MotionSpan variants={arrow}>
            <ChevronsRight />
          </MotionSpan>
        </MotionLink>
      </Link>
    ))}
  </div>
)

export default ViewMore

const arrow = {
  initial: {
    translateX: -5,
    opacity: 0,
  },
  animate: {
    translateX: [0, -5, 0],
    opacity: 1,
  },
}

const line = {
  initial: {
    flexGrow: 0,
  },
  animate: {
    flexGrow: 1,
  },
}
