import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Blog = {
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  slug: string;
};
