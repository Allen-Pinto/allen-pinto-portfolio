"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax on mouse move
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouse = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xRatio = (clientX / innerWidth - 0.5) * 2;
      const yRatio = (clientY / innerHeight - 0.5) * 2;
      container.style.setProperty("--px", `${xRatio}`);
      container.style.setProperty("--py", `${yRatio}`);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  const wordVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 0.3 + i * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const lines = [
    { text: "I design and build", class: "text-text" },
    { text: "digital experiences.", class: "gradient-text" },
  ];

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg"
    >
      {/* Ambient orb */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "900px",
          height: "900px",
          left: "50%",
          top: "45%",
          transform: "translate(-50%,-50%)",
          background:
            "radial-gradient(circle at center, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Floating grid accent */}
      <div
        className="absolute top-20 right-20 opacity-20 animate-float"
        style={{ animationDuration: "7s" }}
      >
        <svg width="200" height="200" viewBox="0 0 200 200">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(139,92,246,0.6)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#grid)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-border2 bg-surface/50 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple animate-pulse-slow" />
          <span className="text-xs text-text-sub font-medium tracking-widest uppercase">
            Available for opportunities
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display font-extrabold text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-4">
          {lines.map((line, li) => (
            <div key={li} className="overflow-hidden pb-2">
              <motion.span
                className={`block ${line.class}`}
                custom={li}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-muted text-xl md:text-2xl font-light tracking-wide mb-2"
        >
          Frontend.{" "}
          <span className="text-text-sub">UI/UX.</span>{" "}
          <span className="text-text-sub">Backend.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="font-display text-2xl md:text-3xl font-bold gradient-purple mb-12"
        >
          Allen Pinto
        </motion.p>

        {/* CTA Buttons - Fixed: Added missing < for anchor tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-full bg-purple text-white font-medium text-sm tracking-wide overflow-hidden hover:shadow-purple-md transition-all duration-300"
          >
            <span className="relative z-10">View Work</span>
            <div className="absolute inset-0 bg-linear-to-r from-purple to-purple/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full border border-border2 text-text-sub text-sm font-medium tracking-wide hover:border-purple/40 hover:text-text transition-all duration-300"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Secondary links - Fixed: Added missing < for anchor tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex items-center justify-center gap-8"
        >
          {[
            { label: "Resume", href: "https://docs.google.com/document/d/1m3-bRScJh4lhyoZbOBGqViGQZwfiiHhV/edit?usp=sharing&ouid=108992954880548520689&rtpof=true&sd=true" },
            { label: "GitHub", href: "https://github.com/Allen-Pinto" },
            { label: "LinkedIn", href: "http://www.linkedin.com/in/allen-pinto-63aa48303" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs text-text-muted hover:text-purple transition-colors duration-300 tracking-widest uppercase font-medium"
            >
              <span className="w-5 h-px bg-text-muted group-hover:bg-purple group-hover:w-8 transition-all duration-300" />
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-muted tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-border2 to-transparent" />
      </motion.div>
    </section>
  );
}