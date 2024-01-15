'use client'

import { siteConfig } from '@/lib/site'
import dynamic from 'next/dynamic'

const Card = dynamic(() => import('@nextui-org/react').then((mod) => mod.Card))
const CardBody = dynamic(() => import('@nextui-org/react').then((mod) => mod.CardBody))

const Social: React.FC = () => (
  <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
    {siteConfig.socials.map((social) => (
      <li key={social.label}>
        <a href={social.href} target="_blank" rel="noopener noreferrer">
          <Card className="w-full border" isPressable>
            <CardBody className="flex-row items-center justify-center gap-2 font-bold">
              {social.icon}
              <span>{social.label}</span>
            </CardBody>
          </Card>
        </a>
      </li>
    ))}
  </ul>
)

export default Social
