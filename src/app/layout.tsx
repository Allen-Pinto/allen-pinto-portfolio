import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Allen Pinto — Full Stack Developer & UI/UX Designer",
  description:
    "Full Stack Developer specializing in RESTful APIs, scalable backend systems, and end-to-end product development. Based in Bangalore, India.",
  keywords: ["Allen Pinto", "Full Stack Developer", "UI/UX Designer", "React", "Node.js", "MongoDB", "Bangalore"],
  authors: [{ name: "Allen Pinto" }],
  openGraph: {
    title: "Allen Pinto — Full Stack Developer & UI/UX Designer",
    description: "I design and build digital experiences. Frontend. UI/UX. Backend.",
    type: "website",
    url: "https://allen-verse.netlify.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Clash Display — sharp geometric display font */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=cabinet-grotesk@300,400,500,700,800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-text antialiased">
        {children}
      </body>
    </html>
  );
}