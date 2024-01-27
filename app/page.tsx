import About from "@/components/Section/About/about";
import Contact from "@/components/Section/Contact/contact";
import Experience from "@/components/Section/Experience/experience";
import Intro from "@/components/Section/Introduction/intro";
import Projects from "@/components/Section/Projects/projects";
import SectionDivider from "@/components/Module/section-divider";
import Skills from "@/components/Section/Skills/skills";
import { Suspense } from 'react';

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
    <p className="ml-2 text-gray-600">Loading...</p>
  </div>
);

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Suspense fallback={<LoadingSpinner />}>
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </Suspense>
    </main>
  );
}
