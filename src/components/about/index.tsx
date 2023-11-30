import { Timeline } from '@/components/ui'
import BasicInfo from './basic'
import Language from './languge'
import Skills from './skills'

const AboutSection: React.FC = () => (
  <section id="about" className="snap-section flex items-center">
    <Timeline>
      <BasicInfo />
      <Skills />
      <Language />
    </Timeline>
  </section>
)

export default AboutSection
