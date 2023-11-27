import { NextPage } from 'next'

interface Props {
  params: {
    slug: string
  }
}

const Page: NextPage<Props> = ({ params }) => {
  return <div>{params.slug}</div>
}

export default Page
