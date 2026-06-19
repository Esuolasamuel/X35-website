import BlogCard from "../ui/BlogCard";

const Articles = ({ blogs }) => {
  return (
    <section className="max-w-360 mx-auto px-6 sm:px-10 xl:px-30 py-10 lg:py-30 bg-white">

      <h2 className="mb-10 font-heading text-[#0C0C1CC7] text-2xl md:text-3xl lg:text-[40px] font-bold">
        More Articles
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">

        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}

      </div>

    </section>
  );
};

export default Articles;
