import React from "react";
import Link from "next/link";

type SectionProps = {
  id: string;
  title: string;
  caption: string;
  more?: { href: string; label: string };
  children: React.ReactNode;
};

// Editor-style section: a sticky "// title" gutter on the left, content on the right.
export default function Section({ id, title, caption, more, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid gap-6 py-16 border-t border-gray-200 scroll-mt-24 first:border-t-0 first:pt-10 md:grid-cols-[11rem_1fr] md:gap-10"
    >
      <header className="md:sticky md:top-24 md:self-start">
        <h2 id={`${id}-title`} className="font-mono text-lg font-bold">
          <span className="text-accent">{"//"}</span> {title}
        </h2>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-gray-500">{caption}</p>
        {more && (
          <Link
            href={more.href}
            className="inline-block mt-4 font-mono text-[11px] uppercase tracking-wider text-gray-500 hover:text-accent"
          >
            {more.label} →
          </Link>
        )}
      </header>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
