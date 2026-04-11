export const content = {
  name: "yourname",

  hero: {
    headline: "Building software that solves real problems.",
    description:
      "I'm a software engineer who cares about craft. I build clean, performant systems and ship things that work. Currently focused on web platforms, developer tools, and making complex things simple.",
    tagline: "No fluff, just code.",
  },

  about: {
    bio: "I write code every day. I believe in shipping fast, iterating often, and keeping things simple. I'm most productive when I own the full stack — from database schema to pixel-perfect UI.",
    skills: [
      { label: "languages", value: "TypeScript, Python, Go, Rust" },
      { label: "tools", value: "React, Node.js, PostgreSQL, Docker, Linux" },
      { label: "interests", value: "systems programming, open source, developer experience" },
    ],
  },

  projects: [
    {
      title: "project-alpha",
      description:
        "A CLI tool that does one thing really well. Built with Rust, ships as a single binary.",
      link: "https://github.com/yourname/project-alpha",
    },
    {
      title: "dashkit",
      description:
        "Real-time analytics dashboard. React, WebSockets, PostgreSQL. Handles 10k events/sec.",
      link: "https://github.com/yourname/dashkit",
    },
    {
      title: "dotfiles",
      description:
        "My development environment. Neovim, tmux, zsh. Battle-tested over 3 years.",
      link: "https://github.com/yourname/dotfiles",
    },
  ],

  contact: [
    { label: "email", href: "mailto:you@example.com", text: "you@example.com" },
    { label: "github", href: "https://github.com/yourname", text: "github.com/yourname" },
    { label: "linkedin", href: "https://linkedin.com/in/yourname", text: "linkedin.com/in/yourname" },
  ],

  footer: "built with craft, not templates.",
};
