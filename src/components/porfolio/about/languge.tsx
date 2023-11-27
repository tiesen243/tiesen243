import Badge from '@/components/badge'
import { TimelineContent, TimelineItem, TimelintTitle } from '@/components/ui'

const Language = () => (
  <TimelineItem>
    <TimelintTitle text="Language" />
    <TimelineContent className="flex flex-wrap gap-1">
      <Badge src="/langs/vietnam.svg" alt="Vietnamese" text="Vietnamese" />
      <Badge src="/langs/us.svg" alt="English" text="English" />
    </TimelineContent>
  </TimelineItem>
)

export default Language
