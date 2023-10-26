'use client'
import RelatedPost from '@/components/Blog/RelatedPost'
import SharePost from '@/components/Blog/SharePost'
import BlogData from '@/components/Blog/blogData'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const SingleBlogPage: React.FC = () => {
  const searchParams = useSearchParams()
  const currentBlogId = searchParams.get('_id');
  useEffect(() => {
    const url = `${searchParams}`
  }, [searchParams])

  const blogPost = BlogData.find(
    (blog) => blog._id.toString() === currentBlogId
  );

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
              <li className="inline-flex items-center">
                <a
                  href="/"
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
              <li>
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
                  <a
                    href="#"
                    className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium dark:text-gray-400 dark:hover:text-white"
                  >
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
                  <p className='mb-5'>{blogPost?.metadata}</p>

                  <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
                    <li>
                      <span className="text-black dark:text-white">
                        Author:{' '}
                      </span>{' '}
                      Jhon Doe
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Published On: July 30, 2023
                      </span>{' '}
                    </li>
                    <li>
                      <span className="text-black dark:text-white">
                        Category:
                      </span>
                      Events
                    </li>
                  </ul>

                  <div className="blog-details">
                    <p>{blogPost?.metadata}</p>

                    <p>
                      Aenean augue ex, condimentum vel metus vitae, aliquam
                      porta elit. Quisque non metus ac orci mollis posuere.
                      Mauris vel ipsum a diam interdum ultricies sed vitae
                      neque. Nulla porttitor quam vitae pulvinar placerat. Nulla
                      fringilla elit sit amet justo feugiat sodales. Morbi
                      eleifend, enim non eleifend laoreet, odio libero lobortis
                      lectus, non porttitor sem urna sit amet metus. In
                      sollicitudin quam est, pellentesque consectetur felis
                      fermentum vitae.
                    </p>

                    <div className="flex flex-wrap gap-5">
                      <Image
                        src={'/images/blog/blog-01.png'}
                        width={350}
                        height={200}
                        alt="image"
                      />
                      <Image
                        src={'/images/blog/blog-02.png'}
                        width={350}
                        height={200}
                        alt="image"
                      />
                    </div>

                    <h3 className="pt-8">
                      Nunc elementum elit viverra, tempus quam non
                    </h3>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc quis nibh lorem. Duis sed odio lorem. In a efficitur
                      leo. Ut venenatis rhoncus quam sed condimentum. Curabitur
                      vel turpis in dolor volutpat imperdiet in ut mi. Integer
                      non volutpat nulla. Nunc elementum elit viverra, tempus
                      quam non, interdum ipsum.
                    </p>
                  </div>

                  <SharePost />
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
