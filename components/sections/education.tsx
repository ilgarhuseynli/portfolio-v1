"use client";

import React from "react";
import SectionHeading from "./../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function Education() {
  const { ref } = useSectionInView("Education");

  return (
      <motion.section
          id="education"
          ref={ref}
          className="mb-20 sm:mb-28 scroll-mt-28 w-full md:w-[700px]"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
      >
        <SectionHeading>My Education</SectionHeading>


        <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
          <div>
            {/*<Image src={qutLogo} alt="QUT" width="150" />*/}
          </div>

          <div>
            <p className="text-lg font-medium">
              Programming
            </p>
            <p>Digital Academy</p>
            <p className="mt-1">Graduated in 2017</p>
            <ul className="list-disc pl-6">
              <li>Programming school</li>
              <li>FullStack Web Developer</li>
            </ul>
          </div>
        </div>


        <div
            className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
          <div>
            {/*<Image src={qutLogo} alt="QUT" width="150" />*/}
          </div>

          <div>
            <p className="text-lg font-medium">
              Programming
            </p>
            <p>Orient itm</p>
            <p className="mt-1">Graduated in 2017</p>
            <ul className="list-disc pl-6">
              <li>C# && .NET Framework</li>
              <li>MS SQL</li>
            </ul>
          </div>
        </div>

        <div
            className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">
          <div>
            {/*<Image src={qutLogo} alt="QUT" width="150" />*/}
          </div>

          <div>
            <p className="text-lg font-medium">
              Bachelor
            </p>
            <p>Azerbaijan state oil and industry university </p>
            <p className="mt-1">Graduated in 2017</p>
            <ul className="list-disc pl-6">
              <li>Faculty: (ITMF) Information Technology</li>
              <li>Specialty: Computer Engineering</li>
            </ul>
          </div>
        </div>

      </motion.section>
  );
}
