import { Typography } from '@/components/ui/typography'

export const Intro: React.FC = () => (
  <article className="flex flex-col items-center gap-4">
    <Typography className="text-4xl font-medium">Hello, I&apos;m</Typography>
    <Typography
      variant="h1"
      className="bg-gradient-yuki bg-clip-text px-2 font-mono text-transparent type-yuki"
    />

    <Typography>
      I&apos;m a developer. I build things for the web. I&apos;m passionate about open-source and I
      love to learn new
    </Typography>
  </article>
)
