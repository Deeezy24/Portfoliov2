"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { links } from "@/lib/data";
import ThemeSwitch from "@/components/Module/theme-switch";
import CommandPalette from "@/components/Module/command-palette";

export default function Header() {
  const pathname = usePathname();
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <header className="sticky top-0 z-50 border-b backdrop-blur-md border-gray-200/70 bg-surface/85">
        <div className="flex gap-4 items-center px-6 mx-auto max-w-5xl h-16">
          <Link href="/" className="font-mono text-[15px] font-bold shrink-0">
            ivor<span className="text-accent">.</span>dev
          </Link>

          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex gap-1 font-mono text-[13px]">
              {links.slice(1).map((link) => {
                const active = pathname === link.hash;
                return (
                  <li key={link.hash}>
                    <Link
                      href={link.hash}
                      aria-current={active ? "page" : undefined}
                      className={clsx(
                        "inline-flex items-center px-2.5 h-9 rounded-md transition-colors",
                        active ? "bg-gray-100 text-ink" : "text-gray-500 hover:text-ink"
                      )}
                    >
                      {link.hash}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex gap-2 items-center ml-auto">
            <button
              type="button"
              onClick={() => setPaletteOpen(true)}
              aria-label="Open command line"
              className="inline-flex gap-3 items-center px-3 h-11 font-mono text-[12px] text-gray-500 rounded-lg border border-gray-200 transition-colors hover:text-ink hover:border-accent/60"
            >
              <span className="text-accent">$_</span>
              <span className="hidden sm:inline">run a command</span>
              <kbd className="hidden text-[10px] sm:inline">⌘K</kbd>
            </button>
            <ThemeSwitch />
          </div>
        </div>
        <nav aria-label="Main mobile" className="px-6 pb-2 md:hidden">
          <ul className="flex flex-wrap gap-x-1 font-mono text-[12px]">
            {links.slice(1).map((link) => (
              <li key={link.hash}>
                <Link
                  href={link.hash}
                  aria-current={pathname === link.hash ? "page" : undefined}
                  className={clsx(
                    "inline-flex items-center px-2 h-9 rounded-md",
                    pathname === link.hash ? "bg-gray-100 text-ink" : "text-gray-500"
                  )}
                >
                  {link.hash}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
