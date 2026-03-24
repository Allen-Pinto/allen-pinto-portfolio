"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handler);
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    }
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full md:w-[700px] lg:w-[820px] max-h-[90vh] flex flex-col rounded-2xl overflow-hidden mx-auto"
              style={{
                background: "#111118",
                border: "1px solid #2A2A3A",
                boxShadow: `0 30px 80px rgba(0,0,0,0.7), 0 0 60px rgba(139,92,246,0.1)`,
              }}
            >
              {/* Header */}
              <div className="flex items-start justify-between p-6 md:p-8 border-b border-border">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {project.stats?.map((s) => (
                      <span
                        key={s.label}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          background: `${project.accentColor}15`,
                          color: project.accentColor,
                          border: `1px solid ${project.accentColor}30`,
                        }}
                      >
                        {s.value} {s.label}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display font-extrabold text-3xl md:text-4xl text-text">
                    {project.title}
                  </h2>
                  <p className="text-text-sub mt-1">{project.tagline}</p>
                </div>
                <button
                  onClick={onClose}
                  className="mt-1 p-2 rounded-lg border border-border hover:border-border2 transition-colors text-text-muted hover:text-text"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
                {/* Description */}
                <div>
                  <p className="text-text-sub leading-relaxed">{project.description}</p>
                </div>

                {/* Problem */}
                <div>
                  <h3 className="font-display font-bold text-sm text-purple uppercase tracking-widest mb-3">
                    Problem
                  </h3>
                  <p className="text-text-sub leading-relaxed">{project.problem}</p>
                </div>

                {/* Process */}
                <div>
                  <h3 className="font-display font-bold text-sm text-purple uppercase tracking-widest mb-3">
                    Process & Solution
                  </h3>
                  <p className="text-text-sub leading-relaxed">{project.process}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="font-display font-bold text-sm text-purple uppercase tracking-widest mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-4 py-1.5 rounded-full border border-border2 text-text-sub bg-surface2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual mockup preview */}
                <div
                  className="rounded-xl overflow-hidden border border-border2"
                  style={{ height: "200px", background: "#0A0A0F" }}
                >
                  <div
                    className="h-full flex items-center justify-center"
                    style={{
                      background: `radial-gradient(ellipse at center, ${project.accentColor}10, transparent 70%)`,
                    }}
                  >
                    <div className="text-center">
                      <div
                        className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center"
                        style={{ background: `${project.accentColor}20`, border: `1px solid ${project.accentColor}30` }}
                      >
                        <span className="font-display font-bold text-2xl" style={{ color: project.accentColor }}>
                          {project.title[0]}
                        </span>
                      </div>
                      <p className="text-text-muted text-sm">{project.title} — {project.tagline}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 md:p-8 border-t border-border flex items-center justify-between">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border2 text-text-sub hover:text-text hover:border-border text-sm font-medium transition-all duration-300"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    View on GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      project.isFigma 
                        ? "border border-purple/40 bg-purple/10 text-purple hover:bg-purple/20" 
                        : "bg-purple text-white hover:bg-purple/90"
                    }`}
                  >
                    {project.isFigma ? (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.5 2C6.6 2 5 3.6 5 5.5c0 1.6 1.1 3 2.5 3.5C6.1 9.5 5 10.9 5 12.5c0 1.6 1.1 3 2.5 3.5C6.1 16.5 5 17.9 5 19.5c0 1.9 1.6 3.5 3.5 3.5h7c1.9 0 3.5-1.6 3.5-3.5 0-1.6-1.1-3-2.5-3.5 1.4-.5 2.5-1.9 2.5-3.5 0-1.6-1.1-3-2.5-3.5 1.4-.5 2.5-1.9 2.5-3.5C19 3.6 17.4 2 15.5 2h-7zM12 7.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm0 9c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z"/>
                        </svg>
                        View in Figma ↗
                      </>
                    ) : (
                      `Live Project ↗`
                    )}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}