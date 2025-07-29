"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";



export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex justify-center items-center px-4 min-h-screen"
    >
      <div className="mx-auto space-y-8 max-w-4xl text-center">
        {/* Profile Image with Enhanced Animations */}
        <div className="flex justify-center items-center mb-8">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8,
              }}
              className="relative"
            >
 
              <div className="p-1 w-40 h-40 rounded-full border-2 shadow-2xl">
               <Image src="/professional pic.jpg" alt="Profile" width={160} height={160} className="rounded-full" /> 
              </div>

            </motion.div>

            <motion.span
              className="absolute -right-2 -bottom-2 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              
            </motion.span>
          </div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="space-y-4">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r sm:text-6xl lg:text-7xl from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Mark Ivor Glorioso
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-block"
            >
              <span className="px-6 py-2 text-lg font-semibold rounded-full border shadow-sm bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700">
                Full Stack Developer
              </span>
            </motion.div>
          </div>

          <motion.p
            className="mx-auto max-w-3xl text-xl leading-relaxed sm:text-2xl text-slate-600 dark:text-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-semibold text-slate-900 dark:text-white">Hello!</span> I'm a passionate developer with{" "}
            <span className="px-3 py-1 mx-1 text-base font-bold text-white bg-sky-700 rounded-full shadow-sm">
              4 years
            </span> of experience. 
            I love building <span className="italic font-medium text-slate-800 dark:text-slate-200">sites & apps</span> with a focus on{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-sky-700">
              React (Next.js) / Node.js
            </span>
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "Tailwind CSS"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="px-4 py-2 text-sm font-medium bg-white rounded-full border shadow-sm transition-all duration-300 cursor-default dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-sky-700 hover:text-white hover:border-transparent"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col gap-4 justify-center items-center pt-4 sm:flex-row"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="#contact"
            className="inline-flex gap-3 items-center px-8 py-4 text-lg font-semibold text-white bg-sky-700 rounded-full shadow-lg transition-all duration-300 transform group hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here
            <BsArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <a
            href="/CV_GLORIOSO.pdf"
            download
            className="inline-flex gap-3 items-center px-8 py-4 text-lg font-semibold bg-white rounded-full border-2 shadow-lg transition-all duration-300 transform group text-slate-700 dark:text-slate-300 dark:bg-slate-800 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-600"
          >
            <HiDownload className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            Download CV
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4 justify-center items-center pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex gap-3">
            {[
              { href: "https://www.linkedin.com/in/ivor-glorioso/", icon: BsLinkedin, label: "LinkedIn", color: "hover:bg-[#0077b5]" },
              { href: "https://github.com/Deeezy24", icon: FaGithubSquare, label: "GitHub - Deeezy24", color: "hover:bg-slate-800" },
              { href: "https://github.com/redcloud442", icon: FaGithubSquare, label: "GitHub - redcloud442", color: "hover:bg-slate-800" }
            ].map((social, index) => (
              <motion.div
                key={social.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`flex items-center justify-center h-12 w-12 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 ${social.color} hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-600`}
                >
                  <social.icon className="w-6 h-6" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}