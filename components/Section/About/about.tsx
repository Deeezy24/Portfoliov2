"use client";

import React from "react";
import SectionHeading from "../../Module/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After earning my degree in <span className="font-medium">Computer Engineering</span>, I committed to pursuing my passion for technology and software development. Throughout my academic journey, I developed a strong foundation in logic, algorithms, and system design, which naturally led me to programming. To further enhance my skills, I enrolled in a coding bootcamp where I focused intensively on <span className="font-medium">Front-End Web Development</span>. There, I gained hands-on experience in building responsive, user-friendly interfaces and developed a deep appreciation for clean code and efficient design patterns.
  <br /><br />
  <span className="italic">What I love most about programming</span> is the logical reasoning and the challenge of solving complex problems. The satisfaction of overcoming a tough bug or optimizing a feature is what drives me to continuously improve. My core tech stack includes <span className="font-medium">React, Next.js and Node.js</span>, and I am also proficient in TypeScript. I’ve worked on various projects ranging from personal applications to collaborative team-based systems, applying best practices in version control, component architecture, and API integration.
  <br /><br />
  I am always exploring new technologies and frameworks to stay up to date with industry trends. I’m currently seeking a <span className="font-medium">full-time position</span> as a Full Stack Developer where I can contribute to meaningful projects, grow as an engineer, and make a lasting impact through clean, scalable code.
</p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and do outdoor activites. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">full stack development</span>. I'm also
        learning about motorcycles.
      </p>
    </motion.section>
  );
}
