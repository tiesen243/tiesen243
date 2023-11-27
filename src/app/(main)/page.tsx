import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('@/components/home'), { ssr: false })

const Page: NextPage = () => <Home />

export default Page
