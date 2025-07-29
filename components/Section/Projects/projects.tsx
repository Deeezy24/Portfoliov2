"use client";
import React, { useState } from "react";
import SectionHeading from "../../Module/section-heading";
import { projectsData } from "@/lib/data";
import Project from "./_Modules/project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [activeTab, setActiveTab] = useState<"personal" | "project">("personal");

  const personalProjects = projectsData.filter((p) => p.type === "personal");
  const freelanceProjects = projectsData.filter((p) => p.type === "project");

  return (
    <section ref={ref} id="projects" className="p-10 mb-28 scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setActiveTab("personal")}
          className={(

            activeTab === "personal" ? "underline" : ""
          )}
        >
          Personal Projects
        </button>
        <button
          onClick={() => setActiveTab("project")}
          className={(

            activeTab === "project" ? "underline" : ""
          )}
        >
          Freelance / Work Projects
        </button>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
        {(activeTab === "personal" ? personalProjects : freelanceProjects).map(
          (project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          )
        )}
      </div>
    </section>
  );
}
