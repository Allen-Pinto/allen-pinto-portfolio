"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Languages",
    skills: ["JavaScript", "C++"],
    color: "#8B5CF6",
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    color: "#06B6D4",
  },
  {
    label: "Backend",
    skills: ["Node.js", "Express", "REST APIs"],
    color: "#10B981",
  },
  {
    label: "Database",
    skills: ["MongoDB", "Supabase"],
    color: "#F59E0B",
  },
  {
    label: "Cloud & Tools",
    skills: ["AWS", "Postman", "Figma", "Spline"],
    color: "#EF4444",
  },
];

const traits = [
  { label: "Systems thinker", desc: "I see the whole product before writing a line of code." },
  { label: "End-to-end builder", desc: "From Figma to production deployment — one person, one system." },
  { label: "Detail obsessed", desc: "The difference between good and great is in the 1px." },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-purple text-xs font-medium tracking-widest uppercase mb-6"
            >
              About
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-8"
            >
              I build things
              <br />
              <span className="gradient-text">people actually use.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-5 text-text-sub text-base leading-relaxed"
            >
              <p>
                I'm Allen Pinto — a full-stack developer and UI/UX designer based in Bangalore, India. Currently studying at Christ University (BCA, 2023–Present), I've been building production-ready products since before graduation.
              </p>
              <p>
                My approach is systems thinking applied to product design. I don't separate design from engineering — they're the same discipline to me. A great product is a great system, and I build it from end to end.
              </p>
              <p>
                I've worked as a Web Developer Intern at Prodigy Infotech — building responsive UIs, integrating APIs, and reducing bugs by 25%. Every project I take on ships.
              </p>
            </motion.div>

            {/* Traits */}
            <div className="mt-10 space-y-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-border/60 bg-surface/30"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 shrink-0" />
                  <div>
                    <p className="font-display font-semibold text-text text-sm mb-0.5">{trait.label}</p>
                    <p className="text-text-muted text-sm">{trait.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Links - FIXED: Added missing opening brackets for <a> tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mt-10"
            >
              <a
                href="https://docs.google.com/document/d/1m3-bRScJh4lhyoZbOBGqViGQZwfiiHhV/edit?usp=sharing&ouid=108992954880548520689&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-purple text-white text-sm font-medium hover:bg-purple/90 transition-all duration-300"
              >
                Download Resume
              </a>
              <a
                href="https://github.com/Allen-Pinto"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-border2 text-text-sub text-sm font-medium hover:text-text hover:border-border transition-all duration-300"
              >
                GitHub
              </a>
              <a
                href="http://www.linkedin.com/in/allen-pinto-63aa48303"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-border2 text-text-sub text-sm font-medium hover:text-text hover:border-border transition-all duration-300"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right: Skills */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs text-text-muted uppercase tracking-widest font-medium mb-8"
            >
              Skills & Stack
            </motion.p>
            <div className="space-y-6">
              {skillGroups.map((group, gi) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.1 }}
                >
                  <p className="text-xs font-medium mb-3" style={{ color: group.color }}>
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-4 py-1.5 rounded-lg border text-text-sub transition-all duration-300 hover:text-text cursor-default"
                        style={{
                          borderColor: `${group.color}20`,
                          background: `${group.color}08`,
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.borderColor = `${group.color}50`;
                          (e.target as HTMLElement).style.background = `${group.color}15`;
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.borderColor = `${group.color}20`;
                          (e.target as HTMLElement).style.background = `${group.color}08`;
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10 p-6 rounded-xl border border-border2 bg-surface/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple/20 border border-purple/30 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L16 6V12L9 16L2 12V6L9 2Z" stroke="#8B5CF6" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-text">Christ University</p>
                  <p className="text-text-sub text-sm">Bachelor of Computer Applications</p>
                  <p className="text-text-muted text-xs mt-1">Bangalore, India · 2023 – Present</p>
                </div>
              </div>
            </motion.div>

            {/* Experience card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-4 p-6 rounded-xl border border-border2 bg-surface/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="5" width="14" height="11" rx="1.5" stroke="#06B6D4" strokeWidth="1.5" />
                    <path d="M6 5V4C6 3 7 2 9 2C11 2 12 3 12 4V5" stroke="#06B6D4" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-text">Web Developer Intern</p>
                  <p className="text-text-sub text-sm">Prodigy Infotech</p>
                  <p className="text-text-muted text-xs mt-1">Responsive UIs · API Integration · 25% bug reduction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}