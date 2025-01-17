import ImageWithFallback from './imageWithFallback'

const SponsorCard: React.FC<{
  img: string
  icon?: boolean
  alt?: string
  href?: string
  className?: string
}> = ({ img, alt, className, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div
        className={`mx-auto w-full max-w-xs rounded-xl dark:grayscale dark:hover:grayscale-0 bg-white  border-gray-100 border px-5 py-4 dark:bg-subtle-dark dark:border-primary shadow-lg dark:hover:bg-secondary-dark
         hover:shadow-xl transition duration-300 ease-in-out backdrop-filter backdrop-saturate-125 ${className}`}
      >
        <div className="block relative">
          <ImageWithFallback
            alt={alt}
            src={img}
            height="150"
            width="315"
            layout="responsive"
            className="object-contain"
          />
        </div>
      </div>
    </a>
  )
}

export default SponsorCard
