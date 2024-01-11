import { contact } from '@/lib/contact'
import { Card, CardBody, Link } from '@nextui-org/react'

const Social: React.FC = () => (
  <ul className="grid grid-cols-3 gap-4">
    {contact.map((item) => (
      <li key={item.label}>
        <Card className="border" as={Link} href={item.href} isExternal isPressable>
          <CardBody className="flex items-center justify-center">
            {item.icon}
            {item.label}
          </CardBody>
        </Card>
      </li>
    ))}
  </ul>
)

export default Social
