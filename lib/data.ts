import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ApexpointImg from "@/public/Apexpoint.png";
import FormappImg from "@/public/formappImg.png";
import PortfolioV2Img from "@/public/Porfoliov2.png";
import PortfolioV1Img from "@/public/Portfoliov1.png";
import JavaCalcuImg from "@/public/Javacalcu.png";
import NetgoImg from "@/public/Netgo.png";
import CodebilityImg from "@/public/Codebility.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "De La Salle University Dasmarinas",
    location: "Dasmarinas, Cavite",
    description:
      "Currently studying, a 4th year student pursuing Computer Engineering major in Software Development.",
    icon: React.createElement(LuGraduationCap),
    date: "2020-Present",
  },
  {
    title: "Front-End Developer Intern",
    location: "Remote",
    description:
      "I worked as a front-end developer for Codebility for 3 months up until now. An organization to upskilled everyone knowledge regarding programming.",
    icon: React.createElement(CgWorkAlt),
    date: "2023-Present",
  },
  {
    title: "Freelance Front-End Developer",
    location: "Remote",
    description:
      "I'm now a front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Bootstrap. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Javascript Calculator",
    description:
      "A project to calculate and function like an actual calculator using JavaScript",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: JavaCalcuImg,
    projectUrl:"https://calculatorjsvanilla.netlify.app"
  },
  {
    title: "Netgo Netflix Clone",
    description:
      "A project that clones Netlflix. It is a school project that has full-stack support and consist of Valid ID registration in compliance to the criteria. It has crud, admin and user dashboard",
    tags: ["HTML", "CSS", "SQL", "Tailwind", "Php", "JavaScript"],
    imageUrl: NetgoImg,
    projectUrl:"https://github.com/IvorG24/Movie-api"
  },
  {
    title: "Apexpoint",
    description:
      "I worked as a front-end developer on this internship program for 3 months. A brand that exist in the E-commerce website (Shoppe) and (Lazada).",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    imageUrl: ApexpointImg,
    projectUrl:"https://apexpointv2.vercel.app/?fbclid=IwAR1YMfLzhpUTJEygLz9CuZlkFhtD0mkqQXPM8H4wHmsCwXdsTbavF-FCs5U"
  },
  {
    title: "FormApp",
    description:
      "A project related to Football. I was the front-end developer. It has features like queuing, booking and crud.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Zustand"],
    imageUrl: FormappImg,
    projectUrl:"https://formapp-fe.vercel.app/?fbclid=IwAR3hRGK-PgwlURkPSvXgaWmZ0LxWh49WYz0Oyo6Bzn3p_T-1udmpaWP8fZM"
  },
  {
    title: "Codebility Page",
    description:
      "A project that is dedicated to supporting codebility which is our community together with my codevs.",
    tags: ["Next.js", "SQL", "ExpressJS", "TailwindCSS", "NodeJs"],
    imageUrl: CodebilityImg,
    projectUrl:"https://codebility-fe.vercel.app/"
  },
  {
    title: "PortfolioV1",
    description:
      "First Portfolio that is consist of old projects",
    tags: ["React","Javascript", "Tailwind"],
    imageUrl: PortfolioV1Img,
    projectUrl:"https://portfolio-ivor.netlify.app/"
  },
  {
    title: "PortfolioV2",
    description:
      "A project to store my projects and a way to contact me about any concerns",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: PortfolioV2Img,
    projectUrl:"/"
  },
  
] as const; 

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Php",
  "Framer Motion",
  "SQL"
] as const;
