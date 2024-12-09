"use client";

import React from "react";
import SectionHeading from "./../section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import {educationData} from "@/lib/data";

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

        {educationData.map((education, index) => (
            <React.Fragment key={index}>
              <div className="mt-4 flex gap-6 border border-black/5 rounded-lg pt-4 pb-7 px-5 md:p-10 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20">

                {education.imageUrl && <div><Image src={education.imageUrl} alt="education" height={100} width="150"/></div>}

                <div>
                  <p className="text-lg font-medium">
                    {education.title}
                  </p>
                  <p> {education.description}</p>
                  <p className="mt-1">Graduated in {education.graduatedDate}</p>
                  <ul className="list-disc pl-6">
                    {education.items.map((item, key) => (
                        <li key={key}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </React.Fragment>
        ))}


      </motion.section>
  );
}
