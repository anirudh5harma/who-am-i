import { createFileRoute } from "@tanstack/react-router";
import { ParticleBackground } from "@/components/ParticleBackground";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Your Name — Software Engineer" },
      { name: "description", content: "Software engineer building things that matter. Portfolio and projects." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <nav className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-foreground font-bold tracking-tight">yourname</span>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">about</a>
            <a href="#projects" className="hover:text-foreground transition-colors">projects</a>
            <a href="#contact" className="hover:text-foreground transition-colors">contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6">
        {/* Hero */}
        <section className="pt-20 pb-16">
          <h1 className="text-foreground text-lg font-normal leading-relaxed">
            <span className="bg-highlight text-highlight-foreground px-1 font-semibold italic">
              Building software that solves real problems.
            </span>
          </h1>
          <p className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-2xl">
            I'm a software engineer who cares about craft. I build clean, performant
            systems and ship things that work. Currently focused on web platforms,
            developer tools, and making complex things simple.
          </p>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            No fluff, just code.
          </p>
        </section>

        <hr className="border-border" />

        {/* About */}
        <section id="about" className="py-16">
          <p className="text-sm text-foreground leading-relaxed">
            I write code every day. I believe in shipping fast, iterating often,
            and keeping things simple. I'm most productive when I own the full stack —
            from database schema to pixel-perfect UI.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">languages:</span>{" "}
              TypeScript, Python, Go, Rust
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">tools:</span>{" "}
              React, Node.js, PostgreSQL, Docker, Linux
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground font-semibold">interests:</span>{" "}
              systems programming, open source, developer experience
            </p>
          </div>
        </section>

        <hr className="border-border" />

        {/* Projects */}
        <section id="projects" className="py-16">
          <h2 className="text-foreground font-semibold text-sm mb-8">projects</h2>
          <div className="space-y-8">
            <ProjectItem
              title="project-alpha"
              description="A CLI tool that does one thing really well. Built with Rust, ships as a single binary."
              link="https://github.com/yourname/project-alpha"
            />
            <ProjectItem
              title="dashkit"
              description="Real-time analytics dashboard. React, WebSockets, PostgreSQL. Handles 10k events/sec."
              link="https://github.com/yourname/dashkit"
            />
            <ProjectItem
              title="dotfiles"
              description="My development environment. Neovim, tmux, zsh. Battle-tested over 3 years."
              link="https://github.com/yourname/dotfiles"
            />
          </div>
        </section>

        <hr className="border-border" />

        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="text-foreground font-semibold text-sm mb-6">contact</h2>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              <a
                href="mailto:you@example.com"
                className="text-foreground underline decoration-muted-foreground underline-offset-4 hover:decoration-highlight transition-colors"
              >
                you@example.com
              </a>
            </p>
            <p className="text-muted-foreground">
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-muted-foreground underline-offset-4 hover:decoration-highlight transition-colors"
              >
                github.com/yourname
              </a>
            </p>
            <p className="text-muted-foreground">
              <a
                href="https://linkedin.com/in/yourname"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline decoration-muted-foreground underline-offset-4 hover:decoration-highlight transition-colors"
              >
                linkedin.com/in/yourname
              </a>
            </p>
          </div>
        </section>

        <footer className="border-t border-border py-8 text-xs text-muted-foreground">
          built with craft, not templates.
        </footer>
      </main>
    </div>
  );
}

function ProjectItem({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground font-semibold underline decoration-muted-foreground underline-offset-4 hover:decoration-highlight transition-colors"
      >
        {title}
      </a>
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
