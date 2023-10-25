'use client'
import Image from 'next/image'
import { Blog } from '@/types/blog'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface BlogItemProps {
  blog: Blog
  _id: number
}

const BlogItem: React.FC<BlogItemProps> = ({ blog, _id }) => {
  const { mainImage, title, metadata } = blog
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    router.push(`/blog/blog-details?_id=${_id}`)
  }

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
        className="animate_top bg-white dark:bg-blacksection rounded-lg shadow-solid-8 p-4 pb-9"
      >
        <Link
          href={`/blog/blog-details?_id=${_id}`}
          className="block relative aspect-[368/239]"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image src={mainImage} alt={title} fill />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="px-4">
                <h4 className="font-medium text-lg xl:text-itemtitle2 text-white hover:text-primary mt-7.5 mb-3.5">
                  {`${title.slice(0, 40)}...`}
                </h4>
                <p className="text-white">
                  {metadata ? `${metadata.slice(0, 100)}...` : ''}
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
