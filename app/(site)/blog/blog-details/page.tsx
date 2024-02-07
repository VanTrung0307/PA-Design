'use client'
import RelatedPost from '@/components/Blog/RelatedPost'
import BlogData from '@/components/Blog/blogData'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function SingleBlogPage() {
  const searchParams = useSearchParams()
  const currentBlogId = searchParams.get('_id')
  const [selectedImageSize, setSelectedImageSize] = useState({ width: 800, height: 800 }); // Kích thước mặc định

  const calculateImageSize = (selectedImage: string) => {
    const img = document.createElement('img');
    img.src = selectedImage;
    
    img.onload = () => {
      const aspectRatio = img.width / img.height;
  
      let maxWidth = 800;
      let maxHeight = 800;
  
      if (aspectRatio > 1) { // ảnh nằm ngang
        maxHeight = 800;
        maxWidth = 1000;
      } else if (aspectRatio < 1) { // ảnh nằm dọc
        maxWidth = 500;
        maxHeight = 1000;
      } else { // ảnh vuông
        maxWidth = 800;
        maxHeight = 800;
      }
  
      setSelectedImageSize({ width: maxWidth, height: maxHeight });
    };
  };

  const blogPost = BlogData.find(
    (blog) => blog._id.toString() === currentBlogId,
  )

  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  if (selectedImage) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

  const openModal = (imageURL: string) => {
    setSelectedImage(imageURL)
    calculateImageSize(imageURL)
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

  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.1);
  };

  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 0.1);
  };

  return (
    <>
      <title>{`Projects Details - PA Design`}</title>

      <section className="xl:pt-0 pb-20 lg:pb-25 xl:pb-30">

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
                  <p className="mb-10 text-black dark:text-white text-center">
                    {blogPost.description}
                  </p>

                  <ul className="grid grid-cols-1 gap-2 mb-4">
                    <li>
                      <span className="text-black dark:text-white">Area: </span>{' '}
                      {blogPost.area}
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Location:{' '}
                      </span>{' '}
                      {blogPost.location}
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Lead Architect:{' '}
                      </span>{' '}
                      {blogPost.leadArchitect}
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Design Team:{' '}
                      </span>{' '}
                      {blogPost.designTeam}
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
                                pointerEvents: 'none',
                              }}
                            ></div>
                            <Image
                              className="w-[400px] h-[400px] rounded object-cover"
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
  <div className="fixed inset-0 flex items-center justify-center z-99999">
    <div className="modal-container">
      <div
        className="absolute inset-0 bg-black opacity-90"
        onClick={closeModal}
        onContextMenu={(e) => e.preventDefault()}
      ></div>
      <div className="relative z-10">
        <Image
          className="rounded max-w-full max-h-[700px] min-h-[700px]"
          src={selectedImage}
          width={selectedImageSize.width}
          height={selectedImageSize.height}
          alt="Popup Image"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        />
                            <button
                              onClick={handleZoomIn}
                              className="fixed top-8 right-[70px] z-20 space-x-2 w-10 h-10 flex justify-center items-center hover:bg-primary rounded"
                              title="Zoom In"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-zoom-in text-white" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                                <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5" />
                              </svg>
                            </button>
                            <button
                              onClick={handleZoomOut}
                              className="fixed top-8 right-[130px] z-20 space-x-2 w-10 h-10 flex justify-center items-center hover:bg-primary rounded"
                              title="Zoom Out"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-zoom-out text-white" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0" />
                                <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                                <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                              </svg>
                            </button>
                            <button
                              onClick={handlePreviousImage}
                              className="fixed left-[20px] top-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center z-10"
                              title="Previous"
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
                              className="fixed right-[20px] top-1/2 -translate-y-1/2 w-8 h-8 flex justify-center items-center z-10"
                              title="Next"
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
