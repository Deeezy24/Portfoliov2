"use client";
import React, { useState } from "react";
import clsx from "clsx";
import Section from "@/components/Module/section";
import { projectsData } from "@/lib/data";
import Project from "./_Modules/project";

const tabs = [
  { key: "personal", label: "personal" },
  { key: "project", label: "freelance / work" },
] as const;

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"personal" | "project">("personal");

  const shown = projectsData.filter((p) => p.type === activeTab);

  return (
    <Section id="projects" title="projects" caption="things I've built">
      <div role="group" aria-label="Project type" className="inline-flex p-1 mb-6 rounded-lg border border-gray-200 bg-gray-50">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            aria-pressed={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={clsx(
              "px-3 h-9 font-mono text-[12px] rounded-md transition-colors",
              activeTab === tab.key ? "bg-surface text-ink shadow-sm" : "text-gray-500 hover:text-ink"
            )}
          >
            {tab.label}
            <span className="ml-1.5 text-gray-400">{projectsData.filter((p) => p.type === tab.key).length}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {shown.map((project, i) => (
          <Project key={project.title} {...project} featured={i === 0} />
        ))}
      </div>
    </Section>
  );
}
