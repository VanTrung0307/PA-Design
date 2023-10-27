'use client'
import RelatedPost from '@/components/Blog/RelatedPost'
import SharePost from '@/components/Blog/SharePost'
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
      <title>{`Blog Details -PA Design`}</title>

      <section className="lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30 mt-[-200px]">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <nav
            className="flex bg-gray-50 text-gray-700 py-3 px-5 rounded-lg dark:bg-gray-800 dark:border-gray-700"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center cursor-pointer">
                <a
                  onClick={handleClick}
                  className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </a>
              </li>
              <li className='cursor-pointer'>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <a className="text-black dark:text-white ml-1 md:ml-2 text-sm font-medium">
                    {blogPost?.title}
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              {currentBlogId && <RelatedPost currentBlogId={currentBlogId} />}
            </div>

            {blogPost && (
              <div className="lg:w-2/3">
                <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">
                  <div className="mb-10 w-full overflow-hidden ">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src={blogPost?.mainImage}
                        alt={blogPost?.title}
                        fill
                        className="object-cover object-center rounded-md"
                      />
                    </div>
                  </div>

                  <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mt-11">
                    {blogPost?.title}
                  </h2>
                  <p className="mb-5 text-black dark:text-white">
                    {blogPost?.city}
                  </p>

                  <ul className="flex flex-wrap gap-x-25 gap-y-5 2xl:gap-7.5 mb-9">
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
                    <div
                      className="flex flex-wrap gap-5"
                      style={{ overflowY: 'auto', maxHeight: '500px' }}
                    >
                      {blogPost.categoryImage &&
                        blogPost.categoryImage.map((image, index) => (
                          <div
                            key={index}
                            className="cursor-pointer"
                            onClick={() => openModal(image)}
                          >
                            <Image
                              className="w-[235px] h-[235px] rounded"
                              src={image}
                              width={245}
                              height={200}
                              alt={`image-${index}`}
                            />
                          </div>
                        ))}
                    </div>
                  </div>

                  {selectedImage && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="absolute inset-0 bg-black opacity-75"></div>
                      <div className="relative z-10">
                        <Image
                          className="rounded w-[650px] h-[650px]"
                          src={selectedImage}
                          width={500}
                          height={300}
                          alt="Popup Image"
                        />
                        <button
                          className="absolute top-0 right-[0px] text-white text-[20px] rounded hover:opacity-80"
                          style={{
                            background: 'red',
                            width: '35px',
                            height: '35px',
                            color: 'white',
                          }}
                          onClick={closeModal}
                        >
                          X
                        </button>
                        <button
                          onClick={handlePreviousImage}
                          className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center z-10"
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
                          className="absolute right-[-50px] top-[300px] translate-y-1/2 w-11 h-11 flex justify-center items-center z-10"
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
                              {blogPost.categoryImage.indexOf(selectedImage) +
                                1}{' '}
                              / {blogPost.categoryImage.length}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* <SharePost /> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleBlogPage
