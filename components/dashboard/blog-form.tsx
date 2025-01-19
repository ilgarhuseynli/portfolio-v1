"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { BlogFormData } from "@/types/blog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Editor } from "@/components/editor";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { slugify } from "@/lib/utils";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  description: z.string().min(1, "Description is required"),
  imageUrl: z.string().url("Must be a valid URL"),
  category: z.string().min(1, "Category is required"),
  slug: z.string().min(1, "Slug is required"),
});

interface BlogFormProps {
  initialData?: BlogFormData;
  onSubmit: (data: BlogFormData) => Promise<void>;
  isEditing?: boolean;
}

export function BlogForm({ initialData, onSubmit, isEditing = false }: BlogFormProps) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<BlogFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      shortDescription: "",
      description: "",
      imageUrl: "",
      category: "",
      slug: "",
    },
  });

  const handleSubmit = async (data: BlogFormData) => {
    try {
      setLoading(true);
      await onSubmit(data);
      toast({
        title: "Success",
        description: `Blog ${isEditing ? "updated" : "created"} successfully`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to ${isEditing ? "update" : "create"} blog`,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    form.setValue("title", e.target.value);
    if (!isEditing) {
      form.setValue("slug", slugify(e.target.value));
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Title</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  onChange={handleTitleChange}
                  className="bg-background text-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Slug</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  readOnly={!isEditing}
                  className="bg-background text-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="shortDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Short Description</FormLabel>
              <FormControl>
                <Textarea 
                  {...field}
                  className="bg-background text-foreground min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Content</FormLabel>
              <FormControl>
                <Editor 
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Image URL</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  type="url"
                  className="bg-background text-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-foreground">Category</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  className="bg-background text-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={loading}
          className="w-full"
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isEditing ? "Update" : "Create"} Blog
        </Button>
      </form>
    </Form>
  );
} 