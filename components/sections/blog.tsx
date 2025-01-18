import React from "react";
import SectionHeading from "../section-heading";
import { blogData } from "@/lib/data";
import BlogCard from "../blog-card";
import Link from "next/link";

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-28 mb-28 xl:w-[80%]">
      <SectionHeading>Latest Blog Posts</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogData.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/blog"
          className="bg-gray-900 text-white px-7 py-3 rounded-full outline-none hover:scale-105 focus:scale-105 active:scale-105 transition"
        >
          View All Posts
        </Link>
      </div>
    </section>
  );
} 