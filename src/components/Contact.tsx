"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xykbgygd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-purple text-xs font-medium tracking-widest uppercase mb-6"
            >
              Contact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-6"
            >
              Let's build something
              <br />
              <span className="gradient-text">that stands out.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-sub text-base leading-relaxed mb-10"
            >
              Open to full-time roles, freelance projects, and interesting collaborations. If you have something great to build, let's talk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <a
                href="mailto:pinto.allen05@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg border border-border2 bg-surface/50 flex items-center justify-center group-hover:border-purple/40 group-hover:bg-purple/10 transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 4L8 9L14 4M2 4H14V12H2V4Z" stroke="#9898A8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-text-sub text-sm group-hover:text-text transition-colors duration-300">
                  pinto.allen05@gmail.com
                </span>
              </a>

              {[
                { label: "GitHub", href: "https://github.com/Allen-Pinto", sub: "Allen-Pinto" },
                { label: "LinkedIn", href: "http://www.linkedin.com/in/allen-pinto-63aa48303", sub: "allen-pinto-63aa48303" },
                { label: "Resume", href: "https://docs.google.com/document/d/1m3-bRScJh4lhyoZbOBGqViGQZwfiiHhV/edit?usp=sharing&ouid=108992954880548520689&rtpof=true&sd=true", sub: "View / Download" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg border border-border2 bg-surface/50 flex items-center justify-center group-hover:border-purple/40 group-hover:bg-purple/10 transition-all duration-300">
                    <span className="text-text-muted text-xs font-medium">{link.label[0]}</span>
                  </div>
                  <div>
                    <p className="text-text-sub text-sm group-hover:text-text transition-colors duration-300">{link.label}</p>
                    <p className="text-text-muted text-xs">{link.sub}</p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {status === "sent" ? (
              <div className="p-10 rounded-2xl border border-purple/30 bg-purple/5 text-center">
                <div className="w-14 h-14 rounded-full bg-purple/20 border border-purple/40 flex items-center justify-center mx-auto mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-text mb-2">Message sent!</h3>
                <p className="text-text-sub">I'll get back to you within 24 hours.</p>
              </div>
            ) : status === "error" ? (
              <div className="p-10 rounded-2xl border border-red-500/30 bg-red-500/5 text-center">
                <div className="w-14 h-14 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center mx-auto mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 18L18 6M6 6L18 18" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-text mb-2">Something went wrong!</h3>
                <p className="text-text-sub">Please try again or email me directly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-surface border border-border2 rounded-xl px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-purple/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-surface border border-border2 rounded-xl px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-purple/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-surface border border-border2 rounded-xl px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-purple/50 transition-colors duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 rounded-xl bg-purple text-white font-medium text-sm tracking-wide hover:bg-purple/90 disabled:opacity-60 transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {status === "sending" ? "Sending..." : "Send Message →"}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}