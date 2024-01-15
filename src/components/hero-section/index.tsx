import Hello from './hello'
import Skills from './skills'

const HeroSection: React.FC = () => (
  <section
    id="hero"
    className="flex min-h-dvh flex-col items-center justify-center gap-4 pt-16 md:pt-0"
  >
    <Hello />
    <Skills />
  </section>
)

export default HeroSection
