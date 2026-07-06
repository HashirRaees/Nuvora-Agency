import type { Metadata } from "next";
import InnerServices from "@/Components/Services/InnerServices";
import Packages from "@/Components/Services/Packages";
import CTA from "@/Components/Home/CTA";

export const metadata: Metadata = {
  title: "Nuvora — Web Design & Development Agency in Karachi, Pakistan",
  description:
    "Explore Nuvora's web design, front-end development, WordPress, and website redesign services. Transparent pricing packages starting at $799 — built with React & Next.js.",
  keywords: ["web design", "web development", "Next.js", "React", "portfolio", "agency"],
};


export default function ServicesPage() {
  return (
    <div
      className="min-h-screen text-white pt-20"
      style={{
        background: "linear-gradient(to bottom, #04070f 0%, #060b18 40%, #04070f 100%)",
      }}
    >
      <main>
        <section className="relative py-12 md:py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-[#3D0C99]/35 via-[#060b18]/80 to-[#00ADE0]/20" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/assets/batthern.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="orb orb-violet absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 h-80 opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h1
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Web Design & <span className="gradient-text"> Development Services</span>
            </h1>
            <p className="mt-4 text-white/55 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
              From a single landing page to a full custom web app — here's exactly what we build, and what's included.
            </p>
          </div>
        </section>

        <InnerServices />

        <Packages />

        <CTA />
      </main>
    </div>
  );
}
