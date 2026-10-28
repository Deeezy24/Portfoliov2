# Code style

- TypeScript strict. Import with the `@/` alias (`@/lib/data`,
  `@/components/...`), as the existing files do.
- Components are default-exported functions. File names are kebab-case
  (`section-heading.tsx`); folders under `components/Section/` are PascalCase.
- Default to server components. Add `"use client"` only for state, effects,
  context or event handlers (today: header, command palette, theme switch,
  projects tabs, contact form). About, Skills, Experience and Intro are server
  components; keep them that way. Experience expands with native
  `<details>`, not JS.
- Styling is Tailwind utility classes inline. Colors are theme tokens:
  `ink` (text), `surface` (background), `accent` (sky, the one brand color)
  and `gray-50…900`, all CSS variables in `app/globals.css` that flip under
  `html.dark`. So don't add `dark:` color pairs, and don't use raw palette
  colors (`slate-*`, `sky-*`, hex values) in components.
- Look ("editor" theme): sticky top bar with path links (`/about`) and the
  `$_ ⌘K` command palette; bento-card hero; sections use
  `components/Module/section.tsx` (sticky `// title` gutter on the left,
  content on the right). Monochrome, thin `border-gray-200` lines, cards
  `rounded-2xl border bg-gray-50/60`, JetBrains Mono (`font-mono`) for
  headings and micro-labels, Inter for body text.
- Icons come from `lucide-react` (UI) or `react-icons` (brand logos in
  `skillsData`); both are already installed.
- Images: static imports from `@/public/...` for local files. Remote images
  must be on a host in `next.config.js` `images.remotePatterns` (only
  `images.unsplash.com` today).
- Server-side input: validate with `validateString` from `lib/utils.ts` and
  turn errors into strings with `getErrorMessage`, as `actions/sendEmail.ts`
  does.
- ESLint is `next/core-web-vitals` with `react/no-unescaped-entities` off. No
  Prettier config, so match the indentation of the file you edit.
