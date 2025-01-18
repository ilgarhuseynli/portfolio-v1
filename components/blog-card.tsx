import { Blog } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

type BlogCardProps = {
  blog: Blog;
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group">
      <article className="bg-gray-100 dark:bg-white/10 rounded-lg overflow-hidden hover:scale-[1.02] transition">
        <div className="relative h-48 w-full">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
            <time dateTime={blog.date}>
              {format(new Date(blog.date), "MMMM d, yyyy")}
            </time>
            <span>•</span>
            <span>{blog.category}</span>
          </div>
          <div className="h-40 flex flex-col text-left">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300">
                  {blog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                  {blog.shortDescription}
            </p>
            <div className="mt-auto flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>By {blog.author}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
} 