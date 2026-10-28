import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projectsData } from "@/lib/data";
import { findProjectBySlug, projectSlug } from "@/lib/utils";
import { NoImage } from "@/components/Section/Projects/_Modules/project";

type Props = { params: { id: string } };

// Every project page is built at build time; any other top-level path 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return projectsData.map((p) => ({ id: projectSlug(p.title) }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = findProjectBySlug(projectsData, params.id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: project.imageUrl ? { images: [project.imageUrl.src] } : undefined,
  };
}

export default function ProjectDetails({ params }: Props) {
  const project = findProjectBySlug(projectsData, params.id);
  if (!project) notFound();

  return (
    <article className="grid gap-10 pt-10 pb-16 md:grid-cols-[11rem_1fr]">
      <aside className="md:sticky md:top-24 md:self-start">
        <Link
          href="/projects"
          className="inline-flex gap-1.5 items-center font-mono text-[11px] uppercase tracking-wider text-gray-500 hover:text-accent"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          all projects
        </Link>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-wider text-accent">
          {project.type === "personal" ? "personal project" : "freelance / work"}
        </p>
        <ul className="flex flex-wrap gap-1.5 mt-4 md:flex-col md:items-start">
          {project.tags.map((tag) => (
            <li key={tag} className="px-2 py-0.5 font-mono text-[11px] text-gray-600 rounded-md border border-gray-200">
              {tag}
            </li>
          ))}
        </ul>
      </aside>

      <div className="min-w-0">
        <h1 className="font-mono text-3xl font-bold tracking-tight leading-tight sm:text-4xl">
          {project.title}
          <span className="text-accent">_</span>
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-600">{project.description}</p>
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex gap-2 items-center px-4 mt-6 h-11 text-sm font-medium rounded-lg transition-opacity bg-ink text-surface hover:opacity-85"
        >
          View live project
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>

        <div className="overflow-hidden mt-10 rounded-2xl border border-gray-200 bg-gray-100">
          {project.imageUrl ? (
            <Image
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
              placeholder="blur"
              sizes="(min-width: 1024px) 760px, 100vw"
              className="w-full h-auto"
              priority
            />
          ) : (
            <div className="aspect-[16/9]">
              <NoImage title={project.title} />
            </div>
          )}
        </div>

        <h2 className="mt-12 mb-4 font-mono text-lg font-bold">
          <span className="text-accent">{"//"}</span> about this project
        </h2>
        <p className="max-w-2xl text-[15px] leading-relaxed text-gray-600">{project.paragraph}</p>
      </div>
    </article>
  );
}
