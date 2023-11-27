import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'
import { imgBaseUrl } from '@/lib/constants'

const Logo: React.FC = () => (
  <section className="flex items-center space-x-2">
    <Avatar>
      <AvatarImage src={imgBaseUrl + '/logo.png'} alt="logo" />
      <AvatarFallback>Logo</AvatarFallback>
    </Avatar>

    <div className="flex flex-col">
      <span className="font-medium">Tiesen</span>
      <a href="https://github.com/tiesen243" target="_blank" rel="noreferrer">
        <small className="text-gray-400 transition-colors hover:text-gray-300">@tiesen243</small>
      </a>
    </div>
  </section>
)

export default Logo
