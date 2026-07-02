# who-am-i

A personal website for Anirudh Sharma. The site introduces Anirudh, lists current projects and interests, and hosts lightweight writing and speaking pages.

## What This Project Contains

- A home page with a short bio, interests, project links, contact links, and a live age counter.
- A writing section backed by statically defined blog posts in React.
- A speaking section for upcoming and past talks.
- Light and dark themes with local preference persistence.
- Vercel-oriented build output for deployment.

## Tech Stack

- React 19
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS 4
- shadcn-style UI primitives with Radix UI components
- TypeScript

## Project Structure

- `src/content.ts` stores the main profile, projects, interests, education, and contact content.
- `src/blog/posts.tsx` stores blog metadata and post bodies.
- `src/speaking.ts` stores speaking engagement data.
- `src/routes/` defines the home, writing, blog post, speaking, root, error, and 404 routes.
- `src/styles.css` defines the typography, theme tokens, and global styles.
- `build-vercel.mjs` adapts the production build output for Vercel.

## Local Development

Install dependencies:

```sh
npm install
```

Start the dev server:

```sh
npm run dev
```

Run checks:

```sh
npm run lint
npm run build
```

Build for Vercel:

```sh
npm run build:vercel
```
