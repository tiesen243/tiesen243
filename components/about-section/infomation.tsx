import { NotebookIcon, SchoolIcon, ActivityIcon, HeartIcon } from 'lucide-react'

import * as card from '@/components/ui/card'
import * as tabs from '@/components/ui/tabs'

const Infomation: React.FC = () => (
  <tabs.Tabs defaultValue={tabsContents[0].id} className="overflow-auto">
    {tabsContents.map((tab) => (
      <tabs.TabsList key={tab.id} className="bg-transparent">
        <tabs.TabsTrigger
          value={tab.id}
          className="rounded-none border-b-2 border-primary/0 transition-all data-[state=active]:border-primary"
        >
          {tab.label}
        </tabs.TabsTrigger>
      </tabs.TabsList>
    ))}

    {tabsContents.map((tab) => (
      <tabs.TabsContent key={tab.id} value={tab.id}>
        <card.Card>
          <card.CardHeader className="prose prose-zinc w-full max-w-full dark:prose-invert md:prose-lg prose-li:text-foreground">
            {tab.content}
          </card.CardHeader>
        </card.Card>
      </tabs.TabsContent>
    ))}
  </tabs.Tabs>
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

const className = 'flex items-center font-bold gap-1 [&>svg]:size-4 [&>svg]:md:size-6'
const tabsContents = [
  {
    id: 'skills',
    label: (
      <div className={className}>
        <NotebookIcon /> <span>Skills</span>
      </div>
    ),
    content: (
      <ul className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-6">
        {[
          'TypeScript',
          'Next.js',
          'TailwindCSS',
          'ElysiaJS',
          'tRPC',
          'Prisma',
          'Python',
          'Numpy',
          'Pandas',
          'Matplotlib',
          'C++',
          'Arduino',
        ].map((item) => (
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
            <time className="text-muted-foreground">{item.time}</time>
            <h3>{item.school}</h3>
            <p className="text-muted-foreground">Majors: {item.major}</p>
            {item.gpa && <p className="text-muted-foreground">GPA: {item.gpa}</p>}
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
