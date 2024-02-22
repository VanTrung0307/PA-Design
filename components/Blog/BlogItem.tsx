'use client'
import { Blog } from '@/types/blog'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'

interface BlogItemProps {
  blog: Blog
  _id: number
}

const BlogItem: React.FC<BlogItemProps> = ({ blog, _id }) => {
  const { mainImage, title, city } = blog
  // const { categoryImage, title, city } = blog
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg max-w-full h-[400px]"
      >
        <Link
          href={`/blog/blog-details?_id=${_id}`}
          className="block relative aspect-[368/239] max-w-full h-[400px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image 
            src={mainImage} 
            alt={title} 
            fill 
            className='rounded-lg object-cover'
            loading="lazy"
          />
          {/* {categoryImage &&
            categoryImage.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${title} Image ${index + 1}`}
                fill
                className="rounded-lg object-cover"
              />
            ))} */}
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex rounded-lg items-center justify-center">
              <div className="px-4">
                <h4 className="font-medium text-lg xl:text-itemtitle2 text-white mt-7.5 mb-3.5">
                  {`${title.slice(0, 40)}`}
                </h4>
                <p className="text-white">
                  {city ? `${city.slice(0, 100)}` : ''}
                </p>
              </div>
            </div>
          )}
        </Link>
      </motion.div>
    </>
  )
}

export default BlogItem