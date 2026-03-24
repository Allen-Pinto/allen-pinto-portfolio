"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const external = [
  { label: "Resume", href: "https://docs.google.com/document/d/1m3-bRScJh4lhyoZbOBGqViGQZwfiiHhV/edit?usp=sharing&ouid=108992954880548520689&rtpof=true&sd=true", external: true },
  { label: "GitHub", href: "https://github.com/Allen-Pinto", external: true },
  { label: "LinkedIn", href: "http://www.linkedin.com/in/allen-pinto-63aa48303", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-border/60 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo - Fixed: Added missing < for anchor tag */}
          <a
            href="#"
            className="font-display font-700 text-lg tracking-tight hover:text-purple transition-colors duration-300"
          >
            Allen Pinto
            <span className="text-purple">.</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              /* Fixed: Added missing < for anchor tag */
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-sub hover:text-text transition-colors duration-300 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-4 bg-border2" />
            {external.map((link) => (
              /* Fixed: Added missing < for anchor tag */
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-medium tracking-wide transition-all duration-300 ${
                  link.label === "Resume"
                    ? "px-4 py-1.5 rounded-full border border-purple/40 text-purple hover:bg-purple/10 hover:border-purple/70"
                    : "text-text-sub hover:text-text"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-text transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {[...links, ...external].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={"external" in link && link.external ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-display text-3xl font-bold text-text-sub hover:text-text hover:text-purple transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}