"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BsCheckCircleFill,
} from "react-icons/bs";
import {
  RiSmartphoneLine,
  RiSpeedLine,
  RiSearchLine,
  RiPaletteLine,
  RiMoneyDollarCircleLine,
  RiCustomerService2Line,
} from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    icon: RiSmartphoneLine,
    title: "Mobile Responsive",
    desc: "Every site looks and works flawlessly on all screen sizes.",
    color: "text-violet-400",
    bg: "from-violet-500/15 to-violet-700/5",
    border: "border-violet-500/20",
  },
  {
    icon: RiSpeedLine,
    title: "Fast Performance",
    desc: "Optimized for speed — sub-second load times and perfect Core Web Vitals.",
    color: "text-cyan-400",
    bg: "from-cyan-500/15 to-cyan-700/5",
    border: "border-cyan-500/20",
  },
  {
    icon: RiSearchLine,
    title: "SEO Friendly",
    desc: "Built with search engines in mind from the ground up.",
    color: "text-emerald-400",
    bg: "from-emerald-500/15 to-emerald-700/5",
    border: "border-emerald-500/20",
  },
  {
    icon: RiPaletteLine,
    title: "Modern Design",
    desc: "Cutting-edge aesthetics that wow visitors and build trust instantly.",
    color: "text-pink-400",
    bg: "from-pink-500/15 to-pink-700/5",
    border: "border-pink-500/20",
  },
  {
    icon: RiMoneyDollarCircleLine,
    title: "Affordable Pricing",
    desc: "Agency-quality results at prices that make sense for your business.",
    color: "text-amber-400",
    bg: "from-amber-500/15 to-amber-700/5",
    border: "border-amber-500/20",
  },
  {
    icon: RiCustomerService2Line,
    title: "Ongoing Support",
    desc: "We don't disappear after launch — we're here whenever you need us.",
    color: "text-blue-400",
    bg: "from-blue-500/15 to-blue-700/5",
    border: "border-blue-500/20",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why" ref={sectionRef} className="py-12 md:py-24 border-b bg-[#010205] relative overflow-hidden">
      <div className="orb orb-cyan absolute right-0 bottom-0 w-80 h-80 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-3 text-xs">Why Studio.</p>
          <h2 className="section-heading text-2xl md:text-5xl">
            Built Different,{" "}
            <span className="gradient-text">Built Better</span>
          </h2>
          <p className="mt-4 text-white/55 text-sm md:text-lg leading-relaxed">
            We combine technical excellence with design mastery to deliver websites that truly perform.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((item) => (
            <div
              key={item.title}
              className={`relative bg-gradient-to-br ${item.bg} border ${item.border} rounded-md p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group`}
            >
              {/* Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <item.icon className={`text-3xl ${item.color}`} />
                </div>
                <BsCheckCircleFill className="text-sm text-white/20 group-hover:text-white/40 transition-colors mt-1 ml-auto" />
              </div>
              <h3
                className="font-semibold text-white text-base mb-2"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
