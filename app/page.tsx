"use client";

import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Intro from "@/components/sections/intro";
import Projects from "@/components/sections/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/sections/skills";
import Blog from "@/components/sections/blog";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Home() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    const sectionToScrollTo = sessionStorage.getItem("scrollToSection");
    if (sectionToScrollTo) {
      const element = document.getElementById(sectionToScrollTo.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionToScrollTo);
        setTimeOfLastClick(Date.now());
      }
      sessionStorage.removeItem("scrollToSection");
    }
  }, [setActiveSection, setTimeOfLastClick]);

  return (
    <main className="flex flex-col items-center">
      <Intro />
      <div className="flex flex-col items-center px-4">
        <SectionDivider />
        {/*<Projects />*/}
        <Experience />
        <Skills />
        <Education />
        <Blog />
        <Contact />
      </div>
    </main>
  );
}
