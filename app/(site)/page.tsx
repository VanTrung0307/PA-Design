import Blog from '@/components/Blog'
import Slider from '@/components/Silder'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PA Design',
}

export default function Home() {
  return (
    <main>
      <Slider />
      <Blog />
    </main>
  )
}
