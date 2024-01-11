'use client'

import { Card, CardBody, Tab, Tabs } from '@nextui-org/react'
import { ActivityIcon, HeartIcon, NotebookIcon, SchoolIcon } from 'lucide-react'

const education = [
  {
    id: '1',
    time: '2022 - present',
    school: 'Industrial University of Ho Chi Minh City',
    major: 'Computer Engineering Technology',
    gpa: null,
  },
]

let tabsContents = [
  {
    id: 'skills',
    label: (
      <div className="flex items-center gap-1 font-bold">
        <NotebookIcon size={16} /> <span>Skills</span>
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
      <div className="flex items-center gap-1 font-bold">
        <SchoolIcon size={16} /> <span>Education</span>{' '}
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
      <div className="flex items-center gap-1 font-bold">
        <ActivityIcon size={16} /> <span>Experience</span>
      </div>
    ),
    content: 'I have no experience yet :))',
  },
  {
    id: 'hobbies',
    label: (
      <div className="flex items-center gap-1 font-bold">
        <HeartIcon size={16} /> <span>Hobbies</span>
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

const TabsSection: React.FC = () => (
  <Tabs aria-label="Dynamic tabs" items={tabsContents} variant="underlined">
    {(item) => (
      <Tab key={item.id} title={item.label}>
        <Card className="border prose-ul:m-0">
          <CardBody>{item.content}</CardBody>
        </Card>
      </Tab>
    )}
  </Tabs>
)

export default TabsSection
