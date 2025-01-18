"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import { IoSchoolOutline } from "react-icons/io5";
import { RiArticleLine } from "react-icons/ri";
import { TbMessage2 } from "react-icons/tb";

const navIcons = {
  Home: <AiOutlineHome className="text-xl" />,
  Experience: <BsBriefcase className="text-xl" />,
  Skills: <AiOutlineUser className="text-xl" />,
  Education: <IoSchoolOutline className="text-xl" />,
  Blog: <RiArticleLine className="text-xl" />,
  Contact: <TbMessage2 className="text-xl" />,
};

export default function MobileNav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  console.log(activeSection);
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white bg-opacity-80 backdrop-blur-[0.5rem] border-t border-black/10 dark:bg-gray-950 dark:border-white/10">
      <ul className="flex justify-around items-center h-16">
        {links
          .filter((link) => !link?.hidden)
          .map((link) => {
            const isActive = (isHomePage && activeSection === link.name);

            return (
              <motion.li key={link.hash} className="h-full flex items-center">
                <Link
                  className={clsx(
                    "flex flex-col items-center justify-center w-16 h-full transition",
                    {
                      "text-gray-950 dark:text-gray-200": isActive,
                      "text-gray-500 dark:text-gray-500": !isActive,
                    }
                  )}
                  href={isHomePage || link.type === "page" ? link.hash : "/"}
                  onClick={() => {
                    if (link.type === "hash" && !isHomePage) {
                      sessionStorage.setItem("scrollToSection", link.name);
                    } else if (link.type === "hash" && isHomePage) {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }
                  }}
                >
                  {navIcons[link.name as keyof typeof navIcons]}
                  <span className="text-xs mt-1">{link.name}</span>
                </Link>
              </motion.li>
            );
          })}
      </ul>
    </nav>
  );
} 