import { Layout } from '@/components'
import Nav from '@/components/nav'
import BlogCard from '@/components/blogCard'

const Blog = () => {
  return (
    <>
      <Nav />
      <Layout id="blog">
        <div className="font-inter">
          <div className="gradient-bloom text-white p-6 text-center tracking-tightest">
            <h1 className="text-5xl p-6 font-bold">Vignette Transcripts</h1>
            <p className="text-3xl">
              Blog posts from the developers of Vignette.
            </p>
          </div>
        </div>
        <div className="mt-4 ">
          <BlogCard />
        </div>
      </Layout>
    </>
  )
}
export default Blog
