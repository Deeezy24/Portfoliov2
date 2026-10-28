# Pages and data

## Content lives in `lib/data.ts`

- `links`: nav (header path links, command palette, sitemap). `name` is the
  label, `hash` the route.
- `email`, `socials`: shared by the hero, contact section and command
  palette. Change them here only.
- `experiencesData`: oldest first. The **first** entry (education) feeds the
  About "studied" card. Append new roles at the end. The owner chose not to
  feature the current employer outside Experience, so don't add a
  "currently @" badge or card back.
- Hero and meta copy describe the work generically ("full-stack web apps",
  "generative AI"). Don't name specific frameworks there; the stack section
  lists them.
- `githubUser`: the account behind the home-page GitHub section
  (`components/Section/Github/github.tsx`). It fetches the public
  contribution calendar from github-contributions-api.jogruber.de at build
  time and refreshes daily (`revalidate: 86400`). If the fetch fails it
  shows a "see it on GitHub" link instead of failing the build.
- `skillGroups`: groups `skillsData` titles into the stack cards. A new
  skill must also be added to a group, or it lands under "other".
- `projectsData`: `type` is `"personal"` or `"project"` (freelance/work).
  The first project of each type is the featured, full-width card. Each entry
  needs `title`, `description`, `paragraph`, `tags`, `imageUrl` (a static
  import from `@/public`, or `""` for a placeholder tile) and `projectUrl`.
- Commented-out entries in `projectsData` are hidden on purpose. Don't delete
  or re-enable them unless asked.

## Project detail slugs

- `projectSlug` and `findProjectBySlug` in `lib/utils.ts` are the only slug
  logic: spaces become `-` and back again.
- So a title containing `-` or `/` won't round-trip. Keep titles to letters,
  digits and single spaces.
- `app/[id]/page.tsx` is a server component with `generateStaticParams` and
  `dynamicParams = false`. Every project is prebuilt and any other top-level
  path returns a real 404 (`app/not-found.tsx`). New projects are picked up
  on the next build.

## Adding a page

1. Add `app/<route>/page.tsx` that exports `metadata` (`title` and
   `description`) and renders one section component, like
   `app/skills/page.tsx`.
2. Put the section in `components/Section/<Name>/<name>.tsx`, wrapped in
   `components/Module/section.tsx` (`<Section id title caption>`).
3. Add a `links` entry; the nav, command palette and sitemap pick it up.

## Metadata and SEO

- `app/layout.tsx` sets `metadataBase` (https://portfolio-glorioso.vercel.app),
  the `%s | Mark Ivor Glorioso` title template, a canonical and Open Graph
  tags. Each route sets its own `title` and `description`.
- `app/sitemap.ts` (from `links` and `projectsData`) and `app/robots.ts` are
  generated. Keep the domain in sync with `metadataBase` if it changes.
