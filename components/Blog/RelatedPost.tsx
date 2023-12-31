import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlogData from './blogData'

interface RelatedPostProps {
  currentBlogId: string
}

const RelatedPost = ({ currentBlogId }: RelatedPostProps) => {
  // Shuffle the BlogData array to get random posts
  const shuffledPosts = BlogData.sort(() => 0.5 - Math.random())
  const relatedPosts = shuffledPosts
    .filter((post) => post._id.toString() !== currentBlogId)
    .slice(0, 3)

  return (
    <>
      <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9 w-full">
        <h4 className="font-semibold text-4xl text-black dark:text-white mb-7.5 text-center">
          Related Posts
        </h4>

        <div className="w-full">
          {relatedPosts.map((post, key) => (
            <div
              className="inline-block xl:inline-block xl:w-1/3 xl:pr-4 mb-7.5 rounded-lg"
              key={key}
            >
              <div className="relative max-w-full w-100 h-100 group gap-5 rounded-lg">
                {post.mainImage ? (
                  <Link href={`/blog/blog-details?_id=${post._id}`}>
                    <div className="relative gap-5 max-w-full h-[400px]">
                      <Image
                        width={1000}
                        height={1000}
                        src={post.mainImage}
                        alt="Blog"
                        className="object-cover w-full h-full rounded-lg"
                      />
                      <div className="absolute w-full h-full rounded-lg bottom-0 left-0 right-0 p-2 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                        <h5 className="font-medium text-2xl text-white">
                          {post.title.length > 24
                            ? `${post.title.slice(0, 24)}...`
                            : post.title}
                        </h5>
                        <h5 className="font-medium text-sm text-white">
                          {post.city}
                        </h5>
                      </div>
                    </div>
                  </Link>
                ) : (
                  'No image'
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default RelatedPost
