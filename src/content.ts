export const content = {
  name: "anirudh5harma",

  hero: {
    headline: "Second-Order Thinking.",
    description:
      "Hi I'm Anirudh. I build clean, performant systems and ship things that work. Currently focused on distributed systems and agentic AI.",
    tagline: "No fluff, just code.",
  },

  about: {
    bio: "I write code every day. I believe in shipping fast, iterating often, and keeping things simple. I'm most productive when I own the full stack — from database schema to pixel-perfect UI.",
    skills: [
      { label: "languages", value: "TypeScript, Go, Python, SQL" },
      { label: "tools", value: "React, Node.js, Gin, FastAPI, Git, Docker, Redis, Prometheus" },
      { label: "interests", value: "Distributed systems, Agentic AI" },
    ],
  },

  projects: [
    {
      title: "Distributed Job Queue",
      description:
        "Built in Go with 2-level priority, concurrent worker pools, and rate limiting — scales horizontally to 50+ jobs/sec.",
      link: "https://github.com/AnirudhBot/job-queue",
    },
    {
      title: "Research RAG",
      description:
        "Research assistant that lets users upload PDFs and receive context-aware responses via LLM-powered chat. Comes with a hybrid table extraction pipeline and multimodal image awareness.",
      link: "https://github.com/AnirudhBot/Research_RAG",
    },
    {
      title: "Crypto Tracker",
      description:
        "Real-time cryptocurrency tracking server with concurrent fan-out broadcasting, background polling and a loosely coupled, idiomatic Go backend for real-time alerts.",
      link: "https://github.com/AnirudhBot/crypto-live",
    },
  ],

  contact: [
    { label: "email", href: "mailto:anirudh1304@gmail.com", text: "anirudh1304@gmail.com" },
    { label: "github", href: "https://github.com/anirudh5harma", text: "github.com/anirudh5harma" },
    { label: "linkedin", href: "https://linkedin.com/in/anirudh5harma", text: "linkedin.com/in/anirudh5harma" },
  ],

  footer: "Curious.",
};
