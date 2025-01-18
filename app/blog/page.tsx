import Contact from "@/components/sections/contact";
import { blogData } from "@/lib/data";
import BlogCard from "@/components/blog-card";

export default function BlogPage() {
  return (
    <main className="flex flex-col items-center px-4">
      <section className="mb-28 max-w-[60rem] mt-20 md:mt-0 text-center leading-8 sm:mb-40 scroll-mt-28">
        <h1 className="mb-8 text-4xl font-bold">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {blogData.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </section>
      <Contact />
    </main>
  );
} 