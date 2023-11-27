import { NextPage } from 'next'

interface Props {
  params: {
    slug: string
  }
}

const Page: NextPage<Props> = ({ params }) => {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  )
}

export default Page
