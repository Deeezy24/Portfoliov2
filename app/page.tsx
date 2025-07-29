import About from "@/components/Section/About/about";
import Contact from "@/components/Section/Contact/contact";
import Experience from "@/components/Section/Experience/experience";
import Intro from "@/components/Section/Introduction/intro";
import Projects from "@/components/Section/Projects/projects";
import SectionDivider from "@/components/Module/section-divider";
import Skills from "@/components/Section/Skills/skills";

export default async function Home() {

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />

      {/* <About /> */}
      {/* <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact /> */}
    </main>
  );
}
