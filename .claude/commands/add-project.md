---
description: Add a project card + detail page to the portfolio from a short description
argument-hint: <title> <personal|project> <live URL> <what it is, stack>
---

Add the project described in `$ARGUMENTS` to `projectsData`.

1. Read `.claude/rules/pages-and-data.md` (slug rules) and the last few
   `projectsData` entries in `lib/data.ts` for the exact shape.
2. Check the title: letters, digits and single spaces only, and unique
   (case-insensitive) among `projectsData` titles. Otherwise propose a safe
   title and stop.
3. Image: the user puts a screenshot in `public/` (ask for the file name if
   it isn't there). Add a static import at the top of `lib/data.ts` next to
   the other `@/public/...` imports.
4. Append the entry with `type`, `title`, `description` (one or two
   sentences, card), `paragraph` (detail page), `tags` (match existing tag
   spelling, e.g. "Next.js", "Tailwind"), `imageUrl` and `projectUrl`. Use
   only facts the user gave; ask for anything missing.
5. Verify with `npm run build`, then open `/<Title-With-Dashes>` in
   `npm run dev` and confirm it isn't "Project Not Found".
6. Report the diff and the detail URL. Don't commit unless asked.
