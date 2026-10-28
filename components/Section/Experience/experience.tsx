import React from "react";
import Section from "@/components/Module/section";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <Section id="experience" title="experience" caption="where I've worked">
      <ol className="relative ml-1 border-l border-gray-200">
        {experiencesData
          .slice()
          .reverse()
          .map((item, i) => (
            <li key={item.title} className="relative pb-2 pl-6">
              <span
                aria-hidden="true"
                className={`absolute -left-[5px] top-[1.15rem] w-[9px] h-[9px] rounded-full border-2 border-surface ${
                  i === 0 ? "bg-accent" : "bg-gray-300"
                }`}
              />
              <details className="group" open={i === 0}>
                <summary className="flex flex-wrap gap-x-4 gap-y-1 justify-between items-baseline py-3 rounded-md cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-[15px] font-medium group-hover:text-accent">{item.title.trim()}</span>
                  <span className="font-mono text-[11px] text-gray-500">
                    {item.date}
                    <span aria-hidden="true" className="inline-block ml-3 transition-transform group-open:rotate-45 text-accent">
                      +
                    </span>
                  </span>
                </summary>
                <div className="pb-4">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-gray-500">{item.location}</p>
                  <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-gray-600">
                    {item.description.map((line) => (
                      <li key={line} className="flex gap-2">
                        <span aria-hidden="true" className="text-accent">▹</span>
                        {line.replace(/^-\s*/, "")}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
      </ol>
    </Section>
  );
}
