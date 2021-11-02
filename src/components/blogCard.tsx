import Link from 'next/link'

const BlogCard = () => (
  <div className="max-w-md mx-auto px-4">
    <div className="relative m-0 shadow-lg flex bg-white">
      <div className="flex-no-shrink">
        <img
          alt=""
          className="w-64 h-64 block mx-auto"
          src="https://source.unsplash.com/WLUHO9A_xik/1600x900"
        />
      </div>
      <div className="flex-1 card-block relative">
        <div className="p-6">
          <h4 className="font-medium text-2xl mb-3">Card title</h4>
          <p className="leading-normal">
            Magni inventore repellat dignissimos eveniet dolore ex sit illo
            adipisci accusamus quos.
          </p>
          <p className="text-sm text-grey block mt-6">Designation title</p>
          <Link passHref href="/blog">
            <a className="-m-4 w-12 h-12 bg-blue-dark flex items-center justify-center text-center no-underline rounded-full text-white hover:bg-blue-darker absolute pin-t pin-r">
              <i className="text-xl fa fa-plus"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default BlogCard
