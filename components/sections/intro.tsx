"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {BsLinkedin} from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import {PiReadCvLogo} from "react-icons/pi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ParticleContainer from "./../particle-container";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-16 sm:mb-0 text-center scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      {/* <ParticleContainer /> */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src='/images/ilgarhuseynli.jpeg'
              alt="Ilgar Huseynli"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.25rem] border-white shadow-sky-200 shadow-md"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            {/*👋*/}
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-20 px-0 sm:px-4 text-3xl font-medium !leading-[1.5] sm:text-4xl text-slate-800 dark:text-white max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Ilgar. I'm a{" "} Full stack web developer</span>.
         I'm currently working with Php, Laravel and React.js.
      </motion.h1>

      <motion.div
        className="flex flex-row flex-wrap items-center justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://github.com/ilgarhuseynli"
          target="_blank"
        >
          GitHub <FaGithub className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/ilqarhuseynli/"
          target="_blank"
        >
          <span className="opacity-70">LinkedIn</span>
          <BsLinkedin className="opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="/ilgar_huseynli_resume.pdf"
          download
          target="_blank"
        >
          <span className="opacity-70">Resume</span>
          <PiReadCvLogo className="opacity-70" />
        </a>
      </motion.div>
    </section>
  );
}
