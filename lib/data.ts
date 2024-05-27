import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ApexpointImg from "@/public/Apexpoint.png";
import FormappImg from "@/public/formappImg.png";
import PortfolioV2Img from "@/public/Porfoliov2.png";
import JavaCalcuImg from "@/public/Javacalcu.png";
import NetgoImg from "@/public/Netgo.png";
import PosMalaysia from "@/public/pos_malaysia.png";
import CodebilityImg from "@/public/codebility.png";
import GestureglovesImg from "@/public/GestureglovesImg.png";
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
    date: "2023-2024",
  },

  {
    title: "Studio20 Front-End Developer",
    location: "Remote",
    description:
      "I'm now a front-end developer working in Studio20 Malaysia Based. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024",
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
    title: "Netgo Netflix Clone",
    description:
      "A project that clones Netlflix. It is a school project that has full-stack support.",
    paragraph:
      "The Netgo Netflix Clone project was a comprehensive full-stack development exercise aimed at creating a functional replica of the popular streaming service, Netflix. As a school project, it involved both front-end and back-end development, using Tailwind for styling, PHP for server-side scripting, and JavaScript for dynamic content management. This project provided valuable experience in handling user authentication, integrating API data, and implementing video streaming capabilities. It also involved setting up a database to manage user data and preferences, showcasing my ability to create scalable and user-friendly web applications.",
    tags: ["Tailwind", "Php", "JavaScript"],
    imageUrl: NetgoImg,
    projectUrl: "https://github.com/IvorG24/Movie-api",
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
  "Ant Design",
  "MongoDB",
  "Express",
  "Php",
  "Framer Motion",
  "SQL",
] as const;
