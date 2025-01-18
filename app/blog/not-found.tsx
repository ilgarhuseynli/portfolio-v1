import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-4xl font-bold mb-4">Blog Post Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Could not find the requested blog post.
      </p>
      <Link
        href="/blog"
        className="bg-gray-900 text-white px-7 py-3 rounded-full outline-none hover:scale-105 focus:scale-105 active:scale-105 transition"
      >
        Back to Blog
      </Link>
    </main>
  );
} 