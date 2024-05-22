"use client";
import React from "react";
import SectionHeading from "../../Module/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./_Modules/project";
import { useSectionInView } from "@/lib/hooks";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();
  const { ref } = useSectionInView("Projects", 0.5);

  // Assuming the query parameter is 'category' to filter projects
  const query = new URLSearchParams(window.location.search);
  const title = query.get("title");
  console.log(title);

  const filteredProjects = title
    ? projectsData.filter((project) => project.title === title)
    : projectsData;

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {filteredProjects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
