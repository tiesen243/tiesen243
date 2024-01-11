import { Button, cn } from '@nextui-org/react'
import Link from 'next/link'

const ButtonGroup: React.FC<{ className?: string }> = ({ className }) => (
  <section className={cn('m-4 grid grid-cols-2 gap-4', className)}>
    <Button
      as={Link}
      href="/#contact-form"
      className="bg-gradient-to-tl from-[#d16ba5] via-[#86a8e7] to-[#5ffbf1] text-xl font-bold"
    >
      Hire me
    </Button>

    <Button
      as={Link}
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      variant="bordered"
      className="from-[#d16ba5] via-[#86a8e7] to-[#5ffbf1] text-xl font-bold"
    >
      Download CV
    </Button>
  </section>
)

export default ButtonGroup
