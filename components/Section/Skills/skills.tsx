import React from "react";
import Section from "@/components/Module/section";
import { skillGroups, skillsData } from "@/lib/data";

type Skill = (typeof skillsData)[number];

const grouped = new Set<string>(skillGroups.flatMap((g) => g.skills));
const groups: { name: string; skills: Skill[] }[] = [
  ...skillGroups.map((g) => ({
    name: g.name,
    skills: skillsData.filter((s) => (g.skills as readonly string[]).includes(s.title)),
  })),
  { name: "other", skills: skillsData.filter((s) => !grouped.has(s.title)) },
].filter((g) => g.skills.length > 0);

export default function Skills() {
  return (
    <Section id="skills" title="stack" caption="what I build with">
      <div className="grid gap-3 sm:grid-cols-2">
        {groups.map((group) => (
          <div key={group.name} className="p-5 rounded-2xl border border-gray-200 bg-gray-50/60">
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="font-mono text-[12px] uppercase tracking-wider">
                <span className="text-accent">▹</span> {group.name}
              </h3>
              <span className="font-mono text-[11px] text-gray-500">{String(group.skills.length).padStart(2, "0")}</span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill.title}
                  className="inline-flex gap-2 items-center px-2.5 h-9 font-mono text-[12px] text-gray-600 rounded-lg border border-gray-200 transition-colors bg-surface hover:border-accent/60 hover:text-ink"
                >
                  <span aria-hidden="true" className="text-[14px] text-gray-500">
                    {skill.titleLogo}
                  </span>
                  {skill.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
