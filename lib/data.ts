import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ApexpointImg from "@/public/Apexpoint.png";
import FormappImg from "@/public/formappImg.png";
import PortfolioV2Img from "@/public/Porfoliov2.png";
import JavaCalcuImg from "@/public/Javacalcu.png";
import TrelloImg from "@/public/TrelloImg.png";
import PosMalaysia from "@/public/pos_malaysia.png";
import CodebilityImg from "@/public/codebility.png";
import GestureglovesImg from "@/public/GestureglovesImg.png";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "De La Salle University Dasmarinas",
    location: "Dasmarinas, Cavite",
    description: [
      "Finished Bachelor of Science in Computer Engineering major in Software Development.",
    ],

    icon: React.createElement(LuGraduationCap),
    date: "Sep 2020-May 2024",
  },
  {
    title: " Codebility Front-End Developer Intern",
    location: "Remote",
    description: [
      "- Collaborated with a cross-functional team, including back-end developers and UX/UI designers.",
      "- Developed a responsive web application using Nextjs.",
      "- Handled static and dynamic websites and create reusable components",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2023-Jan 2024",
  },

  {
    title: "Studio20 Front-End Developer",
    location: "Remote",
    description: [
      "- Worked closely with team members in a front-end development role.",
      "- Developed a responsive web application using Nextjs and WordPress.",
      "- My role includes maintaining code, fixing front-end bugs, creating new pages and UI utilizing CSS frameworks.   ",
    ],
    icon: React.createElement(FaReact),
    date: "Feb 2024 - May 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Javascript Calculator",
    description:
      "A project to calculate and function like an actual calculator using JavaScript",
    paragraph:
      "The JavaScript Calculator project was an in-depth exercise in creating a fully functional, browser-based calculator using JavaScript. The goal was to replicate the functionalities of a physical calculator, providing users with a reliable tool to perform basic arithmetic operations like addition, subtraction, multiplication, and division. Throughout the project, I employed modern JavaScript techniques and ensured a seamless user experience by incorporating HTML for structure and CSS for styling. This project challenged me to think critically about user interface design and to optimize the calculator for both desktop and mobile use, ensuring that it responds accurately to various input types and errors.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: JavaCalcuImg,
    projectUrl: "https://calculatorjsvanilla.netlify.app",
  },

  {
    title: "Apexpoint",
    description:
      "I worked as a front-end developer on this internship program for 3 months. A brand that exist in the E-commerce website (Shoppe) and (Lazada).",
    paragraph:
      "During my three-month internship program at Apexpoint, I worked as a front-end developer for a brand that operates within major e-commerce platforms like Shopee and Lazada. My responsibilities included designing and implementing responsive user interfaces using React, Next.js, and Tailwind CSS. This project allowed me to hone my skills in modern web development frameworks and tools, emphasizing the importance of performance optimization and user experience. Working on Apexpoint provided practical insights into the e-commerce industry, particularly in creating seamless and visually appealing interfaces that drive customer engagement and sales.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: ApexpointImg,
    projectUrl:
      "https://apexpointv2.vercel.app/?fbclid=IwAR1YMfLzhpUTJEygLz9CuZlkFhtD0mkqQXPM8H4wHmsCwXdsTbavF-FCs5U",
  },
  {
    title: "FormApp",
    description:
      "A project related to Football. I was the front-end developer. It has features like queuing, booking and crud.",
    paragraph:
      "The FormApp project was centered around creating a web application for football enthusiasts, focusing on features such as queuing, booking, and CRUD (Create, Read, Update, Delete) operations. As the front-end developer, I utilized TypeScript, Next.js, Tailwind, and Zustand to build a robust and interactive platform. This project challenged me to implement real-time updates and user notifications, ensuring a smooth and efficient booking process. Additionally, I integrated form validation and user authentication, making the app secure and user-friendly. The experience underscored the importance of efficient state management and responsive design in web applications.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Zustand"],
    imageUrl: FormappImg,
    projectUrl:
      "https://formapp-fe.vercel.app/?fbclid=IwAR3hRGK-PgwlURkPSvXgaWmZ0LxWh49WYz0Oyo6Bzn3p_T-1udmpaWP8fZM",
  },
  {
    title: "Codebility Page",
    description:
      "A project that is dedicated to supporting codebility which is our community together with my codevs.",
    paragraph:
      "The Codebility Page project was a collaborative effort aimed at supporting our coding community. Alongside my fellow developers, I worked on creating a platform using Next.js, ExpressJS, and TailwindCSS to foster learning and collaboration among coders. This project involved developing features such as user profiles, discussion forums, and resource sharing. By focusing on a community-driven approach, we aimed to create an inclusive and supportive environment for both novice and experienced programmers. The project highlighted the significance of teamwork and effective communication in achieving a common goal, as well as the technical skills required to build a full-fledged community platform.",
    tags: ["Next.js", "ExpressJS", "TailwindCSS"],
    imageUrl: CodebilityImg,
    projectUrl: "https://codebility-fe.vercel.app/",
  },
  {
    title: "Pos Malaysia",
    description:
      "A project that is dedicated to track and calculate earnings and records using dashboard system for Pos malaysia.",
    paragraph:
      "The Pos Malaysia project was dedicated to developing a dashboard system for tracking and calculating earnings and records for Pos Malaysia. Using Next.js and Ant Design, I created a comprehensive and intuitive interface that allows users to manage and analyze financial data efficiently. This project involved implementing various data visualization techniques, such as charts and graphs, to present information clearly and concisely. Additionally, I focused on ensuring data security and integrity, which are crucial in financial applications. Working on this project provided valuable experience in handling large datasets and creating user-friendly, data-driven applications.",
    tags: ["Next.js", "Ant Design"],
    imageUrl: PosMalaysia,
    projectUrl: "https://dutapos.com.my/",
  },
  {
    title: "Gesture Gloves",
    description:
      "A project that is dedicated to for our capstone that is connected to  a hardware",
    paragraph:
      "The Gesture Gloves project is our capstone endeavor aimed at developing advanced gesture-controlled gloves connected to a hardware interface. Leveraging cutting-edge technologies, this project focuses on creating an intuitive and responsive system that translates hand gestures into digital commands. This involved extensive work in hardware-software integration, signal processing, and user interface design to ensure seamless and accurate gesture recognition. Through this project, we gained significant experience in working with sensors, microcontrollers, and real-time data processing, culminating in a user-friendly and practical application.",
    tags: ["Next.js", "Shadcn", "MongoDB"],
    imageUrl: GestureglovesImg,
    projectUrl: "https://www.gesturegloves.online/",
  },
  {
    title: "PortfolioV2",
    description:
      "A project to store my projects and a way to contact me about any concerns",
    paragraph:
      "PortfolioV2 is a personal project designed to showcase my work and provide a platform for potential clients or employers to contact me. Utilizing React, Next.js, Tailwind, and Framer, I created a visually appealing and interactive portfolio that highlights my skills, projects, and achievements. This project allowed me to experiment with various web design techniques and animations, enhancing the overall user experience. The portfolio serves as a central hub for my professional information, including a detailed resume, project descriptions, and a contact form. It reflects my commitment to continuous learning and my ability to create polished, professional web applications.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: PortfolioV2Img,
    projectUrl: "/",
  },

  {
    title: "Trello Clone",
    description: "A project track a work progress designed like trello",
    paragraph:
      "Trello clone empowers you to streamline your workflow and collaborate seamlessly with a visually intuitive project management system. Inspired by Trello, TrelloX offers drag-and-drop functionality for organizing tasks across customizable boards and lists. Create, assign, and track progress on tasks with ease, ensuring everyone stays on the same page. Whether you're managing personal projects or collaborating with a team, TrelloX provides a powerful platform to boost your productivity and achieve your goals efficiently.",
    tags: ["React", "Next.js", "Tailwind", "Shadcn", "Express.js"],
    imageUrl: TrelloImg,
    projectUrl: "https://github.com/IvorG24",
  },
] as const;

export const skillsData = [
  {
    title: "HTML",
    titleLogo: React.createElement(IoLogoHtml5),
    logoColor: "orange",
  },
  {
    title: "CSS",
    titleLogo: React.createElement(FaCss3),
    logoColor: "#2965f1",
  },
  {
    title: "TailwindCSS",
    titleLogo: React.createElement(SiTailwindcss),
    logoColor: "skyblue",
  },
  {
    title: "Sass",
    titleLogo: React.createElement(FaSass),
    logoColor: "pink",
  },
  {
    title: "JavaScript",
    titleLogo: React.createElement(IoLogoJavascript),
    logoColor: "yellow",
  },
  {
    title: "TypeScript",
    titleLogo: React.createElement(SiTypescript),
    logoColor: "#2965f1",
  },
  {
    title: "React.Js",
    titleLogo: React.createElement(IoLogoReact),
    logoColor: "skyblue",
  },
  {
    title: "Next.Js",
    titleLogo: React.createElement(TbBrandNextjs),
    logoColor: "black",
  },
  {
    title: "Git",
    titleLogo: React.createElement(FaGithub),
    logoColor: "orange",
  },
  {
    title: "Express.Js",
    titleLogo: React.createElement(SiExpress),
    logoColor: "white",
  },

  {
    title: "Node.Js",
    titleLogo: React.createElement(FaNodeJs),
    logoColor: "green",
  },
  {
    title: "MongoDB",
    titleLogo: React.createElement(DiMongodb),
    logoColor: "lightgreen",
  },
  {
    title: "PostgreSql",
    titleLogo: React.createElement(BiLogoPostgresql),
    logoColor: "#2965f1",
  },
  {
    title: "Mysql",
    titleLogo: React.createElement(SiMysql),
    logoColor: "lightorange",
  },
  {
    title: "Redux",
    titleLogo: React.createElement(SiRedux),
    logoColor: "violet",
  },
  {
    title: "React Query",
    titleLogo: React.createElement(SiReactquery),
    logoColor: "#ff474c",
  },
] as const;
