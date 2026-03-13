import BlogCard from "../ui/BlogCard";

const Articles = ({ blogs }) => {
  return (
    <section className="max-w-360 mx-auto xl:p-30 bg-white">

      <h2 className="mb-10 font-heading text-[40px] font-bold">
        More Articles
      </h2>

      <div className="grid grid-cols-3 gap-14">

        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}

      </div>

    </section>
  );
};

export default Articles;