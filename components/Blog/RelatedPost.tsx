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

        <div className="w-full flex flex-wrap justify-center">
          {relatedPosts.map((post, key) => (
            <div
              className="related-post-item inline-block xl:inline-block xl:w-1/3 xl:pr-4 mb-7.5 rounded-lg"
              key={key}
            >
              <div className="relative max-w-full w-100 h-100 group gap-5 rounded-lg">
                {post.mainImage ? (
                  <Link href={`/blog/blog-details?_id=${post._id}`}>
                    <div className="relative max-w-full h-96 sm:h-[400px] mx-auto">
                      <div className="image-container">
                        <Image
                          layout="fill"
                          objectFit="cover"
                          src={post.mainImage}
                          alt="Blog"
                          className="rounded-lg"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute w-full bottom-0 left-0 p-2 bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
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
      <style jsx>{`
                        @media (max-width: 469px) {
                          .image-container {
                            width: 284px;
                            object-fit: cover;
                          }
                        }
                        @media (min-width: 470px) and (max-width: 1280px) {
                          .image-container {
                            width: 400px;
                            object-fit: cover;
                          }
                        }
                        @media (min-width: 638px) and (max-width: 1279px) {
                          .related-post-item {
                            margin-right: 20px;
                          }
                        }
                      `}</style>
    </>
  )
}

export default RelatedPost
