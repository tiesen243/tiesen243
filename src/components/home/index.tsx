import dynamic from 'next/dynamic'
import Bio from './bio'

const Transition = dynamic(() => import('./text'), { ssr: false })

const currentHour = new Date().getHours()
const hi = currentHour < 12 ? 'Ohayo~' : currentHour < 18 ? 'Konnichiwa~' : 'Konbanwa~'

export const Home: React.FC = () => (
  <section id="welcome" className="typography flex h-[80vh] flex-col justify-center">
    <h2>
      {hi}
      <br />
      {"I'm "}
      <Transition />
    </h2>

    <Bio />
  </section>
)
