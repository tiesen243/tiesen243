'use client'
import { buttonVariants } from '../ui'

const CV: React.FC = () => (
  <a
    className={buttonVariants({ variant: 'default' })}
    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    target="_blank"
    rel="noopener noreferrer"
  >
    Download CV
  </a>
)

export default CV
