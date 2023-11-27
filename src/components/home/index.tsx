import Bio from './bio'
import CV from './cv'
import Introduction from './introduction'

const Home: React.FC = () => (
  <section id="welcome" className="flex h-[80vh] flex-col justify-center">
    <Introduction />
    <Bio />
    <CV />
  </section>
)

export default Home
