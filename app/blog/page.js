import Articles from "@/components/section/Articles"
import BlogHero from "@/components/section/BlogHero"


const Blog = ({date = "February 11, 2026"}) => {
  return (
    <main className="flex-1">
      <BlogHero date={date}/>
      <Articles/>
    </main>
  )
}

export default Blog