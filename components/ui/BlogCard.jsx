import Image from "next/image";
import Link from "next/link";
import { blogCards } from  "@/data/blogcard";

export default function BlogCard({ blog }) {
  return (
    <Link
      href={`/blogpost/${blog.slug}`}
      className="flex flex-col bg-white"
    >
      <Image
        src={blog.image}
        alt={blog.title}
        width={400}
        height={300}
        sizes="(max-width: 768px) 100vw, 33vw"
        className="rounded-[10px]"
      />

      <div className="mt-6">

        <p className="text-sm text-[#0C0C1C]/60 font-body leading-6">
          {blog.date} 
        </p>

        <h3 className="text-xl font-body font-semibold mt-2">
          {blog.title}
        </h3>

        <p className="mt-4 font-body text-base leading-6 text-[#0C0C1C]">
          {blog.excerpt}
        </p>

      </div>
    </Link>
  );
}