import { createFileRoute, Link } from "@tanstack/react-router";
import { blogPosts } from "@/blog/posts";
import { content } from "@/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/blog/")({
  component: BlogIndex,
  head: () => ({
    meta: [
      { title: `Writing — ${content.displayName}` },
      {
        name: "description",
        content: "Thoughts on engineering, systems, and building products.",
      },
    ],
  }),
});

function BlogIndex() {
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
          writing
        </h1>

        <p
          className="mb-16 text-muted-foreground"
          style={{ fontSize: "1.2rem", lineHeight: "1.6rem" }}
        >
          thoughts on engineering, systems, and building products.
        </p>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group block"
              >
                <h2
                  className="font-normal mb-2 group-hover:opacity-70 transition-opacity"
                  style={{ fontSize: "1.5rem", lineHeight: 1.2 }}
                >
                  {post.title}
                </h2>
                <time
                  dateTime={post.date}
                  className="text-muted-foreground text-base mb-3 block"
                >
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}
                >
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
