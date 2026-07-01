# who-am-i

A personal portfolio and writing site for Anirudh Sharma. The app presents a short profile, selected projects, interests, contact links, blog posts, and speaking history in a minimal editorial layout with light/dark theme support.

## What This Project Does

- Serves a personal homepage with profile copy, project links, interests, education, and social/contact links.
- Provides a writing section backed by local React content modules in `src/blog/posts.tsx`.
- Provides a speaking page backed by local structured data in `src/speaking.ts`.
- Uses TanStack Router/TanStack Start with Vite, React 19, Tailwind CSS, Radix UI primitives, and lucide icons.
- Includes Vercel-oriented build support through `vercel.json` and `build-vercel.mjs`.

## Running Locally

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
```

## What Can Be Improved

- Add automated tests for routing, content rendering, and theme toggling so future content or layout changes are easier to verify.
- Move blog and speaking content into Markdown/MDX or a small CMS-like content layer to make updates less code-heavy.
- Replace inline SVG social icons with a consistent icon source where possible, matching the existing `lucide-react` dependency.
- Add project metadata such as screenshots, dates, or categories to make the portfolio easier to scan as the project list grows.
- Add SEO and sharing metadata per blog post, including Open Graph fields and canonical URLs.
