"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const stages = [
  {
    phase: "01",
    title: "Wireframe",
    label: "Think",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
        <rect x="8" y="8" width="64" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
        <rect x="8" y="28" width="38" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
        <rect x="8" y="44" width="64" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
        <circle cx="60" cy="32" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    ),
    color: "rgba(139,92,246,0.3)",
    desc: "Every product starts as a rough idea. I map it out as a system before touching code.",
  },
  {
    phase: "02",
    title: "UI Design",
    label: "Design",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
        <rect x="8" y="8" width="64" height="12" rx="2" fill="rgba(139,92,246,0.3)" stroke="rgba(139,92,246,0.7)" strokeWidth="1" />
        <rect x="8" y="28" width="38" height="8" rx="2" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.5)" strokeWidth="1" />
        <rect x="8" y="44" width="64" height="28" rx="2" fill="rgba(6,182,212,0.1)" stroke="rgba(6,182,212,0.4)" strokeWidth="1" />
        <circle cx="60" cy="32" r="6" fill="rgba(192,132,252,0.3)" stroke="rgba(192,132,252,0.7)" strokeWidth="1" />
      </svg>
    ),
    color: "rgba(139,92,246,0.5)",
    desc: "Then I make it beautiful. Composition, hierarchy, motion — design with purpose.",
  },
  {
    phase: "03",
    title: "Code",
    label: "Build",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
        <path d="M28 28L14 40L28 52" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 28L66 40L52 52" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M45 20L35 60" stroke="rgba(139,92,246,0.8)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    color: "rgba(6,182,212,0.4)",
    desc: "Scalable code that actually ships. Node.js, React, MongoDB — built to last.",
  },
  {
    phase: "04",
    title: "Live Product",
    label: "Launch",
    icon: (
      <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
        <circle cx="40" cy="40" r="24" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="12" fill="rgba(139,92,246,0.2)" stroke="rgba(139,92,246,0.8)" strokeWidth="1.5" />
        <circle cx="40" cy="40" r="4" fill="#8B5CF6" />
        <path d="M40 16V24M40 56V64M64 40H56M24 40H16" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: "rgba(139,92,246,0.7)",
    desc: "A complete product. Designed, built, and shipped — end to end.",
  },
];

export default function Story() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-40 px-6 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Opening line */}
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-text-muted text-lg md:text-xl font-light mb-3 tracking-wide"
          >
            Most designers design.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-text-muted text-lg md:text-xl font-light tracking-wide"
          >
            Most developers build.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl mt-8 gradient-text"
          >
            I do both —
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-text-sub"
          >
            as one system.
          </motion.h2>
        </div>

        {/* Stage flow */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-12 md:gap-0">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border2 -translate-y-1/2 z-0" />

          {stages.map((stage, i) => (
            <motion.div
              key={stage.phase}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex-1 flex flex-col items-center text-center max-w-[200px] mx-auto"
            >
              {/* Icon box */}
              <div
                className="w-24 h-24 rounded-2xl border border-border2 mb-5 p-3 relative overflow-hidden"
                style={{
                  background: `radial-gradient(circle at center, ${stage.color}, transparent 80%)`,
                  boxShadow: `0 0 30px ${stage.color}`,
                }}
              >
                <div className="text-text-sub">{stage.icon}</div>
              </div>

              {/* Phase */}
              <span className="text-xs text-purple font-medium tracking-widest uppercase mb-1">
                {stage.phase}
              </span>
              <h3 className="font-display font-bold text-lg text-text mb-2">
                {stage.title}
              </h3>
              <p className="text-xs text-text-muted leading-relaxed">
                {stage.desc}
              </p>

              {/* Arrow connector (desktop) */}
              {i < stages.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-6 text-border2">
                  <svg width="24" height="12" viewBox="0 0 24 12">
                    <path d="M0 6H20M14 1L20 6L14 11" stroke="rgba(139,92,246,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}