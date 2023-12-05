import Badge from '@/components/badge'
import { TimelineContent, TimelineItem, TimelineTitle } from '@/components/ui/timeline'
import { skills } from '@/lib/data'

const Language = () => (
  <TimelineItem>
    <TimelineTitle text="Language" />
    <TimelineContent className="flex flex-wrap gap-1">
      {skills.languages.map((skill, idx: number) => (
        <Badge key={idx} tag={skill.title} type="languages" />
      ))}
    </TimelineContent>
  </TimelineItem>
)

export default Language
