'use client'

import { TypeAnimation } from 'react-type-animation'

const Introduction: React.FC = () => (
  <article className="typography prose-h1:text-3xl prose-h1:font-bold prose-pre:bg-background">
    <h1>
      {hi}
      <br /> I&#39;m
      <pre className="ml-4 inline p-0 text-green-500">
        <code>
          {'< '}
          <TypeAnimation sequence={sequence} speed={20} repeat={Infinity} />
          {' />'}
        </code>
      </pre>
    </h1>
  </article>
)

export default Introduction

const currentHour = Number(
  new Date().toLocaleString('vi', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: 'numeric',
  })
)

const hi =
  currentHour > 5 && currentHour < 12
    ? 'Ohayou~'
    : currentHour > 12 && currentHour < 18
      ? 'Konnichiwa~'
      : 'Konbanwa~'

const sequence = [
  'Tiesen',
  1000,
  'Wibu',
  1000,
  'Frontend Developer',
  1000,
  'Backend Developer',
  1000,
]
