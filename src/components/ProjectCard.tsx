"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import Image from "next/image";

interface Props {
  project: Project;
  onOpen: (project: Project) => void;
  featured?: boolean;
}

function MockupVisual({ type, color, image }: { type: Project["mockupType"]; color: string; image?: string }) {
  if (image) {
    return (
      <div className="w-full h-full rounded-lg overflow-hidden relative">
        <Image
          src={image}
          alt="Project screenshot"
          fill
          className="object-cover object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
        />
      </div>
    );
  }

  return (
    <div
      className="w-full h-full rounded-lg overflow-hidden relative"
      style={{
        background: `linear-gradient(135deg, rgba(17,17,24,0.9), rgba(10,10,15,0.95))`,
        border: `1px solid rgba(255,255,255,0.05)`,
      }}
    >
      {/* Screen header */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
        {["#FF5F57", "#FFBD2E", "#28CA41"].map((c) => (
          <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 mx-3 h-1.5 rounded-full bg-white/5" />
      </div>

      {/* Content based on type */}
      <div className="p-3">
        {(type === "dashboard" || type === "analytics") && (
          <div className="space-y-2">
            <div className="flex gap-2">
              {[40, 70, 55, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded"
                  style={{
                    height: `${h}px`,
                    background: `linear-gradient(to top, ${color}80, ${color}20)`,
                    opacity: 0.7 + i * 0.1,
                  }}
                />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="h-6 rounded bg-white/5" />
              <div className="h-6 rounded" style={{ background: `${color}20` }} />
            </div>
          </div>
        )}
        {type === "saas" && (
          <div className="space-y-2">
            <div className="h-8 rounded-lg w-3/4" style={{ background: `${color}30` }} />
            <div className="grid grid-cols-3 gap-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-12 rounded-lg border border-white/5 bg-white/3 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full" style={{ background: `${color}40` }} />
                </div>
              ))}
            </div>
            <div className="h-4 rounded bg-white/5 w-2/3" />
          </div>
        )}
        {type === "card" && (
          <div className="flex flex-col gap-2">
            <div className="h-16 rounded-lg border" style={{ borderColor: `${color}30`, background: `${color}10` }} />
            <div className="space-y-1">
              <div className="h-2.5 rounded bg-white/10 w-3/4" />
              <div className="h-2 rounded bg-white/5 w-1/2" />
            </div>
          </div>
        )}
        {type === "email" && (
          <div className="space-y-1.5">
            {[90, 70, 80, 60].map((w, i) => (
              <div
                key={i}
                className="flex items-center gap-2 p-1.5 rounded"
                style={{ background: i === 0 ? `${color}15` : "rgba(255,255,255,0.03)" }}
              >
                <div className="w-4 h-4 rounded-full bg-white/10 shrink-0" />
                <div className="flex-1 h-1.5 rounded bg-white/10" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        )}
        {type === "portfolio" && (
          <div className="relative h-28">
            <div
              className="absolute inset-2 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${color}20, ${color}05)`,
                border: `1px solid ${color}30`,
                transform: "perspective(200px) rotateX(8deg) rotateY(-5deg)",
              }}
            />
            <div
              className="absolute inset-4 rounded"
              style={{
                background: `linear-gradient(135deg, ${color}30, transparent)`,
                transform: "perspective(200px) rotateX(4deg)",
              }}
            />
          </div>
        )}
        {type === "minimal" && (
          <div className="space-y-2">
            <div className="h-3 rounded bg-white/10 w-2/3" />
            <div className="h-2 rounded bg-white/5 w-full" />
            <div className="h-2 rounded bg-white/5 w-4/5" />
            <div className="h-6 rounded-full w-24 mt-3" style={{ background: `${color}40` }} />
          </div>
        )}
      </div>

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: `linear-gradient(to top, ${color}10, transparent)`,
        }}
      />
    </div>
  );
}

export default function ProjectCard({ project, onOpen, featured = false }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: y * -8, y: x * 8 });
  };

  const resetTilt = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  if (featured) {
    return (
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={resetTilt}
        onClick={() => onOpen(project)}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative rounded-2xl overflow-hidden cursor-pointer group"
        style={{
          background: "linear-gradient(135deg, #16161F, #111118)",
          border: "1px solid #2A2A3A",
          transformStyle: "preserve-3d",
          boxShadow: hovered
            ? `0 30px 80px rgba(0,0,0,0.5), 0 0 50px rgba(139,92,246,0.15)`
            : `0 8px 32px rgba(0,0,0,0.3)`,
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: Info */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-medium px-3 py-1 rounded-full border border-purple/30 text-purple bg-purple/10">
                  Featured
                </span>
                <span className="text-xs text-text-muted">
                  {project.stack.slice(0, 3).join(" · ")}
                </span>
              </div>
              <h3 className="font-display font-extrabold text-4xl md:text-5xl mb-3 text-text">
                {project.title}
              </h3>
              <p className="text-purple font-medium text-lg mb-5">{project.tagline}</p>
              <p className="text-text-sub leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            {project.stats && (
              <div className="flex gap-8 mt-8">
                {project.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-2xl text-text mb-0.5">{s.value}</div>
                    <div className="text-xs text-text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 mt-8">
              <button className="group flex items-center gap-2 text-sm font-medium text-text hover:text-purple transition-colors duration-300">
                View Case Study
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-sm text-text-muted hover:text-text transition-colors duration-300"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative h-64 md:h-auto min-h-[280px] p-4 flex items-center justify-center overflow-hidden">
            {/* Glow behind mockup */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(ellipse at center, ${project.accentColor}40, transparent 70%)`,
              }}
            />
            <div
              className="relative w-full h-full"
              style={{
                transform: "perspective(800px) rotateY(-8deg) rotateX(3deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <MockupVisual 
                type={project.mockupType} 
                color={project.accentColor}
                image={project.image}
              />
            </div>
          </div>
        </div>

        {/* Hover border glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            background: `linear-gradient(135deg, ${project.accentColor}10, transparent, ${project.accentColor}05)`,
            border: `1px solid ${project.accentColor}30`,
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={resetTilt}
      onClick={() => onOpen(project)}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative rounded-xl overflow-hidden cursor-pointer group flex flex-col"
      style={{
        background: "linear-gradient(135deg, #16161F, #111118)",
        border: `1px solid ${hovered ? project.accentColor + "30" : "#2A2A3A"}`,
        transformStyle: "preserve-3d",
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.4), 0 0 30px ${project.accentColor}10`
          : `0 4px 20px rgba(0,0,0,0.2)`,
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* Mockup visual */}
      <div className="relative h-40 p-3 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(ellipse at center, ${project.accentColor}, transparent 70%)`,
          }}
        />
        <div
          style={{
            height: "100%",
            transform: "perspective(400px) rotateX(5deg)",
          }}
        >
          <MockupVisual 
            type={project.mockupType} 
            color={project.accentColor}
            image={project.image}
          />
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display font-bold text-xl text-text group-hover:text-purple transition-colors duration-300">
            {project.title}
          </h3>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{ background: `${project.accentColor}20`, color: project.accentColor }}
          >
            {project.stats?.[0]?.value ?? "Project"}
          </span>
        </div>
        <p className="text-xs text-purple mb-3 font-medium">{project.tagline}</p>
        <p className="text-sm text-text-muted leading-relaxed flex-1 line-clamp-2">
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 rounded bg-surface2 text-text-muted border border-border/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
          <button className="text-xs font-medium text-text-sub group-hover:text-text transition-colors flex items-center gap-1.5">
            Case Study <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
          {project.isFigma ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-xs text-purple hover:text-purple/80 transition-colors"
            >
              Figma ↗
            </a>
          ) : (
            project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-text-muted hover:text-text transition-colors"
              >
                ↗ GitHub
              </a>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}