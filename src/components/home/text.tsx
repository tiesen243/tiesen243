'use client'

import { useEffect, useState } from 'react'
import { config } from '@react-spring/web'

import TextTransition from '@/components/transition'
const TEXTS = ['Tiesen', 'Wibu', 'Fullstack Developer']

const currentHour = new Date().getHours()
const hi =
  currentHour > 5 && currentHour < 12
    ? 'Ohayou ~'
    : currentHour > 12 && currentHour < 18
      ? 'Konnichiwa ~'
      : 'Konbanwa ~'

const Introduction: React.FC = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000)
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <article className="typography">
      <h2>
        {hi}
        <br />
        {"I'm "}
        <span className="ml-2 text-white">
          {'< '}
          <TextTransition inline springConfig={config.gentle} className="text-green-400">
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
          {' />'}
        </span>
      </h2>
    </article>
  )
}

export default Introduction
