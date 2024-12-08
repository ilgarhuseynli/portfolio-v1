import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Intro from "@/components/sections/intro";
import Projects from "@/components/sections/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Intro />
      <div className="flex flex-col items-center px-4">
        <SectionDivider />
        {/*<Projects />*/}
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
    </main>
  );
}
