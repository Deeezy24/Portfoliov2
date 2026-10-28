# portfolio-v2

Personal portfolio of Mark Ivor Glorioso. Next.js 13.5 App Router, React 18,
TypeScript (strict), Tailwind 3 (`darkMode: "class"`), framer-motion, Resend
for the contact form. Remote: `github.com/Deeezy24/Portfoliov2`. Live on
Vercel: https://portfolio-glorioso.vercel.app/

## Commands

npm only (`package-lock.json`).

- `npm run dev`: local dev server
- `npm run build`: production build; the only real check (no test suite)
- `npm run lint`: `next lint` (`next/core-web-vitals`)

## Layout

- `app/`: routes. `/` stacks every section (Intro, About, Projects, Skills,
  Experience, Contact); `/about`, `/projects`, `/skills`, `/experience`,
  `/contact` each wrap one section component. `app/layout.tsx` holds the
  sticky top bar (`components/Section/Header`, including the ⌘K command
  palette), the theme script, site metadata and the `max-w-5xl` column.
  `app/sitemap.ts`, `app/robots.ts` and `app/not-found.tsx` are there too.
  `app/[id]/page.tsx` is the statically built project detail page; other
  top-level paths 404.
- `components/Section/<Name>/`: one folder per page section;
  `components/Module/`: small shared pieces.
- `lib/data.ts`: all content (nav `links`, `email`, `socials`,
  `experiencesData`, `projectsData`, `skillsData`). Copy changes go here,
  not in components.
- `actions/sendEmail.ts`: server action that sends the contact form through
  Resend; `email/contact-form-email.tsx` is the email template.
- `context/theme-context.tsx`: theme provider (`dark` class on `<html>`).

## Principles

- Never invent facts about the owner: jobs, dates, clients, skills or project
  links. Ask if a value is missing.
- Smallest change that matches the surrounding code. No new dependencies for
  a few lines.

## Version control

Never push, force push or deploy. Commit only when asked, on a branch.

## Restrictions

- Never read or print `.env*` (holds `RESEND_API_KEY`).
- Don't edit `.next/` or `node_modules/`.

## Rules

@.claude/rules/code-style.md
@.claude/rules/pages-and-data.md
