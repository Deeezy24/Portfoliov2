import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCloudflare, FaDocker, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ApexpointImg from "@/public/Apexpoint.png";
import FormappImg from "@/public/formappImg.png";
import PortfolioV2Img from "@/public/Porfoliov2.png";
import JavaCalcuImg from "@/public/Javacalcu.png";
import TrelloImg from "@/public/TrelloImg.png";
import PosMalaysia from "@/public/pos_malaysia.png";
import CodebilityImg from "@/public/codebility.png";
import FormslyImg from "@/public/FormslyImg.png";
import NoirImg from "@/public/NoirImg.png";
import GeinieImg from "@/public/Geinie.png";
import HarmonyImg from "@/public/HarmonyImg.png";
import CascadingGraceImg from "@/public/CascadingGraceImg.png";
import RiversResidenceImg from "@/public/RiversResidenceImg.png";
import ObediImg from "@/public/ObediImg.png";
import ThreeRiversImg from "@/public/ThreeRiversImg.png";
import GestureglovesImg from "@/public/GestureglovesImg.png";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { SiFirebase, SiRedis, SiSupabase, SiTailwindcss, SiVercel } from "react-icons/si";
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
    hash: "/",
  },
  {
    name: "About",
    hash: "/about",
  },
  {
    name: "Projects",
    hash: "/projects",
  },
  {
    name: "Skills",
    hash: "/skills",
  },
  {
    name: "Experience",
    hash: "/experience",
  },
  {
    name: "Contact",
    hash: "/contact",
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
  {
    title: "Sta. Clara International Corp. Full Stack Developer",
    location: "Remote",
    description: [
      "- Worked closely with team members in a full stack development role.",
      "- Developed a responsive web application using Nextjs and Nodejs.",
      "- My key responsibilities include creating new features, handling database interaction, creating API endpoints, and maintaining the application's overall functionality.",
      "- I also handled the deployment of the application using Vercel.",
    ],
    icon: React.createElement(FaReact),
    date: "Jul 2024 - Dec 2024",
  },
  {
    title: "Freelance Full Stack Developer",
    location: "Remote",
    description: [
      "- Worked as a solo developer in a full stack development role.",
      "- Developed fully functional web applications using Nextjs and Nodejs from scratch based on client's requirements.",
      "- Plan the website's architecture, CI/CD pipeline, API Routes, Custom Server Handling, Database, Handling network and application layer protection, and design the UI/UX.",

    ],
    icon: React.createElement(FaReact),
    date: "Dec 2024 - Aug 2025",
  },
  {
    title: "Innovare HP",
    location: "Remote",
    description: [
      "- Leading the company’s technology vision, digital strategy, and system architecture.",
      "- Oversee end-to-end development and delivery of client platforms, from planning and design to deployment and maintenance.",
      "- Architect and implement scalable full-stack solutions using Next.js and Node.js based on business and client requirements.",
      "- Design and manage system architecture including APIs, databases, CI/CD pipelines, and custom server infrastructure.",
    ],
    icon: React.createElement(FaReact),
    date: "Aug 2024 – Present",
  }
] ;

export const projectsData = [
  {
    type: "personal",
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
    type: "project",
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
    type: "project",
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
    type: "project",
    title: "Codebility Page",
    description:
      "A project that is dedicated to supporting codebility which is our community together with my codevs.",
    paragraph:
      "The Codebility Page project was a collaborative effort aimed at supporting our coding community. Alongside my fellow developers, I worked on creating a platform using Next.js, ExpressJS, and TailwindCSS to foster learning and collaboration among coders. This project involved developing features such as user profiles, discussion forums, and resource sharing. By focusing on a community-driven approach, we aimed to create an inclusive and supportive environment for both novice and experienced programmers. The project highlighted the significance of teamwork and effective communication in achieving a common goal, as well as the technical skills required to build a full-fledged community platform.",
    tags: ["Next.js", "ExpressJS", "TailwindCSS"],
    imageUrl: CodebilityImg,
    projectUrl: "https://www.codebility.tech/",
  },
  {
    type: "project",
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
    type: "personal",
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
    type: "personal",
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
    type: "personal",
    title: "Geinie",
    description: "SaaS AI Summarization Tool",
    paragraph:
      "Geinie is a personal SaaS project focused on AI-powered content summarization. Built with React, Next.js, Tailwind CSS, and Framer Motion, Geinie offers users the ability to upload documents, articles, or text inputs and receive concise, intelligent summaries generated by advanced AI models. The project emphasizes both user experience and performance, featuring clean UI, smooth animations, and responsive design. Beyond showcasing my technical skills, Geinie reflects my interest in building AI-enhanced tools that simplify complex tasks and provide real value. The platform includes key features like summary history, API access, and user authentication—making it a comprehensive demonstration of a modern, full-stack SaaS application.",
    tags: ["React", "Next.js", "Nestjs", "Openai"],
    imageUrl: GeinieImg,
    projectUrl: "https://geeni-ai-nextjs.vercel.app/",
  },
  
  {
    type: "personal",
    title: "Trello Clone",
    description: "A project track a work progress designed like trello",
    paragraph:
      "Trello clone empowers you to streamline your workflow and collaborate seamlessly with a visually intuitive project management system. Inspired by Trello, TrelloX offers drag-and-drop functionality for organizing tasks across customizable boards and lists. Create, assign, and track progress on tasks with ease, ensuring everyone stays on the same page. Whether you're managing personal projects or collaborating with a team, TrelloX provides a powerful platform to boost your productivity and achieve your goals efficiently.",
    tags: ["React", "Next.js", "Tailwind", "Shadcn", "Express.js"],
    imageUrl: TrelloImg,
    projectUrl: "https://github.com/IvorG24",
  },
  {
    type: "project",
    title: "Formsly",
    description: "An internal project built for a company I worked for as a full stack developer. It handles HR forms, employee requests, support tickets, and inventory management.",
    paragraph:
      "Formsly is a robust internal system designed to streamline HR and operations workflows within the company. It enables employees to submit and track various requests such as leave forms, asset requests, and IT support tickets. The platform also includes an inventory management module, allowing teams to monitor and manage company assets effectively. Built with a modern tech stack and an intuitive UI, Formsly improves communication, accountability, and efficiency across departments.",
    tags: ["React", "Next.js", "Supabase", "Mantine UI"],
    imageUrl: FormslyImg,
    projectUrl: "https://formsly.io",
  },
  {
    type: "project",
    title: "Betting App",
    description: "A freelance project built for a client, providing a complete betting platform with real-time match data, user wallet management, and admin control features.",
    paragraph:
      "This Betting App allows users to place wagers on sports matches with a clean and modern interface. It includes user authentication, dynamic odds handling, wallet and transaction management, and an admin dashboard for managing games, users, and payouts. Built with React, Next.js, Supabase, and styled using Mantine UI, the app provides a seamless and secure betting experience across devices. The backend leverages Supabase for real-time updates and PostgreSQL for relational data handling.",
    tags: ["React", "Next.js", "Supabase", "Shadcn","Docker", "Cloudflare"],
    imageUrl: "",
    projectUrl: "https://github.com/IvorG24",
  },
  {
    type: "project",
    title: "Noir Clothing",
    description: "A freelance e-commerce project built for a clothing brand, featuring product browsing, cart functionality, and admin-level product management.",
    paragraph:
      "Noir Clothing is a sleek and responsive e-commerce platform designed for a fashion brand. It offers features like dynamic product listings, category filtering, shopping cart, checkout flow, and user authentication. Admins can manage product inventory, track orders, and update product details through a secure dashboard. The platform is built with React and Next.js, uses Supabase for backend services, and is styled with Shadcn UI. Deployment through vercel, ensuring a fast and reliable user experience.",
    tags: ["React", "Next.js", "Supabase", "Shadcn", "Vercel","HonoJS"],
    imageUrl: NoirImg, // Add your image import or URL here
    projectUrl: "https://noir-clothing.com",
  },
  // {
  //   type: "project",
  //   title: "Harmony Fort Worth",
  //   description:
  //     "A healthcare marketing website designed to showcase services, build trust, and drive patient inquiries for a senior and wellness-focused care provider.",
  //   paragraph:
  //     "Harmony Fort Worth is a modern healthcare marketing website built to clearly communicate services, values, and patient-focused care. The platform emphasizes clarity, accessibility, and conversion through well-structured service sections, inquiry forms, and responsive design. It features optimized content flow, clean UI components, and fast performance to support marketing campaigns and organic traffic. Built with React and Next.js, powered by Supabase for backend services, styled with Shadcn UI, and deployed on Vercel for reliability and scalability.",
  //   tags: ["React", "Astro", "Shadcn", "Framer"],
  //   imageUrl: HarmonyImg,
  //   projectUrl: "https://harmonyfortworth.com",
  // },
  // {
  //   type: "project",
  //   title: "Cascading Grace",
  //   description:
  //     "A healthcare marketing platform created to highlight compassionate care services and strengthen brand presence for a wellness-focused organization.",
  //   paragraph:
  //     "Cascading Grace is a healthcare marketing website focused on storytelling, trust-building, and service clarity. The site presents care offerings through structured sections, clear calls-to-action, and a calm, professional visual identity. Performance and accessibility were prioritized to ensure a seamless experience across devices. The project was built using React and Next.js, integrates Supabase for backend functionality, uses Shadcn UI for consistent styling, and is deployed on Vercel for fast global delivery.",
  //   tags: ["Tanstack Start", "Shadcn", "Framer"],
  //   imageUrl: CascadingGraceImg,
  //   projectUrl: "https://cascadinggrace.com",
  // },
  // {
  //   type: "project",
  //   title: "Rivers Residence",
  //   description:
  //     "A healthcare-focused marketing website designed to promote residential care services and generate qualified inquiries.",
  //   paragraph:
  //     "Rivers Residence is a healthcare marketing site built to present residential care services in a clear, professional, and approachable way. The platform focuses on service visibility, user-friendly navigation, and lead generation through optimized inquiry flows. It features responsive layouts, SEO-friendly structure, and clean UI components. Built with React and Next.js, supported by Supabase, styled with Shadcn UI, and deployed on Vercel to ensure speed and reliability.",
  //   tags: ["React", "Astro"],
  //   imageUrl: RiversResidenceImg,
  //   projectUrl: "https://riversresidence.com",
  // },
  // {
  //   type: "project",
  //   title: "Obedi Home",
  //   description:
  //     "A healthcare marketing website focused on home-based care services, designed to improve visibility and patient engagement.",
  //   paragraph:
  //     "Obedi Home is a healthcare marketing platform built to support home care providers by clearly communicating services, values, and care processes. The site prioritizes accessibility, trust, and conversion through clean layouts, intuitive navigation, and responsive design. It is optimized for performance and marketing scalability. Developed with React and Next.js, powered by Supabase, styled using Shadcn UI, and deployed on Vercel for consistent uptime.",
  //   tags: ["React", "Astro"],
  //   imageUrl: ObediImg,
  //   projectUrl: "https://obedihome.com",
  // },
  
  // {
  //   type: "project",
  //   title: "Three Rivers Health",
  //   description:
  //     "A healthcare marketing website built to promote clinical services, enhance brand credibility, and support patient outreach.",
  //   paragraph:
  //     "Three Rivers Health is a professionally designed healthcare marketing website focused on service clarity, patient trust, and lead generation. The platform showcases healthcare offerings through structured content, clear CTAs, and responsive layouts. Performance, SEO, and maintainability were key considerations throughout development. The site is built with React and Next.js, uses Supabase for backend services, styled with Shadcn UI, and deployed on Vercel for speed and reliability.",
  //   tags: ["React", "Astro",  "Shadcn"],
  //   imageUrl: ThreeRiversImg,
  //   projectUrl: "https://trbh.com",
  // }
  
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
  {
    title: "Hono",
    titleLogo: React.createElement(FaNodeJs),
    logoColor: "green",
  },
  {
    title: "Supabase",
    titleLogo: React.createElement(SiSupabase),
    logoColor: "green",
  },
  {
    title: "Docker",
    titleLogo: React.createElement(FaDocker),
    logoColor: "#2965f1",
  },
  {
    title: "Cloudflare",
    titleLogo: React.createElement(FaCloudflare),
    logoColor: "orange",
  },
  {
    title: "Vercel",
    titleLogo: React.createElement(SiVercel),
    logoColor: "black",
  },
  {
    title: "Mantine UI",
    titleLogo: React.createElement(FaCss3),
    logoColor: "#2965f1",
  },
  {
    title: "Shadcn",
    titleLogo: React.createElement(FaCss3),
    logoColor: "#2965f1",
  },
  {
    title: "Firebase",
    titleLogo: React.createElement(SiFirebase),
    logoColor: "red",
  },
  {
    title: "Redis",
    titleLogo: React.createElement(SiRedis),
    logoColor: "red",
  },
] as const;
