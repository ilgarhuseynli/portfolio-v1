import Header from "@/components/header";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import React from "react";
import {Metadata} from "next";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata :Metadata = {
    title: "Ilgar Huseynli | Full Stack Web Developer",
    description: "I am a full-stack developer specializing in backend development with Laravel and PHP, with expertise in API development, database management, and seamless server-client communication. Additionally, I have experience in front-end technologies like React.js, Next.js, and TypeScript.",
    keywords: ["Ilgar Huseynli", "Full Stack Developer", "PHP", "Laravel", "React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Git", "Linux", "MongoDB", "MySQL",],
    openGraph: {
        title: "Ilgar Huseynli | Full Stack Web Developer",
        description: "Experienced in backend development with Laravel and PHP, along with front-end expertise in React.js and Next.js.",
        url: "https://your-portfolio-url.com", // Replace with your actual URL
        type: "website",
        images: [
            {
                url: "/images/ilgarhuseynli.jpeg",
                width: 800,
                height: 800,
                alt: "Ilgar Huseynli | Web Developer",
            },
        ],
    },
};



export default function RootLayout({children} : {children: React.ReactNode}) {
  return (
      <html lang="en" className="!scroll-smooth dark">

      {/*<head>*/}
      {/*    <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png"/>*/}
      {/*    <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png"/>*/}
      {/*    <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png"/>*/}
      {/*    <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png"/>*/}
      {/*    <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png"/>*/}
      {/*    <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png"/>*/}
      {/*    <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png"/>*/}
      {/*    <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png"/>*/}
      {/*    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png"/>*/}
      {/*    <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png"/>*/}
      {/*    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>*/}
      {/*    <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png"/>*/}
      {/*    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>*/}
      {/*    <link rel="manifest" href="/favicons/manifest.json"/>*/}
      {/*    <meta name="msapplication-TileColor" content="#ffffff"/>*/}
      {/*    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>*/}
      {/*    <meta name="theme-color" content="#ffffff"/>*/}
      {/*     */}
      {/*</head>*/}

      <body
          className={`${nunito.className} bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
      <ThemeContextProvider>
          <ActiveSectionContextProvider>
              <Header/>
              {children}

              <Toaster position="top-right"/>
              <ThemeSwitch/>
          </ActiveSectionContextProvider>
      </ThemeContextProvider>
      </body>
      </html>
  );
}
