'use client'

import { useEffect, useState } from 'react'
import { config } from '@react-spring/web'

import TextTransition from '@/components/transition'
const TEXTS = ['Tiesen', 'Wibu', 'Fullstack Developer']

const Transition: React.FC = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <span className="ml-2 text-white">
      {'< '}
      <TextTransition inline springConfig={config.gentle} className="text-green-400">
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
      {' />'}
    </span>
  )
}

export default Transition
