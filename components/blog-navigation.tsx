import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/lib/types";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

type BlogNavigationProps = {
  prevPost: Blog | null;
  nextPost: Blog | null;
};

export default function BlogNavigation({ prevPost, nextPost }: BlogNavigationProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-4 mt-16 mb-8 w-full">
      {prevPost ? (
        <Link
          href={`/blog/${prevPost.slug}`}
          className="flex-1 flex  items-center gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 transition group overflow-hidden"
        >
          <HiArrowLeft className="flex-shrink-0 w-6 h-6 transition group-hover:-translate-x-2" />
          <div className="min-w-0">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Previous</p>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">{prevPost.title}</h3>
          </div>
          <div className="relative ms-auto flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden hidden sm:block">
            <Image
              src={prevPost.imageUrl}
              alt={prevPost.title}
              fill
              className="object-cover"
            />
          </div>
        </Link>
      ) : (
         ''
      )}

      {nextPost ? (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="flex-1 flex items-center gap-4 p-4 rounded-lg bg-gray-100 dark:bg-gray-800/50 hover:bg-gray-200 dark:hover:bg-gray-800 transition group text-right overflow-hidden"
        >
          <div className="relative me-auto flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden hidden sm:block">
            <Image
              src={nextPost.imageUrl}
              alt={nextPost.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0 ml-auto">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Next</p>
            <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">{nextPost.title}</h3>
          </div>
          <HiArrowRight className="flex-shrink-0 w-6 h-6 transition group-hover:translate-x-2" />
        </Link>
      ) : (
        ''
      )}
    </div>
  );
} 