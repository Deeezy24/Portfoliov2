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
      id="about"
      className="px-6 py-16 mx-auto mb-28 max-w-4xl text-white sm:px-10 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="mt-6 space-y-6 text-base leading-relaxed text-left sm:text-lg">
        <p>
          After earning my degree in{" "}
          <span className="font-semibold text-white/90">Computer Engineering</span>, 
          I committed to pursuing my passion for technology and software development. 
          Throughout my academic journey, I developed a strong foundation in logic, algorithms, 
          and system design, which naturally led me to programming. To further enhance my skills, 
          I enrolled in a coding bootcamp where I focused intensively on{" "}
          <span className="font-semibold text-white/90">Front-End Web Development</span>. 
          There, I gained hands-on experience in building responsive, user-friendly interfaces and developed 
          a deep appreciation for clean code and efficient design patterns.
        </p>
        <p>
          <span className="italic">What I love most about programming</span> is the logical reasoning 
          and the challenge of solving complex problems. The satisfaction of overcoming a tough bug or 
          optimizing a feature is what drives me to continuously improve. My core tech stack includes{" "}
          <span className="font-semibold text-white/90">React, Next.js, and Node.js</span>, and I am also 
          proficient in TypeScript. I’ve worked on various projects ranging from personal applications 
          to collaborative team-based systems, applying best practices in version control, component 
          architecture, and API integration.
        </p>
        <p>
          I am always exploring new technologies and frameworks to stay up to date with industry trends. 
          I’m currently seeking a{" "}
          <span className="font-semibold text-white/90">full-time position</span> as a Full Stack Developer 
          where I can contribute to meaningful projects, grow as an engineer, and make a lasting impact 
          through clean, scalable code.
        </p>
        <p>
          <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching 
          movies, and doing outdoor activities. I also enjoy{" "}
          <span className="font-semibold text-white/90">learning new things</span>. I am currently learning 
          about{" "}
          <span className="font-semibold text-white/90">full stack development</span> and motorcycles.
        </p>
      </div>
    </motion.section>
  );
}
