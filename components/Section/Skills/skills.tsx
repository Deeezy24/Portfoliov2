"use client";
import Image from "next/image";
import React from "react";
import SectionHeading from "../../Module/section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="p-10 mx-auto mb-28 max-w-2xl text-center scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Technology Stack</SectionHeading>
      <ul className="flex flex-wrap gap-2 justify-center text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <>
            <motion.li
              className="flex gap-x-2 items-center px-5 py-3 bg-white rounded-xl borderBlack dark:bg-white/10 dark:text-white/80"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <div
                className="text-2xl"
                key={index}
                style={{ color: skill.logoColor }}
              >
                {skill.titleLogo}
              </div>
              {skill.title}
            </motion.li>
          </>
        ))}
      </ul>
    </section>
  );
}
