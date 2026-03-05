import React from 'react'
import BlogCard from '../ui/BlogCard'
import blog2 from "@/assets/images/blog-2.png"
import blog3 from "@/assets/images/blog-3.png"
import blog4 from "@/assets/images/blog-4.png"


const Articles = () => {
    const blogs = [
        {
        src: blog2,
        date: "February 11, 2026",
        title: "After Postmodernism: What Comes Next?",
        excerpt: "The ironic playfulness that defined an era is giving way to something more earnest and more uncertain."
        },
        {
            src: blog3,
            date: "February 11, 2026",
            title: "The 15-Minute City Revisited",
            excerpt: "Paris proved it could work. Now a dozen cities are trying — with mixed results and hard lessons."
        },
        {
            src: blog4,
            date: "February 11, 2026",
            title: "Mass Timber and the Forest Question",
            excerpt: "Cross-laminated timber promises a green future, but harvesting at scale demands uncomfortable conversations."
        }
    ]
  return (
    <section className='max-w-360 mx-auto xl:p-30 bg-white '>
        <h2 className='mb-10 text-2xl font-bold text-gray-800'>More articles</h2>
        <div className="grid grid-cols-3 gap-4">
            {blogs.map((blog) => (
                <BlogCard key={blog.title} src={blog.src} date={blog.date} title={blog.title} excerpt={blog.excerpt} />
            ))}
        </div>
    </section>
  )
}

export default Articles