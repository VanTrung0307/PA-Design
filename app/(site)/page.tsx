import Blog from '@/components/Blog'
import Slider from '@/components/Silder'
import { Metadata } from 'next'
import { BlogProvider } from './BlogContext'

export const metadata: Metadata = {
  title: 'PA Design',
  description: 'This is Home for Solid Pro',
  // other metadata
}

export default function Home() {
  return (
    <main>
      {/* <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact /> */}
      <Slider />
      <BlogProvider>
        <Blog />
      </BlogProvider>
    </main>
  )
}
