import { cn } from '@/lib/utils'
import React from 'react'

interface TimelineProps {
  children?: React.ReactNode
  text?: string
  className?: string
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => (
  <ol className="typography relative border-s border-gray-200 dark:border-gray-700">{children}</ol>
)

export const TimelineItem: React.FC<TimelineProps> = ({ children }) => (
  <li className="mb-10 ms-4">
    <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
    {children}
  </li>
)

export const TimelineTitle: React.FC<TimelineProps> = ({ text, className }) => (
  <h3 className={cn('mb-1 leading-none', className)}>{text}</h3>
)

export const TimelineHeader: React.FC<TimelineProps> = ({ text, className }) => (
  <h3 className={cn('text-lg font-semibold text-gray-900 dark:text-white', className)}>{text}</h3>
)

export const TimelineContent: React.FC<TimelineProps> = ({ children, className }) => (
  <section className={cn('text-base font-normal', className)}>{children}</section>
)
