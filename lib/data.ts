import React from "react";
import { CgWorkAlt } from "react-icons/cg";

type Link = {
  name: string;
  hash: string;
  type?: "hash" | "page";
  hidden?: boolean;
};

export const links = [
  {
    name: "Home",
    hash: "#home",
    type: "hash",
  }, 
  {
    name: "Projects",
    hash: "#projects",
    type: "hash",
    hidden: true,
  },
  {
    name: "Experience",
    hash: "#experience",
    type: "hash",
  },
  {
    name: "Skills",
    hash: "#skills",
    type: "hash",
  },
  {
    name: "Education",
    hash: "#education",
    type: "hash",
  },
  {
    name: "Blog",
    hash: "/blog",
    type: "page",
  },
  {
    name: "Contact",
    hash: "#contact",
    type: "hash",
  },
] as Link[];

export const experiencesData = [
  {
    title: "Full Stack Web Developer",
    location: "UltraFix, United States",
    description:
        "Contributed to various web development projects at UltraFix, utilizing advanced technologies to build efficient solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2024 - Present",
  },
  {
    title: "Full Stack Web Developer",
    location: "Fogito, Baku, Azerbaijan",
    description:
        "Contributed to the development of a comprehensive CRM system with PHP and React.js. Worked on key modules including Time Tracking, Task Management, Chat, GPS Tracking, Accounting, and File Management.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2020 - November 2024",
  },
  {
    title: "Web Developer",
    location: "Freelance",
    description:
        "Developed and maintained a variety of websites, including news platforms, car sales portals, and business websites.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2019 - February 2020",
  },
  {
    title: "Back End Web Developer",
    location: "Pronet, Baku, Azerbaijan",
    description:
        "Played a key role in developing an ERP system, contributing to its architecture and functionality. Focused on the design and implementation of a robust Call Center module to enhance customer engagement and operational efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2019 - June 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Top-center",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      "logos:aws",
      "logos:javascript",
      "logos:react",
      "logos:bootstrap",
      "logos:express",
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:mysql",
    ],
    imageUrl: '/images/project/topcenter.jpg',
    githubLink: "https://github.com/ilgarhuseynli",
    urlLink: "https://top-center.org/en",
    demoLink: "https://top-center.org/en",
  },
  {
    title: "RavFit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    tags: ["PHP",'tag1','tag2'],
    icons: [
      "logos:javascript",
      "logos:react",
      "logos:bootstrap",
      "logos:javascript",
    ],
    imageUrl: '/images/project/ravfit.jpg',
    githubLink: "https://github.com/ilgarhuseynli",
    demoLink: "https://ravfit.netlify.app/",
    urlLink: "https://ravfit.netlify.app/",
  },
] as const;

export const skillsData = [
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Laravel",
    icon: "logos:laravel",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "NextJs",
    icon: "logos:nextjs-icon",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "Bootstrap",
    icon: "logos:bootstrap",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "MongoDb",
    icon: "logos:mongodb-icon",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
] as const;

export const educationData = [
  {
    title: "Programming",
    description: "Digital Academy",
    items: [
      "FullStack Web Developer",
    ],
    graduatedDate: "2019",
    imageUrl: "",
    urlLink: "https://test.com",
  },
  {
    title: "Programming",
    description: "Orient ITM",
    items: [
      "C# && .NET Framework",
      "MS SQL",
    ],
    graduatedDate: "2016",
    imageUrl: "",
    urlLink: "https://test.com",
  },
  {
    title: "Bachelor",
    description: "Azerbaijan state oil and industry university",
    items: [
      "Faculty: (ITMF) Information Technology",
      "Specialty: Computer Engineering",
    ],
    graduatedDate: "2017",
    imageUrl: "",
    urlLink: "https://test.com",
  },
] as const;

export const blogData = [
  {
    title: "Getting Started with Next.js 14",
    shortDescription: "Learn the basics of Next.js 14 and its new features including Server Components and App Router.",
    description: "Next.js 14 brings revolutionary changes to the React framework with Server Components, App Router, and improved performance optimizations. In this comprehensive guide, we'll explore these new features and how they can enhance your web development workflow.",
    imageUrl: "/images/blog/nextjs.jpg",
    date: "2024-03-15",
    author: "Ilgar Huseynli",
    category: "Web Development",
    slug: "getting-started-with-nextjs-14"
  },
  {
    title: "The Power of TypeScript in Modern Web Development",
    shortDescription: "Discover how TypeScript can improve your JavaScript development experience with static typing.",
    description: "TypeScript has become an essential tool in modern web development. This article explores how TypeScript's static typing system can help catch errors early, improve code maintainability, and enhance the development experience.",
    imageUrl: "/images/blog/typescript.png",
    date: "2024-03-10",
    author: "Ilgar Huseynli",
    category: "Programming",
    slug: "power-of-typescript"
  },
  {
    title: "Building Responsive UIs with Tailwind CSS",
    shortDescription: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    description: "Tailwind CSS has revolutionized the way we style web applications. In this post, we'll dive deep into how to leverage Tailwind's utility-first approach to build responsive and maintainable user interfaces.",
    imageUrl: "/images/blog/tailwind.jpeg",
    date: "2024-03-05",
    author: "Ilgar Huseynli",
    category: "CSS",
    slug: "building-with-tailwind-css"
  },
] as const;
