import { createFileRoute, notFound } from "@tanstack/react-router";
import { getPostBySlug } from "@/blog/posts";
import { content } from "@/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPost,
  head: ({ params }) => {
    const post = getPostBySlug(params.slug);
    return {
      meta: [
        { title: post ? `${post.title} — ${content.displayName}` : "Not Found" },
        {
          name: "description",
          content: post?.excerpt ?? "Post not found.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) {
      throw notFound();
    }
    return { post };
  },
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ThemeToggle />
      <main className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {post.content}
      </main>
    </div>
  );
}
