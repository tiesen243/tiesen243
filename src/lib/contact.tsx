import { FacebookIcon, GithubIcon, Linkedin, TwitterIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'

export const contact = [
  {
    label: 'Facebook',
    icon: <FacebookIcon size={24} />,
    href: 'https://www.facebook.com/tiesen243',
  },
  {
    label: 'Github',
    icon: <GithubIcon />,
    href: 'https://www.github.com/tiesen243',
  },
  {
    label: 'Twitter',
    icon: <TwitterIcon />,
    href: 'https://www.twitter.com/tiesen243',
  },
  {
    label: 'Linkedin',
    icon: <Linkedin />,
    href: 'https://www.linkedin.com/in/tiesen243',
  },
  {
    label: 'Youtube',
    icon: <YoutubeIcon />,
    href: 'https://www.youtube.com/@tiesen243',
  },
  {
    label: 'Discord',
    icon: (
      <Image
        src="/discord-svgrepo-com.svg"
        alt="Discord"
        className="dark:invert"
        width={24}
        height={24}
      />
    ),
    href: 'https://discordapp.com/users/651793086367793192',
  },
]

export const email = 'ttien56906@gmail.com'
