import { TimelineContent, TimelineItem, TimelintTitle } from '@/components/ui/timeline'
import { info } from '@/lib/data'

const BasicInfo = () => (
  <>
    <TimelineItem>
      <TimelintTitle text="Basic Infomations" />
      <TimelineContent>
        <p>
          {`Name: ${info.name}`} <br />
          {`Date of Birth: ${info.dob}`} <br />
          {`Address: ${info.address}`} <br />
          {`Email: ${info.email}`}
        </p>
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelintTitle text="Education" />
      <TimelineContent>
        {info.education.map((item, index) => (
          <p key={index}>
            <time>{item.date}</time> <br />
            {`School: ${item.school}`} <br />
            {`Major: ${item.major}`}
            {item.gpa && (
              <>
                <br /> GPA: {item.gpa}
              </>
            )}
          </p>
        ))}
      </TimelineContent>
    </TimelineItem>

    <TimelineItem>
      <TimelintTitle text="Work Experience" />
      <TimelineContent>No experience</TimelineContent>
    </TimelineItem>
  </>
)

export default BasicInfo
