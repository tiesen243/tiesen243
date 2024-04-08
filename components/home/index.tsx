import { ButtonGroup } from './button-group'
import { Intro } from './intro'

export const Home: React.FC = () => (
  <section id="home" className="grid min-h-dvh place-items-center">
    <div className="max-w-screen-md">
      <Intro />
      <ButtonGroup />
    </div>
  </section>
)
