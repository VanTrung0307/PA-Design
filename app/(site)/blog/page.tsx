'use client'
import BlogData from '@/components/Blog/blogData'
import BlogItem from '@/components/Blog/BlogItem'
import { Metadata } from 'next'
import React, { ChangeEvent, useState } from 'react'

const metadata: Metadata = {
  title: 'Blog Page',
}

export default function BlogPage() {
  const uniqueCities = Array.from(new Set(BlogData.map((blog) => blog.city)))

  const [selectedCity, setSelectedCity] = useState('')

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }

  const filteredBlogData = selectedCity
    ? BlogData.filter((blog) => blog.city === selectedCity)
    : BlogData
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section>
        <div className="animate_top mx-auto ">
          <div className="relative inline-block ml-32 text-black">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-[100px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={handleCityChange}
            >
              <option value="">Select Location</option>
              {uniqueCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M6 8l4 4 4-4h-8z" />
              </svg>
            </div>
          </div>
          <div className="relative inline-block ml-4 text-black">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-[100px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(event) => {
                const selectElement = event.target
                const options = selectElement.options
                const selectedOption = options[selectElement.selectedIndex]
                for (let i = 0; i < options.length; i++) {
                  options[i].classList.remove('font-semibold', 'text-black')
                }
                selectedOption.classList.add('font-semibold', 'text-black')
              }}
            >
              <option>Select Categories</option>
              <option value="CPN">Company</option>
              <option value="CF">Coffee</option>
              <option value="P">Park</option>
              <option value="M">Mall</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M6 8l4 4 4-4h-8z" />
              </svg>
            </div>
          </div>

          <div className="relative inline-block ml-4 text-black">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-[100px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(event) => {
                const selectElement = event.target
                const options = selectElement.options
                const selectedOption = options[selectElement.selectedIndex]
                for (let i = 0; i < options.length; i++) {
                  options[i].classList.remove('font-semibold', 'text-black')
                }
                selectedOption.classList.add('font-semibold', 'text-black')
              }}
            >
              <option selected>All</option>
              <option value="N">Newest & Lastest</option>
              <option value="O">Oldest</option>
              <option value="P">Popular</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d="M6 8l4 4 4-4h-8z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
            {filteredBlogData.map((post, key) => (
              <BlogItem key={key} blog={post} _id={post._id} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  )
}
BlogPage.metadata = metadata;