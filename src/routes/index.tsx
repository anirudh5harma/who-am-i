import { createFileRoute } from "@tanstack/react-router";
import { ConstellationBackground } from "@/components/ConstellationBackground";
import { content } from "@/content";
import { useEffect, useRef, useState } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Linkedin,
  ArrowDown,
  Code2,
  Zap,
  Terminal,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `${content.displayName} — Builder & Engineer` },
      { name: "description", content: content.hero.description },
    ],
  }),
});

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isInView } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase font-mono rounded-md border border-[#00d4ff22] tag-gradient text-[#00d4ff]">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#1a1a25] to-[#1a1a25]" />
      <span className="text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-[#6e6e80]">
        {children}
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#1a1a25] to-[#1a1a25]" />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-[#1a1a25]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-bold tracking-tight text-foreground font-mono"
        >
          <span className="text-[#00d4ff]">~/</span>
          {content.name}
        </a>
        <div className="flex gap-8 text-sm text-[#6e6e80]">
          {[
            { label: "projects", href: "#projects" },
            { label: "about", href: "#about" },
            { label: "contact", href: "#contact" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-[#00d4ff] transition-colors duration-200 font-mono text-xs tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1a1a25] bg-[#0c0c12] mb-8"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00d4ff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00d4ff]" />
            </span>
            <span className="text-[11px] font-mono text-[#6e6e80] tracking-wide">
              Available for opportunities
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <span
              className="text-gradient block"
              style={{
                animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
                opacity: 0,
              }}
            >
              {content.hero.headline}
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl text-[#a0a0b0] leading-relaxed max-w-2xl mb-4"
            style={{
              animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards",
              opacity: 0,
            }}
          >
            {content.hero.description}
          </p>

          <p
            className="text-sm font-mono text-[#6e6e80] mb-10"
            style={{
              animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards",
              opacity: 0,
            }}
          >
            {content.hero.tagline}
          </p>

          <div
            className="flex flex-wrap gap-4"
            style={{
              animation: "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards",
              opacity: 0,
            }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#00d4ff] text-[#050508] text-sm font-semibold hover:bg-[#33ddff] transition-colors duration-200"
            >
              <Zap size={16} />
              View Projects
            </a>
            <a
              href={content.contact.find((c) => c.label === "github")?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#1a1a25] text-sm text-[#a0a0b0] hover:border-[#00d4ff44] hover:text-[#00d4ff] transition-all duration-200"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#projects" className="text-[#6e6e80] hover:text-[#00d4ff] transition-colors">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof content.projects)[number];
  index: number;
}) {
  const { ref, isInView } = useInView(0.15);

  return (
    <div
      ref={ref}
      className="group relative rounded-xl border border-[#1a1a25] bg-[#0c0c12] overflow-hidden transition-all duration-500 border-glow-hover"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
      }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00d4ff44] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-[#00d4ff] transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-[#6e6e80] font-mono">{project.subtitle}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-[#1a1a25] text-[#6e6e80] hover:text-[#00d4ff] hover:border-[#00d4ff33] transition-all duration-200"
                title="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[#1a1a25] text-[#6e6e80] hover:text-[#00d4ff] hover:border-[#00d4ff33] transition-all duration-200"
              title="Source Code"
            >
              <Github size={16} />
            </a>
          </div>
        </div>

        <p className="text-[15px] text-[#a0a0b0] leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Tag key={tag}>
              <Code2 size={10} />
              {tag}
            </Tag>
          ))}
        </div>

        <div className="space-y-2.5">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-3">
              <ChevronRight
                size={14}
                className="text-[#00d4ff] mt-0.5 shrink-0"
              />
              <span className="text-sm text-[#8a8aa8] leading-relaxed">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>Featured Work</SectionLabel>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Projects that define my craft
            </h2>
            <p className="text-[#6e6e80] max-w-xl mx-auto">
              Three products built end-to-end. Each solves a real problem, ships to production, and reflects how I think about systems.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>About</SectionLabel>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Engineer first.<br />
                <span className="text-[#6e6e80]">Builder always.</span>
              </h2>
              <p className="text-[15px] text-[#a0a0b0] leading-relaxed mb-6">
                {content.about.bio}
              </p>
              <p className="text-[15px] text-[#a0a0b0] leading-relaxed">
                I gravitate toward problems that sit at the intersection of infrastructure and intelligence — where the database design matters as much as the LLM prompt, and where shipping fast doesn't mean shipping fragile.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-4">
              {content.about.skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 p-4 rounded-lg border border-[#1a1a25] bg-[#0c0c12]/50"
                >
                  <span className="text-xs font-mono font-medium text-[#00d4ff] uppercase tracking-wider shrink-0 w-32">
                    {skill.label}
                  </span>
                  <span className="text-sm text-[#a0a0b0]">{skill.value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function OtherProjects() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>More on GitHub</SectionLabel>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {content.otherProjects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-lg border border-[#1a1a25] bg-[#0c0c12]/30 hover:border-[#00d4ff33] hover:bg-[#0c0c12] transition-all duration-300"
              >
                <div className="p-2 rounded-md bg-[#111118] text-[#6e6e80] group-hover:text-[#00d4ff] transition-colors duration-300 shrink-0">
                  <Terminal size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-[#00d4ff] transition-colors duration-300 mb-1">
                    {project.title}
                  </h4>
                  <p className="text-sm text-[#6e6e80] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = content.contact;

  const iconMap: Record<string, React.ReactNode> = {
    email: <Mail size={16} />,
    github: <Github size={16} />,
    linkedin: <Linkedin size={16} />,
    x: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <SectionLabel>Get in Touch</SectionLabel>
        </FadeIn>

        <div className="text-center max-w-xl mx-auto mb-12">
          <FadeIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's build something
            </h2>
            <p className="text-[#6e6e80]">
              I'm always interested in discussing new ideas, collaborations, or opportunities where I can ship meaningful work.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-lg border border-[#1a1a25] text-sm text-[#a0a0b0] hover:border-[#00d4ff33] hover:text-[#00d4ff] transition-all duration-300 bg-[#0c0c12]/50"
              >
                <span className="text-[#6e6e80]">{iconMap[item.label]}</span>
                <span className="font-mono text-xs">{item.text}</span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#1a1a25] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#6e6e80] font-mono">{content.footer}</p>
        <p className="text-xs text-[#4a4a58] font-mono">
          {new Date().getFullYear()} — {content.displayName}
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden">
      <ConstellationBackground />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <FeaturedProjects />
        <About />
        <OtherProjects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
