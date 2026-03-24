"use client";

import { useCursorGlow } from "@/hooks/useCursorGlow";

export default function CursorGlow() {
  const { dotRef, ringRef, glowRef } = useCursorGlow();

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="cursor-dot fixed pointer-events-none z-[9999]"
        style={{ position: "fixed", transform: "translate(-50%,-50%)" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="cursor-ring fixed pointer-events-none z-[9998]"
        style={{ position: "fixed", transform: "translate(-50%,-50%)" }}
      />
      {/* Ambient glow */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-0"
        style={{
          position: "fixed",
          width: "600px",
          height: "600px",
          transform: "translate(-50%,-50%)",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          transition: "none",
        }}
      />
    </>
  );
}