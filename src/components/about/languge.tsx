import Badge from '@/components/badge'
import { TimelineContent, TimelineItem, TimelintTitle } from '@/components/ui'
import { skills } from '@/lib/data'

const Language = () => (
  <TimelineItem>
    <TimelintTitle text="Language" />
    <TimelineContent className="flex flex-wrap gap-1">
      {skills.languages.map((skill, idx: number) => (
        <Badge key={idx} tag={skill.title} type="languages" />
      ))}
    </TimelineContent>
  </TimelineItem>
)

export default Language
