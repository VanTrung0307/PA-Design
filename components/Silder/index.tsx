'use client'
import React, { useEffect, useState } from 'react'
import BlogData from '../Blog/blogData'
import { useRouter } from 'next/navigation'
import { Blog } from '@/types/blog'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [filteredBlogData, setFilteredBlogData] = useState<Blog[]>([]); // Xác định kiểu dữ liệu của filteredBlogData

  useEffect(() => {
    // Filter BlogData to include only items with carouselImage
    const filteredData = BlogData.filter((blog) => blog.carouselImage);
    setFilteredBlogData(filteredData);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredBlogData.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [filteredBlogData]);

  // const randomMainImages = BlogData.map((blog) => blog.carouselImage)
  //   .filter(Boolean)
  //   .sort(() => Math.random() - 0.5)
  //   .slice(0, 5)

  const router = useRouter()
  const handleClick = (_id: number) => {
    router.push(`/blog/blog-details?_id=${_id}`);
  };

  const handleChangeClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <article className="relative w-full h-full flex flex-shrink-0 overflow-hidden shadow-2xl">
      {filteredBlogData.map((blog, index) => {
        const { _id, carouselImage } = blog;

        return (
          <figure
            key={index}
            className={`h-[850px] top-0 left-0 w-full transition-transform duration-500 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
            // onClick={() => handleClick(_id)}
          >
            <img
              src={carouselImage}
              alt="Image"
              className="absolute inset-0 z-10 h-full w-full object-cover"
            />
          </figure>
        );
      })}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-99999 cursor-pointer">
        <ul className="flex space-x-2">
          {filteredBlogData.map((_, index) => (
            <li
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-[#000]"
              }`}
              onClick={() => handleChangeClick(index)}
            />
          ))}
        </ul>
      </div>
    </article>
  )
}

export default Slider
