import { Timeline } from '@/components/ui'
import BasicInfo from './basic'
import Skills from './skills'
import Language from './languge'

export const AboutSection: React.FC = () => (
  <section id="about" className="snap-section">
    <Timeline>
      <BasicInfo />
      <Skills />
      <Language />
    </Timeline>
  </section>
)
