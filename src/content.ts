export const content = {
  name: "anirudh5harma",
  displayName: "Anirudh Sharma",

  hero: {
    headline: "I build systems that ship.",
    description:
      "Full-stack AI engineer focused on agentic AI and products that move fast. I own the stack from database schema to pixel-perfect UI — and I ship daily.",
    tagline: "Second-order thinking. First-principles building.",
  },

  about: {
    bio: "I write code every day. I believe in shipping fast, iterating often, and keeping things simple. I'm most productive when I own the full stack — from database schema to pixel-perfect UI.",
    skills: [
      { label: "languages", value: "TypeScript, Python, Go, SQL" },
      { label: "runtime & frameworks", value: "React, Next.js, Node.js, FastAPI, Gin" },
      { label: "data & infra", value: "PostgreSQL, Supabase, Redis, Docker, Qdrant" },
      { label: "AI & ML", value: "LangChain, RAG pipelines, embeddings, vision models" },
      { label: "tools", value: "Git, Docker, Prometheus, Vercel, OAuth" },
      { label: "interests", value: "Agentic AI" },
    ],
  },

  projects: [
    {
      title: "Bombsell",
      subtitle: "AI-native GTM Infra for agents and SMBs",
      description:
        "Full-stack product that ingests public buying signals, matches them against ICPs, enriches contacts, suggests marketing content and distribution, drafts outreach and grows with your company.",
      link: "https://github.com/anirudh5harma/lead-gen",
      liveUrl: "https://www.bombsell.com",
      tags: ["Next.js", "TypeScript", "Supabase", "LLM", "OAuth", "MCP"],
      highlights: [
        "100+ commits — production-grade cron pipelines, signal clustering, adaptive ranking",
        "MCP server with OAuth + PKCE for agent framework integration",
        "Multi-tenant workspace model with prepaid lead-credit top-ups",
      ],
    },
    {
      title: "Research RAG",
      subtitle: "Multimodal research assistant for scientific papers",
      description:
        "Upload PDFs and get context-aware answers via LLM-powered chat. Extracts text, tables, and images with a hybrid pipeline — then indexes everything into a vector store for semantic retrieval.",
      link: "https://github.com/anirudh5harma/Research_RAG",
      tags: ["Python", "Streamlit", "Qdrant", "LangChain", "OpenCV", "Docker"],
      highlights: [
        "Hybrid table extraction with PyMuPDF + pdfplumber + noise filtering",
        "Multimodal image awareness via GPT-4o vision + OpenCV preprocessing",
        "Conversational RAG with history-aware query reformulation",
      ],
    },
    {
      title: "Typewriter",
      subtitle: "Real-time collaboration platform",
      description:
        "Full-stack collaboration app built for seamless, distraction-free composition with real-time sync architecture.",
      link: "https://github.com/anirudh5harma/Typewriter",
      liveUrl: "https://typewriter-smoky.vercel.app",
      tags: ["TypeScript", "React", "Node.js", ""],
      highlights: [
        "Powerful document editing platform leveraging Yjs for CRDT implementation",
        "Live deployment on Vercel with end-to-end TypeScript coverage",
        "Clean separation of concerns between API and UI layers",
      ],
    },
  ],

  otherProjects: [
    {
      title: "Distributed Job Queue",
      description: "Go-based queue with 2-level priority, concurrent worker pools, and rate limiting — scales horizontally to 50+ jobs/sec.",
      link: "https://github.com/anirudh5harma/job-queue",
    },
    {
      title: "Crypto Tracker",
      description: "Real-time crypto tracking with concurrent fan-out broadcasting, background polling, and an idiomatic Go backend.",
      link: "https://github.com/anirudh5harma/crypto-live",
    },
  ],

  contact: [
    { label: "email", href: "mailto:anirudh1304@gmail.com", text: "anirudh1304@gmail.com" },
    { label: "github", href: "https://github.com/anirudh5harma", text: "github.com/anirudh5harma" },
    { label: "linkedin", href: "https://linkedin.com/in/anirudh5harma", text: "linkedin.com/in/anirudh5harma" },
    { label: "x", href: "https://twitter.com/anirudh5harma", text: "@anirudh5harma" },
  ],

  footer: "Built with intent. No fluff.",
};
