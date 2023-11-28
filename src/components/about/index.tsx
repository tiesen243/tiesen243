import { Timeline } from '@/components/ui'
import BasicInfo from './basic'
import Skills from './skills'
import Language from './languge'

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
