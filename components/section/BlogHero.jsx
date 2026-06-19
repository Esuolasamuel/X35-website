import Image from "next/image";
import ctaarrow from "@/assets/icons/Vector.svg";
import Link from "next/link";

const BlogHero = ({ blog }) => {
  return (
    <section className="max-w-360 mx-auto px-6 sm:px-10 xl:px-30 pt-24 md:pt-32 lg:pt-36 bg-white">

      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-14">

        <div className="w-full lg:w-1/2 xl:w-135 my-auto">

          <p className="text-[#0C0C1CC7]/60 font-body font-normal text-[15px] leading-6 mb-4 lg:mb-8">
            {blog.date} • {blog.readTime}
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold font-heading text-[#0C0C1CC7] leading-tight lg:leading-14 mb-6 lg:mb-12">
            {blog.title}
          </h1>

          <p className="text-base lg:text-[17px] font-normal leading-6 font-body text-[#0C0C1CC7] mb-6 lg:mb-12">
            {blog.excerpt}
          </p>

          <Link
            href={`/blogpost/${blog.slug}`}
            aria-label={`Read more about ${blog.title}`}
            className="uppercase text-yellow-400 font-base leading-6 flex items-center"
          >
            read more
            <Image src={ctaarrow} alt="" width={14} height={12} className="ml-2" />
          </Link>

        </div>

        <div className="relative w-full lg:flex-1 lg:min-w-0 h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[712px]">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            className="rounded-[10px] object-cover"
          />
        </div>

      </div>

    </section>
  );
};

export default BlogHero;
