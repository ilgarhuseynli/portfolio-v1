export interface Blog {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

export interface BlogTableItem extends Blog {
  actions: React.ReactNode;
}

export interface BlogFormData {
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  category: string;
  slug: string;
} 