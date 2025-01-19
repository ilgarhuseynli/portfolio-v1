"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/auth-context";
import { getBlogs, deleteBlog } from "@/lib/blog-service";
import { Blog } from "@/types/blog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [lastVisible, setLastVisible] = useState<any>(null);
  const { toast } = useToast();
  const { user } = useAuth();

  const loadBlogs = async (pageNum: number = 1, lastDoc?: any) => {
    try {
      const { blogs: newBlogs, lastVisible: lastVisibleDoc, hasMore: more } = 
        await getBlogs(pageNum, lastDoc);
      
      if (pageNum === 1) {
        setBlogs(newBlogs);
      } else {
        setBlogs(prev => [...prev, ...newBlogs]);
      }
      
      setLastVisible(lastVisibleDoc);
      setHasMore(more);
      setLoading(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load blogs",
      });
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteBlog(id);
      setBlogs(blogs.filter(blog => blog.id !== id));
      toast({
        title: "Success",
        description: "Blog deleted successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete blog",
      });
    }
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
    loadBlogs(page + 1, lastVisible);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Blogs</h1>
        <Button asChild>
          <Link href="/dashboard/blogs/new">Create New Blog</Link>
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Author</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell className="font-medium">{blog.title}</TableCell>
                <TableCell>{blog.category}</TableCell>
                <TableCell>{new Date(blog.date).toLocaleDateString()}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <Link href={`/dashboard/blogs/${blog.id}`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(blog.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={loadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
} 