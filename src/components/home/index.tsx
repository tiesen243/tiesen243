import Bio from './bio'
import CV from './cv'
import Introduction from './introduction'

const HomeSection: React.FC = () => (
  <section id="welcome" className="snap-section flex flex-col justify-center">
    <Introduction />
    <Bio />
    <CV />
  </section>
)

export default HomeSection
