"use client";

import { BlogForm } from "@/components/dashboard/blog-form";
import { getBlogById, updateBlog } from "@/lib/blog-service";
import { useRouter } from "next/navigation";
import { BlogFormData } from "@/types/blog";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function EditBlogPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const { toast } = useToast();
  const [blog, setBlog] = useState<BlogFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const blogData = await getBlogById(params.id);
        if (blogData) {
          const { id, date, author, ...formData } = blogData;
          setBlog(formData);
        }
        setLoading(false);
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to load blog",
        });
        router.push("/dashboard/blogs");
      }
    };

    loadBlog();
  }, [params.id, router, toast]);

  const handleSubmit = async (data: BlogFormData) => {
    await updateBlog(params.id, data);
    router.push("/dashboard/blogs");
  };

  if (loading) {
    return <div className="text-foreground">Loading...</div>;
  }

  if (!blog) {
    return <div className="text-foreground">Blog not found</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Edit Blog</h1>
      </div>
      <div className="border rounded-lg p-6 bg-card">
        <BlogForm
          initialData={blog}
          onSubmit={handleSubmit}
          isEditing
        />
      </div>
    </div>
  );
} 