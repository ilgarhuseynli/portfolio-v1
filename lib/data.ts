import React from "react";
import { CgWorkAlt } from "react-icons/cg";

type Link = {
  name: string;
  hash: string;
  hidden?: boolean; // Optional property
};

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
    hidden: true,
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
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
