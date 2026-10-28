import About from "@/components/Section/About/about";
import Contact from "@/components/Section/Contact/contact";
import Experience from "@/components/Section/Experience/experience";
import Github from "@/components/Section/Github/github";
import Intro from "@/components/Section/Introduction/intro";
import Projects from "@/components/Section/Projects/projects";
import Skills from "@/components/Section/Skills/skills";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Github />
      <Contact />
    </>
  );
}
