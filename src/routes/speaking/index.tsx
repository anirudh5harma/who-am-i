import { createFileRoute, Link } from "@tanstack/react-router";
import { content } from "@/content";
import { pastEngagements } from "@/speaking";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/speaking/")({
  component: SpeakingPage,
  head: () => ({
    meta: [
      { title: `Speaking — ${content.displayName}` },
      {
        name: "description",
        content: "Conference talks, meetups, and speaking engagements.",
      },
    ],
  }),
});

function EngagementTable({
  engagements,
}: {
  engagements: typeof pastEngagements;
}) {
  if (engagements.length === 0) {
    return (
      <p
        className="text-muted-foreground italic"
        style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}
      >
        Nothing here yet. Check back soon.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-foreground/10">
            <th
              className="pb-3 pr-6 font-normal text-muted-foreground"
              style={{ fontSize: "0.95rem", lineHeight: "1.4rem" }}
            >
              Conference
            </th>
            <th
              className="pb-3 pr-6 font-normal text-muted-foreground"
              style={{ fontSize: "0.95rem", lineHeight: "1.4rem" }}
            >
              Talk Title
            </th>
            <th
              className="pb-3 pr-6 font-normal text-muted-foreground"
              style={{ fontSize: "0.95rem", lineHeight: "1.4rem" }}
            >
              Date
            </th>
            <th
              className="pb-3 font-normal text-muted-foreground"
              style={{ fontSize: "0.95rem", lineHeight: "1.4rem" }}
            >
              Country
            </th>
          </tr>
        </thead>
        <tbody>
          {engagements.map((eng) => (
            <tr
              key={`${eng.conference}-${eng.date}`}
              className="border-b border-foreground/5"
            >
              <td className="py-3 pr-6">
                <a
                  href={eng.conferenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-70 transition-opacity"
                  style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}
                >
                  {eng.conference}
                </a>
              </td>
              <td
                className="py-3 pr-6"
                style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}
              >
                {eng.talkTitle}
              </td>
              <td
                className="py-3 pr-6 text-muted-foreground"
                style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}
              >
                {eng.date}
              </td>
              <td
                className="py-3 text-muted-foreground"
                style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}
              >
                {eng.location}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SpeakingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <ThemeToggle />

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
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
          speaking engagements
        </h1>

        <p
          className="mb-12 text-muted-foreground"
          style={{ fontSize: "1.1rem", lineHeight: "1.5rem" }}
        >
          Email:{" "}
          <a
            href="mailto:anirudh1304@gmail.com"
            className="underline hover:opacity-70 transition-opacity"
          >
            anirudh1304@gmail.com
          </a>
        </p>

        <section>
          <h2
            className="font-normal mb-6 text-heading-accent"
            style={{ fontSize: "1.6rem", lineHeight: 1.2 }}
          >
            past conferences
          </h2>
          <EngagementTable engagements={pastEngagements} />
        </section>
      </main>
    </div>
  );
}
