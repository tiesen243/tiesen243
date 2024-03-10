import Link from 'next/link'

import { MotionLink, MotionSpan, MotionSvg } from '@/components/motion'

const ViewMore = () => (
  <div className="my-4 flex flex-col items-start justify-between gap-4 text-xl font-bold md:flex-row md:items-center md:gap-20">
    {['projects', 'blogs'].map((link) => (
      <Link key={link} href={`/${link}`} passHref legacyBehavior>
        <MotionLink
          className="inline-flex w-full items-center justify-between gap-2"
          initial="initial"
          animate="initial"
          whileHover="animate"
          whileTap="animate"
        >
          View my {link}
          <span className="flex-grow">
            <MotionSpan variants={line} className="absolute inset-0 h-[1px] bg-ring" />
          </span>
          <MotionSpan variants={arrow} transition={{ repeat: Infinity }}>
            <MotionSvg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevrons-right"
              variants={icon}
            >
              <path d="m6 17 5-5-5-5" />
              <path d="m13 17 5-5-5-5" />
            </MotionSvg>
          </MotionSpan>
        </MotionLink>
      </Link>
    ))}
  </div>
)

export default ViewMore

const icon = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
}

const arrow = {
  initial: {
    translateX: 0,
  },
  animate: {
    translateX: [0, -5, 0],
  },
}

const line = {
  initial: {
    width: 0,
  },
  animate: {
    width: '100%',
  },
}
