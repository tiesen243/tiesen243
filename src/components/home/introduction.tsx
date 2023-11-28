'use client'

import { TypeAnimation } from 'react-type-animation'

const Introduction: React.FC = () => (
  <article className="typography">
    <h2>
      {hi}
      <br /> <br /> I&#39;m
      <pre className="ml-2 inline text-green-500">
        <code>
          {'< '}
          <TypeAnimation sequence={sequence} speed={30} repeat={Infinity} />
          {' />'}
        </code>
      </pre>
    </h2>
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
  'Fullstack Developer',
  1000,
]
