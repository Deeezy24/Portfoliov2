import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { email, links, socials } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 mx-auto mt-10 mb-6 max-w-5xl">
      <div className="grid overflow-hidden relative gap-8 p-6 rounded-2xl border border-gray-200 sm:p-8 md:grid-cols-[1.4fr_1fr_1fr] bg-gray-50/60">
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.08] dots" />

        <div className="relative">
          <Link href="/" className="font-mono text-lg font-bold">
            ivor<span className="text-accent">.</span>dev
          </Link>
          <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-gray-600">
            Thanks for scrolling. Press <kbd className="px-1 font-mono text-[11px] rounded border border-gray-300 bg-surface">⌘K</kbd>{" "}
            to jump anywhere, or{" "}
            <a href={`mailto:${email}`} className="underline underline-offset-2 hover:text-accent">
              send me an email
            </a>
            .
          </p>
        </div>

        <nav aria-label="Footer" className="relative">
          <h2 className="font-mono text-[10px] uppercase tracking-wider text-gray-500">pages</h2>
          <ul className="grid grid-cols-2 gap-x-4 mt-3 font-mono text-[12px] md:grid-cols-1">
            {links.map((link) => (
              <li key={link.hash}>
                <Link href={link.hash} className="inline-flex items-center h-8 text-gray-600 hover:text-accent">
                  {link.hash === "/" ? "~/" : link.hash}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative">
          <h2 className="font-mono text-[10px] uppercase tracking-wider text-gray-500">elsewhere</h2>
          <ul className="mt-3 font-mono text-[12px]">
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-8 text-gray-600 hover:text-accent"
                >
                  {s.label}
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li>
              <a href="/CV_GLORIOSO.pdf" className="inline-flex items-center h-8 text-gray-600 hover:text-accent">
                resume.pdf
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 justify-between items-center px-1 pt-4 font-mono text-[11px] text-gray-500">
        <span>&copy; {new Date().getFullYear()} Mark Ivor Glorioso · built with next.js</span>
        <a href="#content" className="inline-flex gap-1 items-center h-8 hover:text-accent">
          back to top
          <ArrowUp className="w-3 h-3" aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
