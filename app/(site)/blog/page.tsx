import BlogData from '@/components/Blog/blogData'
import BlogItem from '@/components/Blog/BlogItem'
import SectionHeader from '@/components/Common/SectionHeader'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Page - Solid SaaS Boilerplate',
  description: 'This is Blog page for Solid Pro',
  // other metadata
}

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="animate_top text-center mx-auto">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
            }}
          />
        </div>

        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} _id={post._id} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  )
}

export default BlogPage
