import { Link } from "@tanstack/react-router";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: React.ReactNode;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostDate({ date }: { date: string }) {
  return (
    <time dateTime={date} className="text-muted-foreground text-base">
      {formatDate(date)}
    </time>
  );
}

export function PostHeader({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <header className="mb-12">
      <h1
        className="font-normal mb-4 text-heading-accent"
        style={{ fontSize: "2.2rem", lineHeight: 1.1 }}
      >
        {title}
      </h1>
      <PostDate date={date} />
    </header>
  );
}

export function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <article className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Link
          to="/blog"
          className="text-muted-foreground hover:text-foreground transition-colors text-base"
        >
          ← Back to writing
        </Link>
      </div>
      {children}
    </article>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="mb-6">{children}</p>;
}

const trackingSignalPost: BlogPost = {
  slug: "tracking-signal",
  title: "tracking signal",
  date: "2026-06-10",
  excerpt:
    "Signals are the backbone of progress in every field, but their timing matters as much as their magnitude.",
  content: (
    <PostLayout>
      <PostHeader title="tracking signal" date="2026-06-10" />

      <Paragraph>
        Every field has its version of a signal. In finance, it might be price.
        In medicine, it might be a lab value. In product, it might be retention,
        activation, or a user behavior that tells you whether something is
        actually working. The names change, but the job stays the same: a signal
        helps you separate noise from reality.
      </Paragraph>

      <Paragraph>
        The mistake is thinking the signal alone is enough. It is not. A metric
        without timing can mislead you just as easily as no metric at all. A
        strong signal that arrives too late is often useless, because the
        decision window has already closed.
      </Paragraph>

      <Paragraph>
        This is why the best operators obsess over early signals. They want the
        first honest indication that something is changing, even if it is still
        incomplete. The goal is not perfect certainty. The goal is to see the
        shape of reality early enough to respond.
      </Paragraph>

      <Paragraph>
        We saw this in a small way with{" "}
        <a
          href="https://www.bombsell.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70 transition-opacity"
        >
          bombsell
        </a>
        . One of the most valuable things was not a polished dashboard or a
        large report, it was catching real-time buying signals across the web,
        funding events, hiring spikes, acquisitions, and similar moments that
        changed intent. When those signals appeared quickly, they gave us a
        chance to act while the window still mattered.
      </Paragraph>

      <Paragraph>
        Good systems are often just good signal tracking. You choose the few
        indicators that matter, you watch them closely, and you make sure they
        arrive fast enough to change your behavior. That is true in startups,
        sports, markets, science, and almost anywhere else people are trying to
        improve outcomes.
      </Paragraph>

      <Paragraph>
        The real advantage is not having more data. It is knowing which signal
        matters, and catching it at the moment it can still change what you do
        next.
      </Paragraph>
    </PostLayout>
  ),
};

export const blogPosts: BlogPost[] = [trackingSignalPost];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
