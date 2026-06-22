"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/Components/ui/Button";
import { RiArrowRightLine, RiTeamLine, RiAwardLine, RiGlobalLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: RiTeamLine, num: "50+", label: "Projects Delivered", color: "text-violet-400" },
  { icon: RiAwardLine, num: "98%", label: "Client Satisfaction", color: "text-cyan-400" },
  { icon: RiGlobalLine, num: "3+", label: "Years Experience", color: "text-pink-400" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-24 bg-[#010205] relative overflow-hidden">
      <div className="orb orb-violet absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-20 pointer-events-none" />
      <div className="orb orb-cyan absolute right-0 bottom-0 w-64 h-64 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div ref={leftRef} className="relative">
            <div className="relative rounded-md overflow-hidden bg-linear-to-br from-[#12103a] to-[#0a1828] border border-white/7 p-8 shadow-2xl shadow-black/40">
              {/* Grid bg */}
              <div className="absolute inset-0 grid-bg opacity-40" />

              {/* Floating stat cards */}
              <div className="relative z-10 space-y-4">
                {/* Mock profile */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-md bg-linear-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-2xl font-black text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                    N.
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-outfit)" }}>Nuvora</div>
                    <div className="text-white/40 text-sm">Web Design & Development</div>
                  </div>
                </div>

                {/* Stat bars */}
                {[
                  { label: "Design Quality", pct: 98 },
                  { label: "Client Communication", pct: 100 },
                  { label: "On-Time Delivery", pct: 95 },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="flex justify-between text-xs text-white/50 mb-1.5">
                      <span>{b.label}</span>
                      <span>{b.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/6">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-violet-500 to-cyan-400"
                        style={{ width: `${b.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-violet-600/30 blur-2xl rounded-full pointer-events-none" />
            </div>
          </div>

          {/* Right — text */}
          <div ref={rightRef}>
            <p className="section-label mb-3 md:text-left text-center text-xs">About Us</p>
            <h2 className="section-heading mb-6 text-2xl md:text-left text-center md:text-5xl">
              We Are a Web Studio
              <br />
              <span className="gradient-text">Obsessed With Quality</span>
            </h2>
            <p className="text-white/60 text-sm md:text-lg md:text-left text-center leading-relaxed mb-5">
              We are a web design and development studio dedicated to creating modern, high-performing websites that help businesses establish a strong online presence.
            </p>
            <p className="text-white/60 text-sm md:text-lg md:text-left text-center leading-relaxed mb-10">
              Our focus is on clean design, exceptional performance, and user experience that converts. Every line of code and pixel of design is crafted with purpose.
            </p>

            {/* Stats row */}
                <div ref={statsRef} className="flex flex-wrap justify-center gap-6 mb-10">
              {stats.map((s) => (
                <div
                  key={s.label}
                      className="flex items-center gap-3 bg-white/4 border border-white/7 rounded-md px-4 py-5"
                >
                  <s.icon className={`text-2xl ${s.color}`} />
                  <div>
                    <div className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                      {s.num}
                    </div>
                    <div className="text-xs text-white/40">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
              <div className="flex md:justify-start justify-center">
            <Button
              variant="primary"
              size="lg"
              icon={RiArrowRightLine}
              iconPosition="right"
              onClick={() => scrollToSection("contact")}
            >
              Work With Us
            </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
