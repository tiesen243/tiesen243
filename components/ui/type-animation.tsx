'use client'

import { MotionDiv, MotionSpan } from '@/components/motion'
import { animate, useMotionValue, useTransform } from 'framer-motion'
import * as React from 'react'

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'linear',
      times: [0, 0.5, 0.5, 1],
    },
  },
}

interface Props {
  delay: number
  texts: string[]
  className?: string
}

export const TypeAnimation: React.FC<Props> = ({ delay, texts, className = '' }) => {
  const textIndex = useMotionValue(0)
  const baseText = useTransform(textIndex, (latest) => texts[latest] || '')
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const displayText = useTransform(rounded, (latest) => baseText.get().slice(0, latest))
  const updatedThisRound = useMotionValue(true)

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 1,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) updatedThisRound.set(false)
        else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) textIndex.set(0)
          else textIndex.set(textIndex.get() + 1)
          updatedThisRound.set(true)
        }
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span className="space-x-2">
      <MotionSpan className={className}>{displayText}</MotionSpan>

      <MotionDiv
        variants={cursorVariants}
        animate="blinking"
        className="bg-gradient-text inline-block h-10 w-1 translate-y-1 md:h-14"
      />
    </span>
  )
}
