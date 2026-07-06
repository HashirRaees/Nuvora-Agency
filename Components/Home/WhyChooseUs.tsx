"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaMobileScreenButton,
  FaGaugeHigh,
  FaMagnifyingGlass,
  FaPalette,
  FaCircleDollarToSlot,
  FaHeadset,
  FaCircleCheck,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    icon: FaMobileScreenButton,
    title: "Built for Mobile Visitors First",
    desc: "Over 60% of local searches happen on a phone. Every site we build is designed mobile-first, then scaled up to desktop — not the other way around.",
    color: "text-[#3D0C99]",
    bg: "from-[#3D0C99]/15 to-[#00ADE0]/5",
    border: "border-[#3D0C99]/20",
  },
  {
    icon: FaGaugeHigh,
    title: "Sub-2-Second Load Times",
    desc: "Slow sites lose customers before they even see your homepage. We optimize images, code, and hosting so your site loads fast on any connection.",
    color: "text-[#00ADE0]",
    bg: "from-[#00ADE0]/15 to-[#3D0C99]/5",
    border: "border-[#00ADE0]/20",
  },
  {
    icon: FaMagnifyingGlass,
    title: "SEO Structure From Day One",
    desc: "Proper headings, meta tags, and site structure are built in from the first line of code — not added as an afterthought once you ask why you're not on Google.",
    color: "text-[#3D0C99]",
    bg: "from-[#3D0C99]/15 to-[#00ADE0]/5",
    border: "border-[#3D0C99]/20",
  },
  {
    icon: FaPalette,
    title: "Custom Design, No Templates",
    desc: "Every layout is designed around your brand and your customers' behavior, not dropped in from a theme marketplace.",
    color: "text-[#00ADE0]",
    bg: "from-[#00ADE0]/15 to-[#3D0C99]/5",
    border: "border-[#00ADE0]/20",
  },
  {
    icon: FaCircleDollarToSlot,
    title: "Transparent, Fixed-Price Packages",
    desc: "You'll know your total cost before we start. No hourly surprises, no scope creep charges.",
    color: "text-[#3D0C99]",
    bg: "from-[#3D0C99]/15 to-[#00ADE0]/5",
    border: "border-[#3D0C99]/20",
  },
  {
    icon: FaHeadset,
    title: "Support After Launch",
    desc: "We check in after launch, fix issues fast, and offer ongoing maintenance plans so your site doesn't go stale.",
    color: "text-[#00ADE0]",
    bg: "from-[#00ADE0]/15 to-[#3D0C99]/5",
    border: "border-[#00ADE0]/20",
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
        <div ref={headingRef} className="text-center max-w-4xl mx-auto mb-16">
          <p className="section-label mb-3 text-xs">Why Nuvora.</p>
          <h2 className="section-heading text-2xl md:text-5xl">
            Why Local Businesses Choose Nuvora {" "}
            <span className="gradient-text">Over a Freelancer or Template</span>
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
                <FaCircleCheck className="text-sm text-white/20 group-hover:text-white/40 transition-colors mt-1 ml-auto" />
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
