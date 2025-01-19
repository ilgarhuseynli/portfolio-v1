"use client";

import { BlogForm } from "@/components/dashboard/blog-form";
import { createBlog } from "@/lib/blog-service";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { BlogFormData } from "@/types/blog";

export default function NewBlogPage() {
  const router = useRouter();
  const { user } = useAuth();

  const handleSubmit = async (data: BlogFormData) => {
    if (!user?.email) return;
    await createBlog(data, user.email);
    router.push("/dashboard/blogs");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Create New Blog</h1>
      </div>
      <div className="border rounded-lg p-6 bg-card">
        <BlogForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
} 