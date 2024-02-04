import { siteConfig } from '@/lib/site'
import { Card, CardHeader } from '../ui/card'

const Social: React.FC = () => (
  <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
    {siteConfig.socials.map((social) => (
      <li key={social.label}>
        <a href={social.href} target="_blank" rel="noopener noreferrer">
          <Card className="transition-colors hover:bg-secondary">
            <CardHeader className="flex-row items-center justify-center gap-2 font-bold">
              <social.icon />
              <span>{social.label}</span>
            </CardHeader>
          </Card>
        </a>
      </li>
    ))}
  </ul>
)

export default Social
