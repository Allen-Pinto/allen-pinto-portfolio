import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-text">Allen Pinto</span>
          <span className="text-purple">.</span>
          <span className="text-text-muted text-sm ml-2">Full Stack Developer & UI/UX Designer</span>
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/Allen-Pinto" },
            { label: "LinkedIn", href: "http://www.linkedin.com/in/allen-pinto-63aa48303" },
            { label: "Email", href: "mailto:pinto.allen05@gmail.com" },
          ].map((link) => (
            /* Fixed: Added missing < for the a tag */
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-text transition-colors tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} Allen Pinto. Built with Next.js.
        </p>
      </div>
    </footer>
  );
}