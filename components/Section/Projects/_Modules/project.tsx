import { projectsData } from "@/lib/data";
import { projectSlug } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type ProjectProps = (typeof projectsData)[number] & { featured?: boolean };

// For projects without a screenshot (imageUrl: "").
export function NoImage({ title }: { title: string }) {
  return (
    <div className="flex relative justify-center items-center w-full h-full">
      <div aria-hidden="true" className="absolute inset-0 opacity-20 dots" />
      <span className="relative font-mono text-3xl font-bold text-gray-400">
        {title.split(/\s+/).map((w) => w[0]).join("")}
        <span className="text-accent">_</span>
      </span>
    </div>
  );
}

// The first card of each tab spans both columns with the image beside the text.
export default function Project({ title, description, tags, imageUrl, featured }: ProjectProps) {
  return (
    <Link
      href={`/${projectSlug(title)}`}
      className={clsx(
        "group grid gap-4 p-4 rounded-2xl border border-gray-200 transition-colors bg-surface hover:border-accent/60",
        featured && "sm:col-span-2 sm:grid-cols-2 sm:items-center"
      )}
    >
      <div className="overflow-hidden rounded-xl border border-gray-200 aspect-[16/10] bg-gray-100">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            placeholder="blur"
            sizes="(min-width: 640px) 380px, 100vw"
            className="object-cover object-top w-full h-full transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <NoImage title={title} />
        )}
      </div>
      <div className="flex flex-col h-full">
        {featured && (
          <span className="mb-2 font-mono text-[10px] uppercase tracking-wider text-accent">★ featured</span>
        )}
        <h3 className="font-mono text-base font-bold leading-tight">{title}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-gray-600 line-clamp-3">{description}</p>
        <ul className="flex flex-wrap gap-1.5 pt-4 mt-auto">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-gray-300 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-gray-500"
            >
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-4 font-mono text-[11px] uppercase tracking-wider text-gray-500 group-hover:text-accent">
          read more →
        </span>
      </div>
    </Link>
  );
}
