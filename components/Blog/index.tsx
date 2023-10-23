import React from 'react'
import SectionHeader from '../Common/SectionHeader'
import BlogItem from './BlogItem'
import BlogData from './blogData'
import Slider from '../Silder'

const Blog = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      {/* <!-- Section Title Start --> */}
      {/* <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
            }}
          />
        </div> */}
      <Slider />
      {/* <!-- Section Title End --> */}

      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
