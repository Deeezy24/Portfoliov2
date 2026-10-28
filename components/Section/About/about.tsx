import React from "react";
import { GraduationCap, Search, Gamepad2 } from "lucide-react";
import Section from "@/components/Module/section";
import { experiencesData } from "@/lib/data";

// First entry in experiencesData is education (see lib/data.ts).
const education = experiencesData[0];

const facts = [
  { icon: GraduationCap, label: "studied", value: "BS Computer Engineering", sub: `${education.title} · ${education.date}` },
  { icon: Search, label: "looking for", value: "Full-time AI & Software Engineer role", sub: "full-stack web · generative AI" },
  { icon: Gamepad2, label: "off the clock", value: "Games, movies, outdoors", sub: "and learning about motorcycles" },
];

export default function About() {
  return (
    <Section id="about" title="about" caption="who I am">
      <p className="max-w-2xl text-xl leading-snug text-ink">
        Computer Engineering grad turned AI &amp; software engineer. I like the
        logic of programming and the satisfaction of a hard bug{" "}
        <span className="text-accent">finally fixed</span>.
      </p>

      <ul className="grid gap-3 mt-8 sm:grid-cols-3">
        {facts.map((fact) => (
          <li key={fact.label} className="flex gap-3 p-4 rounded-2xl border border-gray-200 bg-gray-50/60">
            <span className="flex justify-center items-center w-9 h-9 rounded-lg border border-gray-200 shrink-0 bg-surface text-accent">
              <fact.icon className="w-4 h-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-gray-500">{fact.label}</span>
              <span className="block mt-0.5 text-[14px] font-medium">{fact.value}</span>
              <span className="block mt-0.5 text-[12px] text-gray-500">{fact.sub}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-10 space-y-5 max-w-2xl text-[15px] leading-relaxed text-gray-600">
        <p>
          After earning my degree in{" "}
          <strong className="font-medium text-ink">Computer Engineering</strong>, I went all in on
          software. University gave me a foundation in logic, algorithms and system design; a
          front-end bootcamp taught me to turn that into responsive interfaces people enjoy using,
          and left me with a habit of clean, readable code.
        </p>
        <p>
          What keeps me hooked is <strong className="font-medium text-ink">problem solving</strong>:
          tracking down a stubborn bug, or making a slow feature fast. I've worked on everything from
          solo personal apps to team-built platforms, caring about maintainable architecture, solid
          APIs and good version-control habits. These days more of that goes into{" "}
          <strong className="font-medium text-ink">generative AI</strong>, building features where
          LLMs do real work inside a product.
        </p>
        <p>
          I'm looking for a{" "}
          <strong className="font-medium text-ink">full-time role as an AI &amp; Software Engineer</strong>{" "}
          where I can ship meaningful work and keep growing as an engineer.
        </p>
        <p>
          <em>Off the clock</em>: video games, movies, the outdoors, picking up something new, and
          lately, motorcycles.
        </p>
      </div>
    </Section>
  );
}
