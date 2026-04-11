import { createFileRoute } from "@tanstack/react-router";
import { ParticleBackground } from "@/components/ParticleBackground";
import { content } from "@/content";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `${content.name} — Software Engineer` },
      { name: "description", content: content.hero.description },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono relative">
      <ParticleBackground />
      <nav className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-foreground font-bold tracking-tight">{content.name}</span>
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
              {content.hero.headline}
            </span>
          </h1>
          <p className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-2xl">
            {content.hero.description}
          </p>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            {content.hero.tagline}
          </p>
        </section>

        <hr className="border-border" />

        {/* About */}
        <section id="about" className="py-16">
          <p className="text-sm text-foreground leading-relaxed">{content.about.bio}</p>
          <div className="mt-8 space-y-3 text-sm">
            {content.about.skills.map((skill) => (
              <p key={skill.label} className="text-muted-foreground">
                <span className="text-foreground font-semibold">{skill.label}:</span>{" "}
                {skill.value}
              </p>
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Projects */}
        <section id="projects" className="py-16">
          <h2 className="text-foreground font-semibold text-sm mb-8">projects</h2>
          <div className="space-y-8">
            {content.projects.map((project) => (
              <ProjectItem key={project.title} {...project} />
            ))}
          </div>
        </section>

        <hr className="border-border" />

        {/* Contact */}
        <section id="contact" className="py-16">
          <h2 className="text-foreground font-semibold text-sm mb-6">contact</h2>
          <div className="space-y-2 text-sm">
            {content.contact.map((item) => (
              <p key={item.label} className="text-muted-foreground">
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-foreground underline decoration-muted-foreground underline-offset-4 hover:decoration-highlight transition-colors"
                >
                  {item.text}
                </a>
              </p>
            ))}
          </div>
        </section>

        <footer className="border-t border-border py-8 text-xs text-muted-foreground">
          {content.footer}
        </footer>
      </main>
    </div>
  );
}

function ProjectItem({ title, description, link }: { title: string; description: string; link: string }) {
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
      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
