import Blog from '@/components/Blog'
import HappyNewYear from '@/components/HappyNewYear'
import Slider from '@/components/Silder'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PA Design',
}

export default function Home() {
  return (
    <main>
      {/* <Slider />, */}
      <HappyNewYear />,
      {/* <Blog /> */}
    </main>
  )
}
