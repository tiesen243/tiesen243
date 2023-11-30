import Badge from '@/components/badge'
import { TimelineContent, TimelineItem, TimelintTitle } from '@/components/ui'
import { skills } from '@/lib/data'

const Skills: React.FC = () => (
  <TimelineItem>
    <TimelintTitle text="Skills" />
    <TimelineContent className="flex flex-wrap items-center gap-1">
      {skills.dev.map((skill, idx: number) => (
        <Badge key={idx} tag={skill.title} type="dev" />
      ))}
    </TimelineContent>
  </TimelineItem>
)

export default Skills
