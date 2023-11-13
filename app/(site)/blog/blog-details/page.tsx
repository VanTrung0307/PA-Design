'use client'
import RelatedPost from '@/components/Blog/RelatedPost'
import BlogData from '@/components/Blog/blogData'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const SingleBlogPage: React.FC = () => {
  const searchParams = useSearchParams()
  const currentBlogId = searchParams.get('_id')
  useEffect(() => {
    const url = `${searchParams}`
  }, [searchParams])

  const blogPost = BlogData.find(
    (blog) => blog._id.toString() === currentBlogId,
  )

  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (imageURL: string) => {
    setSelectedImage(imageURL)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const handlePreviousImage = () => {
    if (!blogPost || !blogPost.categoryImage) return

    const currentIndex = blogPost.categoryImage.indexOf(selectedImage)
    const previousIndex =
      (currentIndex - 1 + blogPost.categoryImage.length) %
      blogPost.categoryImage.length
    const previousImage = blogPost.categoryImage[previousIndex]
    setSelectedImage(previousImage)
  }

  const handleNextImage = () => {
    if (!blogPost || !blogPost.categoryImage) return

    const currentIndex = blogPost.categoryImage.indexOf(selectedImage)
    const nextIndex = (currentIndex + 1) % blogPost.categoryImage.length
    const nextImage = blogPost.categoryImage[nextIndex]
    setSelectedImage(nextImage)
  }

  const router = useRouter()
  const handleClick = () => {
    router.push(`/`)
  }

  return (
    <>
      <title>{`Projects Details - PA Design`}</title>

      <section className="xl:pt-10 pb-20 lg:pb-25 xl:pb-30">

        {blogPost && (
          <div className="mb-10 w-full overflow-hidden relative" onContextMenu={(e) => e.preventDefault()}>
            <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                }}
              ></div>
              <Image
                src={blogPost?.mainImage}
                alt={blogPost?.title}
                fill
                className="object-cover object-center"
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>
        )}
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse mb-10 lg:flex-row gap-7.5 xl:gap-12.5">
            {blogPost && (
              <div className="w-full">
                <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                  <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white text-center">
                    {blogPost?.title}
                  </h2>
                  <p className="mb-10 text-black dark:text-white text-center">
                    {blogPost?.city}
                  </p>

                  <ul className="grid grid-cols-1 gap-2 mb-4">
                    <li>
                      <span className="text-black dark:text-white">Area: </span>{' '}
                      {blogPost.area}
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Visual Images:{' '}
                      </span>{' '}
                      {blogPost.visualImages}
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Photographs:{' '}
                      </span>{' '}
                      {blogPost.photographs}
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Location:{' '}
                      </span>{' '}
                      {blogPost.location}
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Lead Architec:{' '}
                      </span>{' '}
                      {blogPost.leadArchitect}
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Design Team:{' '}
                      </span>{' '}
                      {blogPost.designTeam}
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Investor:{' '}
                      </span>{' '}
                      {blogPost.investor}
                    </li>
                  </ul>

                  <div className="blog-details">
                    <div className="flex flex-wrap gap-5">
                      {blogPost.categoryImage &&
                        blogPost.categoryImage.map((image, index) => (
                          <div
                            key={index}
                            className="cursor-pointer relative"
                            onContextMenu={(e) => e.preventDefault()}
                            onClick={() => openModal(image)}
                          >
                            <div
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'none', // Allow clicks to go through the overlay
                              }}
                            ></div>
                            <Image
                              className="w-[400px] h-[400px] rounded"
                              src={image}
                              width={400}
                              height={400}
                              alt={`image-${index}`}
                              draggable={false}
                              onDragStart={(e) => e.preventDefault()}
                            />
                          </div>
                        ))}
                    </div>
                    {selectedImage && (
                      <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="modal-container">
                          <div
                            className="absolute inset-0 bg-black opacity-90"
                            onClick={closeModal}
                            onContextMenu={(e) => e.preventDefault()}
                          ></div>
                          <div className="relative z-10">
                            <div
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'none', // Allow clicks to go through the overlay
                              }}
                            ></div>
                            <Image
                              className="rounded max-w-full h-auto"
                              src={selectedImage}
                              width={500}
                              height={300}
                              alt="Popup Image"
                              draggable={false}
                              onDragStart={(e) => e.preventDefault()}
                            />
                            <button
                              onClick={handlePreviousImage}
                              className="absolute left-[-420px] top-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center z-10"
                            >
                              <svg
                                className="w-20 h-20 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-white hover:text-gray-600 hover:-translate-x-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M15 19l-7-7 7-7"
                                ></path>
                              </svg>
                            </button>

                            <button
                              onClick={handleNextImage}
                              className="absolute right-[-420px] top-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center z-10"
                            >
                              <svg
                                className="w-20 h-20 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-white hover:text-gray-600 hover:translate-x-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M9 5l7 7-7 7"
                                ></path>
                              </svg>
                            </button>

                            <div
                              style={{ background: '#055CD6' }}
                              className="absolute bottom-4 right-4 text-white text-sm rounded-lg w-[70px] text-center"
                            >
                              {blogPost && blogPost.categoryImage && (
                                <span>
                                  {blogPost.categoryImage.indexOf(selectedImage) + 1} /{' '}
                                  {blogPost.categoryImage.length}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="w-full md:w-full">
            {currentBlogId && <RelatedPost currentBlogId={currentBlogId} />}
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleBlogPage
