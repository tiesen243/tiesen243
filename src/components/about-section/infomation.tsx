import { ActivityIcon, HeartIcon, NotebookIcon, SchoolIcon } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Tab, Tabs } from '@nextui-org/tabs'

const Infomation: React.FC = () => (
  <Tabs variant="underlined" className="overflow-auto">
    {tabsContents.map((tab) => (
      <Tab key={tab.id} title={tab.label}>
        <Card className="border">
          <CardContent className="prose prose-lg prose-zinc dark:prose-invert">
            {tab.content}
          </CardContent>
        </Card>
      </Tab>
    ))}
  </Tabs>
)

export default Infomation

const education = [
  {
    id: '1',
    time: '2022 - present',
    school: 'Industrial University of Ho Chi Minh City',
    major: 'Computer Engineering Technology',
    gpa: null,
  },
]

const className = 'flex items-center font-bold gap-2 [&>svg]:hidden [&>svg]:md:block'
const tabsContents = [
  {
    id: 'skills',
    label: (
      <div className={className}>
        <NotebookIcon /> <span>Skills</span>
      </div>
    ),
    content: (
      <ul>
        {['NextJs', 'NestJs', 'TailwindCss', 'TypeScript'].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  },
  {
    id: 'education',
    label: (
      <div className={className}>
        <SchoolIcon /> <span>Education</span>
      </div>
    ),
    content: (
      <ul className="prose-h3:m-0 prose-p:m-0">
        {education.map((item) => (
          <li key={item.id}>
            <time>{item.time}</time>
            <h3>{item.school}</h3>
            <p>Majors: {item.major}</p>
            {item.gpa && <p>GPA: {item.gpa}</p>}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: 'experience',
    label: (
      <div className={className}>
        <ActivityIcon /> <span>Experience</span>
      </div>
    ),
    content: 'I have no experience yet :))',
  },
  {
    id: 'hobbies',
    label: (
      <div className={className}>
        <HeartIcon /> <span>Hobbies</span>
      </div>
    ),
    content: (
      <ul>
        {['Watching anime', 'Reading manga and light novel', 'Playing some gacha game'].map(
          (item) => (
            <li key={item}>{item}</li>
          )
        )}
      </ul>
    ),
  },
]
