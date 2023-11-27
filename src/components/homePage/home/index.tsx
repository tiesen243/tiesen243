import Bio from './bio'
import Transition from './text'

const currentHour = new Date().getHours()
const hi = currentHour < 12 ? 'Ohayo~' : currentHour < 18 ? 'Konnichiwa~' : 'Konbanwa~'
export const HomeSection: React.FC = () => (
  <section id="welcome" className="snap-section typography flex flex-col justify-center">
    <h2>
      {hi}
      <br />
      {"I'm "}
      <Transition />
    </h2>

    <Bio />
  </section>
)
