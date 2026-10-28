import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Download } from "lucide-react";
import { projectsData, skillsData, socials } from "@/lib/data";
import portrait from "@/public/ivor.jpg";

const stats = [
  { value: "4+", unit: "yrs", label: "building", href: "/experience" },
  { value: `${projectsData.length}`, unit: "", label: "projects shipped", href: "/projects" },
  { value: `${skillsData.length}`, unit: "", label: "tools in stack", href: "/skills" },
];

const card = "rounded-2xl border border-gray-200 bg-gray-50/60";

export default function Intro() {
  return (
    <section id="home" aria-label="Introduction" className="grid gap-3 pt-8 pb-16 md:grid-cols-12 md:pt-14">
      {/* main card */}
      <div className={`${card} relative overflow-hidden p-6 sm:p-8 md:col-span-8 reveal`}>
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.12] dots" />
        <div className="relative">
          <p className="font-mono text-[12px] text-gray-500">
            <span className="text-accent">~/ivor</span> $ whoami
            <span aria-hidden="true" className="inline-block ml-1 w-[7px] h-[13px] align-[-2px] bg-accent cursor-blink" />
          </p>
          <h1 className="mt-4 font-mono text-4xl font-bold tracking-tight leading-[1.05] sm:text-5xl">
            Mark Ivor
            <br />
            Glorioso<span className="text-accent">_</span>
          </h1>
          <p className="mt-3 font-mono text-[12px] uppercase tracking-wider text-accent">AI &amp; Software Engineer</p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-600">
            I build full-stack web apps end to end, from the first sketch to
            production. Lately my focus is <span className="text-ink">generative AI</span>: putting LLMs to work inside real products.
          </p>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-gray-600">
            I like taking a half-formed idea and shipping it as something
            people can use. Most days, that means building something new.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <Link
              href="/contact"
              className="inline-flex items-center px-4 h-11 text-sm font-medium rounded-lg transition-opacity bg-ink text-surface hover:opacity-85"
            >
              Say hello
            </Link>
            <a
              href="/CV_GLORIOSO.pdf"
              download
              className="inline-flex gap-2 items-center px-4 h-11 text-sm font-medium rounded-lg border border-gray-300 transition-colors bg-surface hover:border-ink"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* photo card */}
      <div className={`${card} group overflow-hidden relative min-h-[20rem] md:col-span-4 md:row-span-2 reveal [animation-delay:80ms]`}>
        <Image
          src={portrait}
          alt="Portrait of Mark Ivor Glorioso"
          fill
          priority
          placeholder="blur"
          sizes="(min-width: 768px) 330px, 100vw"
          className="object-cover object-[50%_35%] grayscale contrast-[1.05] transition duration-500 group-hover:grayscale-0"
        />
        {/* Fades the busy café background into the card. */}
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent pointer-events-none from-gray-50" />
      </div>

      {/* stats + socials row */}
      <div className="grid grid-cols-3 gap-3 md:col-span-8">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href} className={`${card} group p-4 transition-colors hover:border-accent/60`}>
            <span className="flex gap-1 items-baseline font-mono text-2xl font-bold leading-none">
              {stat.value}
              {stat.unit && <span className="text-sm text-gray-500">{stat.unit}</span>}
            </span>
            <span className="block mt-2 font-mono text-[10px] uppercase tracking-wider text-gray-500 group-hover:text-accent">
              {stat.label}
            </span>
          </Link>
        ))}
      </div>

      <ul className={`${card} flex flex-wrap gap-x-5 gap-y-2 items-center px-5 py-4 font-mono text-[12px] text-gray-500 md:col-span-12`}>
        <li className="text-gray-400">find me on</li>
        {socials.map((s) => (
          <li key={s.href}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-accent">
              {s.label}
              <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </li>
        ))}
        <li className="ml-auto hidden sm:block">
          press <kbd className="px-1.5 py-0.5 rounded border border-gray-300 bg-surface">⌘K</kbd> to explore
        </li>
      </ul>
    </section>
  );
}
