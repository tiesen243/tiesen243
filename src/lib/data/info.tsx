import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from 'lucide-react'

export const info = {
  name: 'Tran Tien',
  age: new Date().getFullYear() - 2004,
  dob: 'June 22, 2004',
  email: 'ttien5606@gmail.com',
  address: 'Ho Chi Minh City, Vietnam',
  education: [
    {
      date: '2022 - Present',
      school: 'Industrial University of Ho Chi Minh City',
      major: 'Computer Technology Engineering',
      gpa: null,
    },
  ],
}

export const socials = [
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/tiesen243',
    icon: <FacebookIcon />,
  },
  {
    title: 'Twitter',
    url: 'https://www.twitter.com/tiesen243',
    icon: <TwitterIcon />,
  },
  {
    title: 'Github',
    url: 'https://www.github.com/tiesen243',
    icon: <GithubIcon />,
  },
  {
    title: 'Linkedin',
    url: 'https://www.linkedin.com/in/tiesen243',
    icon: <LinkedinIcon />,
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/@tiesen243',
    icon: <YoutubeIcon />,
  },
]
