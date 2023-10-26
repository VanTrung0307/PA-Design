'use client'
import React from 'react'
import BlogItem from './BlogItem'
import BlogData from './blogData'
import ThemeToggler from '../Header/ThemeToggler'
import Link from 'next/link'

const Blog = async () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30 mt-[-120px]">
      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
          {BlogData.map((blog, key) => (
            <BlogItem blog={blog} key={key} _id={blog._id} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-7 lg:mt-0">
          <Link
            href="/blog"
            className="flex items-center justify-center bg-primary hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Blog
