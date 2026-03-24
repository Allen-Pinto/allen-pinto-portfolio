<div align="center">

<br />

<pre>
 █████╗ ██╗     ██╗     ███████╗███╗   ██╗    ██████╗ ██╗███╗   ██╗████████╗ ██████╗ 
██╔══██╗██║     ██║     ██╔════╝████╗  ██║    ██╔══██╗██║████╗  ██║╚══██╔══╝██╔═══██╗
███████║██║     ██║     █████╗  ██╔██╗ ██║    ██████╔╝██║██╔██╗ ██║   ██║   ██║   ██║
██╔══██║██║     ██║     ██╔══╝  ██║╚██╗██║    ██╔═══╝ ██║██║╚██╗██║   ██║   ██║   ██║
██║  ██║███████╗███████╗███████╗██║ ╚████║    ██║     ██║██║ ╚████║   ██║   ╚██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝    ╚═╝     ╚═╝╚═╝  ╚═══╝   ╚═╝    ╚═════╝ 
</pre>

<br />

**Personal portfolio of Allen Pinto — Full Stack Developer & UI/UX Designer**

*Designed and engineered as a product, not a template.*

<br />

[![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

[![Live Demo](https://img.shields.io/badge/Live_Demo-→_allen--verse.netlify.app-8B5CF6?style=for-the-badge)](https://allen-verse.netlify.app)

<br />

</div>

---

## Overview

This is my personal portfolio — built the same way I build every product: as a complete system, designed and engineered from the ground up. No templates. No UI kits. Every component, animation, and interaction was written by hand.

The goal was simple: **make recruiters stop scrolling.**

The result is a dark, premium, interactive portfolio that feels like a high-end SaaS product — with 3D tilt cards, cursor-following ambient glows, scroll-driven storytelling, and real project case studies.

---

## Features

- **Custom cursor** — dot, trailing ring, and ambient radial glow that follows mouse movement with smooth lag interpolation
- **Parallax hero** — cursor-driven depth effect on the hero section
- **Scroll-driven story section** — animated 4-stage visual flow (Wireframe → UI → Code → Live)
- **3D tilt project cards** — perspective transforms that respond to mouse position on hover
- **Featured project layout** — Vizerion gets a full-width hero card with 3D mockup visual
- **Project modals** — click any card for a full case study: problem, process, tech stack, links
- **Animated skill system** — color-coded skill groups with hover glow states
- **Noise texture + grid overlay** — adds depth and premium feel without heavy assets
- **Sticky blur navbar** — transparent on load, backdrop-blur on scroll
- **Contact form** — with animated sent state
- **Fully responsive** — mobile-first, works across all screen sizes
- **Optimized performance** — no heavy 3D libraries, all CSS/JS transforms

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Fonts | Clash Display · Cabinet Grotesk (Fontshare) |
| Deployment | Netlify |

---

## Project Structure

```
allen-pinto-portfolio/
│
├── app/
│   ├── layout.tsx          # Root layout, font imports, metadata
│   ├── page.tsx            # Main page — composes all sections
│   └── globals.css         # Design tokens, cursor, utilities, noise
│
├── components/
│   ├── Navbar.tsx          # Sticky navbar with scroll-blur + mobile menu
│   ├── Hero.tsx            # Fullscreen hero, parallax, staggered reveal
│   ├── Story.tsx           # Scroll-driven 4-stage narrative section
│   ├── Projects.tsx        # Projects grid — featured + two rows
│   ├── ProjectCard.tsx     # 3D tilt card with mockup visual
│   ├── ProjectModal.tsx    # Case study modal (problem/process/stack)
│   ├── About.tsx           # Skills, education, experience
│   ├── Contact.tsx         # Contact form + social links
│   ├── Footer.tsx          # Minimal footer
│   ├── CursorGlow.tsx      # Custom cursor + ambient glow
│   └── ScrollReveal.tsx    # Intersection Observer scroll reveals
│
├── data/
│   └── projects.ts         # All project data — single source of truth
│
├── hooks/
│   ├── useCursorGlow.ts    # Cursor tracking + smooth lag interpolation
│   └── useScrollReveal.ts  # Scroll-triggered class toggling
│
├── lib/
│   └── utils.ts            # cn() utility (clsx + tailwind-merge)
│
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Allen-Pinto/allen-pinto-portfolio.git
cd allen-pinto-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## Design System

### Colors

```
Background     #0A0A0F   ████  Primary surface
Surface        #111118   ████  Cards, modals
Surface 2      #16161F   ████  Elevated elements
Border         #1F1F2A   ████  Default borders
Border 2       #2A2A3A   ████  Hover borders
Accent         #8B5CF6   ████  Purple — used sparingly
Text           #FAFAFA   ████  Primary text
Text Sub       #9898A8   ████  Secondary text
Text Muted     #6B6B7A   ████  Placeholder, metadata
```

### Typography

```
Display   →   Clash Display     (headings, labels, names)
Body      →   Cabinet Grotesk   (paragraphs, UI text)
```

Both fonts via [Fontshare](https://www.fontshare.com) — loaded via CDN with zero config.

---

## Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Fullscreen intro with animated text reveal and parallax |
| 2 | **Story** | 4-stage visual flow showing the design → build process |
| 3 | **Projects** | Featured card + 7 project cards with 3D tilt and modals |
| 4 | **About** | Skills, mindset, education, and experience |
| 5 | **Contact** | Email, form, and social links |

---

## Projects Featured

**Featured**
- [Vizerion](https://github.com/Allen-Pinto) — Immersive 3D portfolio for a gaming club

**Core Engineering**
- [Trackless](https://github.com/Allen-Pinto) — Privacy-first analytics · 50+ sites · 1,000+ events/day
- [Eval-Flow](https://github.com/Allen-Pinto) — LLM evaluation pipeline · 10,000+ evals/month
- [Donourly](https://github.com/Allen-Pinto) — Donation platform · 100+ active users
- [Mail Mind](https://github.com/Allen-Pinto) — AI email classification system

**UI/UX & Product Design**
- [PrepSaaS](https://github.com/Allen-Pinto) — Full SaaS platform for AI interview preparation
- [Pulse](https://github.com/Allen-Pinto) — AI-powered analytics dashboard
- [MyCard](https://github.com/Allen-Pinto) — Digital business card platform

---

## Deployment

This portfolio is deployed on **Netlify**.

To deploy your own fork:

```bash
# Build command
npm run build

# Output directory
.next
```

Connect the GitHub repo directly to Netlify or Vercel for automatic deployments on every push.

---

## Author

**Allen Pinto** — Full Stack Developer & UI/UX Designer

- Portfolio → [allen-verse.netlify.app](https://allen-verse.netlify.app)
- GitHub → [@Allen-Pinto](https://github.com/Allen-Pinto)
- LinkedIn → [allen-pinto-63aa48303](http://www.linkedin.com/in/allen-pinto-63aa48303)
- Email → [pinto.allen05@gmail.com](mailto:pinto.allen05@gmail.com)

---

## License

This project is open source under the [MIT License](./LICENSE).

You're free to use it as inspiration or reference. If you use significant portions of the code, a credit link would be appreciated — but it's not required.

---

<div align="center">

<br />

*Built with obsessive attention to detail.*

<br />

**[↑ Back to top](#)**

</div>
