"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaMagnifyingGlass,
 FaPalette,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn your business, your customers, and your competitors before designing anything.",
    icon: FaMagnifyingGlass,
    color: "text-[#3D0C99]",
    bg: "from-[#3D0C99]/20 to-[#00ADE0]/10",
    border: "border-[#3D0C99]/20",
  },
  {
    num: "02",
    title: "Design",
    desc: "Custom layouts built around how your customers actually browse and decide.",
    icon: FaPalette,
    color: "text-[#00ADE0]",
    bg: "from-[#00ADE0]/20 to-[#3D0C99]/10",
    border: "border-[#00ADE0]/20",
  },
  {
    num: "03",
    title: "Development",
    desc: "Clean, fast React/Next.js code — no page-builder bloat.",
    icon: FaLaptopCode,
    color: "text-[#3D0C99]",
    bg: "from-[#3D0C99]/20 to-[#00ADE0]/10",
    border: "border-[#3D0C99]/20",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Full testing across devices, then a smooth go-live with post-launch support.",
    icon: FaRocket,
    color: "text-[#00ADE0]",
    bg: "from-[#00ADE0]/20 to-[#3D0C99]/10",
    border: "border-[#00ADE0]/20",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 85%" },
        }
      );

      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: { trigger: stepsRef.current, start: "top 80%" },
          }
        );
      }

      // Animate the connector line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: { trigger: stepsRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-12 md:py-24 border-b bg-[#010205] relative overflow-hidden">
      <div className="orb orb-violet absolute left-1/2 top-0 -translate-x-1/2 w-125 h-64 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-20">
          <p className="section-label mb-3 text-xs">How We Work</p>
          <h2 className="section-heading text-2xl md:text-5xl">
            Our <span className="gradient-text">Proven Process</span>
          </h2>
          <p className="mt-4 text-white/55 text-sm md:text-lg leading-relaxed">
            A simple, transparent workflow from idea to launch — no surprises.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 px-20">
            <div
              ref={lineRef}
              className="h-px bg-linear-to-r from-[#3D0C99]/60 via-[#00ADE0]/60 to-[#3D0C99]/40"
            />
          </div>

          <div ref={stepsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="relative bg-white/3 backdrop-blur-sm border border-white/7 rounded-2xl p-6 hover:border-white/14 transition-colors duration-300"
              >
                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-4xl font-black text-white/6"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {s.num}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-md bg-linear-to-br ${s.bg} border ${s.border} flex items-center justify-center`}
                  >
                    <s.icon className={`text-2xl ${s.color}`} />
                  </div>
                </div>
                <h3
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
