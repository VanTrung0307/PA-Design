'use client'
import RelatedPost from '@/components/Blog/RelatedPost'
import SharePost from '@/components/Blog/SharePost'
import BlogData from '@/components/Blog/blogData'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const SingleBlogPage: React.FC = () => {

  const searchParams = useSearchParams()
  useEffect(() => {
    const url = `${searchParams}`
    console.log(url)
    console.log(searchParams.get('_id'));
    
    // You can now use the current URL
    // ...
  }, [searchParams])

  const blogPost = BlogData.find((blog) => blog._id.toString() === searchParams.get('_id'))

  
  // const { _id } = useContext(BlogContext)
  // const [blogPost, setBlogPost] = useState<Blog | null>(null)
  // useEffect(() => {
  //   if (_id) {
  //     const fetchedBlogPost = BlogData.find((blog) => blog._id === _id)
  //     setBlogPost(fetchedBlogPost || null)
  //   }
  // }, [_id])

  return (
    <>
      <title>{`Blog Details - Solid`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <RelatedPost />
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

                  <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mt-11 mb-5">
                    {blogPost?.title}
                  </h2>

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
