export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  process: string;
  stack: string[];
  stats?: { label: string; value: string }[];
  github: string;
  live?: string;
  featured?: boolean;
  category: "engineering" | "design" | "featured";
  accentColor: string;
  mockupType: "dashboard" | "card" | "analytics" | "portfolio" | "saas" | "email" | "minimal";
  image?: string;
  isFigma?: boolean; 
};

export const projects: Project[] = [
  {
    id: "trackless",
    title: "Trackless",
    tagline: "Web Analytics at Scale",
    description:
      "A lightweight, privacy-first web analytics platform tracking real-time events across 50+ websites with 1,000+ events processed daily.",
    problem:
      "Existing analytics tools were bloated, expensive, and invasive. Developers needed something lean, fast, and self-hostable.",
    process:
      "Built a Node.js event ingestion pipeline, MongoDB aggregation for real-time dashboards, and a React frontend with live updates via polling.",
    stack: ["Node.js", "Express", "MongoDB", "React", "Tailwind CSS"],
    stats: [
      { label: "Websites Tracked", value: "50+" },
      { label: "Events/Day", value: "1,000+" },
    ],
    github: "https://github.com/Allen-Pinto/Trackless",
    live: "https://trackless-phi.vercel.app", 
    category: "engineering",
    featured: true, 
    accentColor: "#06B6D4",
    mockupType: "analytics",
    image: "/images/3.png", 
  },
  {
    id: "eval-flow",
    title: "Eval-Flow",
    tagline: "LLM Evaluation Pipeline",
    description:
      "A structured pipeline for evaluating large language model outputs at scale — 10,000+ evaluations processed monthly with automated scoring.",
    problem:
      "Teams building with LLMs had no systematic way to evaluate output quality. Manual review was too slow and inconsistent.",
    process:
      "Designed an evaluation schema, built the scoring engine in Node.js, and created a dashboard showing trend data across model versions.",
    stack: ["Node.js", "Express", "MongoDB", "React", "AWS"],
    stats: [
      { label: "Evaluations/Month", value: "10,000+" },
    ],
    github: "https://github.com/Allen-Pinto/Eval-FLow",
    live: "https://eval-flow-ai.vercel.app", 
    category: "engineering",
    accentColor: "#10B981",
    mockupType: "dashboard",
    image: "/images/Eval-Flow.png",
  },
  {
    id: "donourly",
    title: "Donourly",
    tagline: "Donation Platform",
    description:
      "A peer-to-peer donation platform connecting donors with causes. Serves 100+ active users with secure payment flows and transparent fund tracking.",
    problem:
      "Existing donation platforms took high cuts and obscured where money went. Users needed transparency and trust.",
    process:
      "Built the full stack from auth to payment integration. Designed a clean UI that communicates trust through minimalism.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    stats: [
      { label: "Active Users", value: "100+" },
    ],
    github: "https://github.com/Allen-Pinto/Donourly-Frontend",
    live: "https://donourly-frontend-18.vercel.app", 
    category: "engineering",
    accentColor: "#F59E0B",
    mockupType: "card",
    image: "/images/Donourly.png",
  },
  {
    id: "mail-mind",
    title: "Mail Mind",
    tagline: "AI Email Classification",
    description:
      "An intelligent email classification system that automatically categorizes, prioritizes, and drafts responses to incoming emails using AI.",
    problem:
      "Inbox overload is a productivity killer. People spend hours triaging emails that could be handled automatically.",
    process:
      "Integrated OpenAI API for classification and response drafting, built a middleware layer to connect email providers, and designed a clean management UI.",
    stack: ["Node.js", "OpenAI API", "React", "MongoDB", "Express"],
    github: "https://github.com/Allen-Pinto/Mail-Mind",
    live: "https://mail-mind-lac.vercel.app", 
    category: "engineering",
    accentColor: "#EF4444",
    mockupType: "email",
    image: "/images/1.png",
  },
  {
    id: "vizerion",
    title: "Vizerion",
    tagline: "3D Portfolio — Gaming Club",
    description:
      "A fully immersive 3D portfolio experience built for a gaming club. Pushes the boundaries of what a portfolio can be — blending real-time 3D, motion, and editorial design into one cohesive world.",
    problem:
      "Gaming clubs needed a portfolio that felt as intense and dynamic as the games they played. Static pages weren't cutting it.",
    process:
      "Designed the information architecture first, then built the 3D environment using Spline, integrating it with a Next.js frontend. Every interaction was mapped to a microanimation.",
    stack: ["Next.js", "React", "Spline", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/Allen-Pinto/Vizerion",
    live: "https://vizerion.vercel.app",
    category: "engineering",
    accentColor: "#8B5CF6",
    mockupType: "portfolio",
    image: "/images/Vizerion.png",
  },
  {
    id: "prepsaas",
    title: "PrepSaaS",
    tagline: "Full SaaS Interview Platform",
    description:
      "An end-to-end SaaS platform for interview preparation — AI-powered mock interviews, live coding environments, performance analytics, and personalized study plans.",
    problem:
      "Candidates had no single place that combined AI coaching, coding practice, and analytics into one cohesive prep journey.",
    process:
      "Architected the full platform from schema design to UI. Built the AI interview engine, integrated a code execution sandbox, and designed an analytics dashboard from scratch.",
    stack: ["Next.js", "React", "Node.js", "MongoDB", "OpenAI", "Tailwind CSS", "AWS"],
    github: "https://github.com/Allen-Pinto/Placement-Prep-WA",
    live: "https://placement-prep-wa.vercel.app", 
    category: "design",
    accentColor: "#8B5CF6",
    mockupType: "saas",
    image: "/images/Prep.png", 
  },
  {
    id: "pulse",
    title: "Pulse",
    tagline: "AI Analytics Dashboard",
    description:
      "A real-time AI-powered analytics dashboard that surfaces actionable insights from raw data, with natural language querying and automated report generation.",
    problem:
      "Data teams were drowning in raw metrics with no way to quickly surface what matters.",
    process:
      "Designed the visual system first (dark, high-density, information-rich), then built the data pipeline and AI summarization layer on top.",
    stack: ["Figma", "UI/UX Design", "Prototyping", "Design System"],
    github: "", 
    live: "https://www.figma.com/design/0kGIVnvZsAYvr27OW8FoIv/Untitled?node-id=1-2&t=iJZf5JROuFRwlS4i-1", 
    category: "design",
    accentColor: "#06B6D4",
    mockupType: "analytics",
    image: "/images/Pulse.png",
    isFigma: true, 
  },
  {
    id: "mycard",
    title: "MyCard",
    tagline: "Digital Business Card Platform",
    description:
      "A platform to create, share, and track digital business cards with rich profiles, analytics on views, and NFC/QR sharing.",
    problem:
      "Physical business cards are dead. But existing digital alternatives felt like forms, not personal brands.",
    process:
      "Focused heavily on the card design experience — making it feel like a creative tool, not a form builder. Built sharing and analytics on top.",
    stack: ["Figma", "UI/UX Design", "Prototyping", "Design System"],
    github: "", 
    live: "https://www.figma.com/design/IL7Og8320t8sF7t6YSdRV2/MyCard?node-id=0-1&t=IELYr4EjojCQ0R5a-1", 
    category: "design",
    accentColor: "#F59E0B",
    mockupType: "card",
    image: "/images/MyCard.png",
    isFigma: true, 
  },
];

export const featuredProject = projects.find((p) => p.featured)!;
export const engineeringProjects = projects.filter((p) => p.category === "engineering" && !p.featured);
export const designProjects = projects.filter((p) => p.category === "design");