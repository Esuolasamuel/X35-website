import Image from "next/image";
import ctaarrow from "@/assets/icons/Vector.svg";
import Link from "next/link";

const BlogHero = ({ blog }) => {
  return (
    <section className="max-w-360 mx-auto xl:px-30 mt-36 bg-white">

      <div className="flex justify-between gap-14 max-lg:flex-col">

        <div className="w-135 my-auto">

          <p className="text-[#0C0C1CC7]/60 font-body font-normal text-[15px] leading-6 mb-8">
            {blog.date} • {blog.readTime}
          </p>

          <h1 className="text-[56px] max-w-135 font-bold font-heading text-[#0C0C1CC7] leading-14 mb-12">
            {blog.title}
          </h1>

          <p className="text-[17px] max-w-132 font-normal leading-6 font-body text-[#0C0C1CC7] mb-12">
            {blog.excerpt}
          </p>

          <Link href={`/blogpost/${blog.slug}`} className="uppercase text-yellow-400 font-base leading-6 flex items-center">
            read more
            <Image src={ctaarrow} alt="read more arrow" width={14} height={12} className="ml-2" />
          </Link>

        </div>

        <div className="relative w-xl h-178">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="rounded-[10px] object-cover"
          />
        </div>

      </div>

    </section>
  );
};

export default BlogHero;
