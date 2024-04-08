'use client'

import * as React from 'react'
import { ArrowUp } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 100) setVisible(true)
      else setVisible(false)
    }

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      variant="ghost"
      size="icon"
      className={cn(
        'fixed bottom-4 right-4 z-50 rounded-full',
        'transition-opacity duration-300',
        visible ? 'opacity-100' : 'opacity-0',
      )}
    >
      <ArrowUp />
    </Button>
  )
}
