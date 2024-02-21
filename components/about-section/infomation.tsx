import { ActivityIcon, HeartIcon, NotebookIcon, SchoolIcon } from 'lucide-react'

import { Card, CardHeader } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Infomation: React.FC = () => (
  <Tabs defaultValue={tabsContents[0].id} className="overflow-auto">
    {tabsContents.map((tab) => (
      <TabsList key={tab.id} className="bg-transparent">
        <TabsTrigger
          value={tab.id}
          className="rounded-none border-primary data-[state=active]:border-b"
        >
          {tab.label}
        </TabsTrigger>
      </TabsList>
    ))}

    {tabsContents.map((tab) => (
      <TabsContent key={tab.id} value={tab.id}>
        <Card>
          <CardHeader className="prose prose-lg prose-zinc dark:prose-invert">
            {tab.content}
          </CardHeader>
        </Card>
      </TabsContent>
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
        {['NextJs', 'Prisma', 'TailwindCSS', 'TypeScript'].map((item) => (
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
    content: (
      <ul>
        <li>I have no experience yet :))</li>
      </ul>
    ),
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
