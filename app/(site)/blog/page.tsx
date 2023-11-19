'use client'
import BlogData from '@/components/Blog/blogData'
import BlogItem from '@/components/Blog/BlogItem'
import { Metadata } from 'next'
import React, { ChangeEvent, useRef, useState } from 'react'

const metadata: Metadata = {
  title: 'Blog Page',
}

export default function BlogPage() {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedCreatedDate, setSelectedCreatedDate] = useState('')

  const uniqueCities = Array.from(new Set(BlogData.map((blog) => blog.city)))
  const uniqueCategories = Array.from(new Set(BlogData.map((blog) => blog.categories)))

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value)
  }
  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value)
  }
  const handleCreateDateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCreatedDate(event.target.value)
  }

  const selectedCityRef = useRef<HTMLSelectElement>(null);
  const selectedCategoryRef = useRef<HTMLSelectElement>(null);
  const selectedCreatedDateRef = useRef<HTMLSelectElement>(null);

  const filteredBlogData = BlogData.filter((blog) => {
    if (
      (selectedCity && blog.city !== selectedCity) ||
      (selectedCategory && blog.categories !== selectedCategory) ||
      (selectedCreatedDate === "N" && !blog.create_at) ||
      (selectedCreatedDate === "O" && !blog.create_at)
    ) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (
      selectedCreatedDate === "N" &&
      a.create_at &&
      b.create_at
    ) {
      const dateA = new Date(a.create_at);
      const dateB = new Date(b.create_at);

      if (dateB.getFullYear() !== dateA.getFullYear()) {
        return dateB.getFullYear() - dateA.getFullYear();
      } else if (dateB.getMonth() !== dateA.getMonth()) {
        return dateB.getMonth() - dateA.getMonth();
      } else {
        return dateB.getDate() - dateA.getDate();
      }
    } else if (
      selectedCreatedDate === "O" &&
      a.create_at &&
      b.create_at
    ) {
      const dateA = new Date(a.create_at);
      const dateB = new Date(b.create_at);

      if (dateA.getFullYear() !== dateB.getFullYear()) {
        return dateA.getFullYear() - dateB.getFullYear();
      } else if (dateA.getMonth() !== dateB.getMonth()) {
        return dateA.getMonth() - dateB.getMonth();
      } else {
        return dateA.getDate() - dateB.getDate();
      }
    }
    return 0;
  });

  const handleReset = () => {
    setSelectedCity('');
    setSelectedCategory('');
    setSelectedCreatedDate('');

    if (selectedCityRef.current) {
      selectedCityRef.current.selectedIndex = 0;
    }
    if (selectedCategoryRef.current) {
      selectedCategoryRef.current.selectedIndex = 0;
    }
    if (selectedCreatedDateRef.current) {
      selectedCreatedDateRef.current.selectedIndex = 0;
    }
  };

  return (
    <>
      <title>{`Projects - PA Design`}</title>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
          <div className='mb-10'>
            <div className="relative inline-block ml-4 text-black cursor-pointer">
              <select
                className="block cursor-pointer appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-[100px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleCityChange}
                ref={selectedCityRef}
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
            <div className="relative inline-block ml-4 text-black cursor-pointer">
              <select
                className="block cursor-pointer appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-[100px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleCategoryChange}
                ref={selectedCategoryRef}
              >
                <option>Select Categories</option>
                {uniqueCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
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

            <div className="relative inline-block ml-4 text-black cursor-pointer">
              <select
                className="block appearance-none cursor-pointer w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-[100px] leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                onChange={handleCreateDateChange}
                ref={selectedCreatedDateRef}
              >
                <option selected>All</option>
                <option value="N">Newest & Lastest</option>
                <option value="O">Oldest</option>
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

            <div className="relative inline-block ml-4 cursor-pointer">
              <button
                className="cursor-pointer px-4 py-2 bg-blue-500 text-black dark:text-white rounded hover:bg-blue-600"
                onClick={handleReset}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
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
BlogPage.metadata = metadata
