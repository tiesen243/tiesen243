import Image from 'next/image'
import Link from 'next/link'

interface BadgeProps {
  src: string
  alt: string
  text: string
  href: string
}
const Badge: React.FC<BadgeProps> = (props) => (
  <Link
    href={props.href}
    className="flex h-8 w-fit items-center gap-2 rounded border bg-primary px-2 text-black no-underline transition-colors hover:bg-primary/80"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src={props.src} alt={props.alt} width={20} height={10} priority />
    {props.text}
  </Link>
)

export default Badge
