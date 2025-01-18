import { blogData } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPost({ params: { slug } }: Props) {
  const post = blogData.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center px-4">
      <article className="prose prose-lg dark:prose-invert max-w-[50rem] mt-8 mb-28">
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="flex items-center gap-2 sm:gap-4 text-sm sm:text-md text-gray-600 dark:text-gray-300 mb-8">
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
          <span>•</span>
          <span>{post.category}</span>
          <span>•</span>
          <span>By {post.author}</span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          {post.shortDescription}
        </p>
        
        <div className="mt-8 leading-relaxed">
          {post.description.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}

export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
} 