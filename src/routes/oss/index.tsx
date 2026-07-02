import { createFileRoute, Link } from "@tanstack/react-router";
import { content } from "@/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/oss/")({
  component: OssPage,
  head: () => ({
    meta: [
      { title: `OSS — ${content.displayName}` },
      {
        name: "description",
        content: "Open-source contributions by Anirudh Sharma.",
      },
    ],
  }),
});

function OssPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ThemeToggle />

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="mb-12">
          <Link
            to="/"
            className="text-muted-foreground hover:text-foreground transition-colors text-base"
          >
            ← Back home
          </Link>
        </div>

        <h1
          className="font-normal mb-4 text-heading-accent"
          style={{ fontSize: "2.5rem", lineHeight: 1 }}
        >
          open source
        </h1>

        <p
          className="mb-16 text-muted-foreground"
          style={{ fontSize: "1.2rem", lineHeight: "1.6rem" }}
        >
          contributions to tools and infrastructure I use and care about.
        </p>

        <div className="space-y-10">
          {content.openSource.map((contribution) => (
            <article key={contribution.project}>
              <h2
                className="font-normal mb-2"
                style={{ fontSize: "1.5rem", lineHeight: 1.2 }}
              >
                <a
                  href={contribution.pullRequest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-70 transition-opacity"
                >
                  {contribution.project}
                </a>
              </h2>
              <p
                className="line-clamp-2 text-muted-foreground"
                style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}
              >
                {contribution.description}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
