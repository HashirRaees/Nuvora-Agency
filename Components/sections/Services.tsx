"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "@/Components/ui/Card";
import {
  RiPencilRulerLine,
  RiCodeSSlashLine,
  RiWordpressLine,
  RiRefreshLine,
  RiSpeedLine,
  RiCustomerService2Line,
} from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: RiPencilRulerLine,
    title: "Website Design",
    desc: "Modern and visually appealing designs tailored to your brand identity and goals.",
    color: "from-violet-500/20 to-violet-700/10",
    iconColor: "text-violet-400",
    border: "border-violet-500/20",
  },
  {
    icon: RiCodeSSlashLine,
    title: "Front-End Development",
    desc: "Responsive, lightning-fast websites built with React and Next.js.",
    color: "from-cyan-500/20 to-cyan-700/10",
    iconColor: "text-cyan-400",
    border: "border-cyan-500/20",
  },
  {
    icon: RiWordpressLine,
    title: "WordPress Development",
    desc: "Custom WordPress and Elementor solutions for easy self-management.",
    color: "from-blue-500/20 to-blue-700/10",
    iconColor: "text-blue-400",
    border: "border-blue-500/20",
  },
  {
    icon: RiRefreshLine,
    title: "Website Redesign",
    desc: "Transform outdated websites into modern, high-performing experiences.",
    color: "from-pink-500/20 to-pink-700/10",
    iconColor: "text-pink-400",
    border: "border-pink-500/20",
  },
  {
    icon: RiSpeedLine,
    title: "Performance Optimization",
    desc: "Fast-loading, Core Web Vitals optimized, and SEO-friendly websites.",
    color: "from-amber-500/20 to-amber-700/10",
    iconColor: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    icon: RiCustomerService2Line,
    title: "Maintenance & Support",
    desc: "Reliable website updates, monitoring, and ongoing technical support.",
    color: "from-emerald-500/20 to-emerald-700/10",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/20",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-12 md:py-24 bg-[#010205] relative overflow-hidden">
      {/* Background orb */}
      <div className="orb orb-violet absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="max-w-2xl mb-8 md:mb-16">
          <p className="section-label mb-3 text-xs">What We Offer</p>
          <h2 className="section-heading text-2xl md:text-5xl">
            Services Built for <span className="gradient-text">Real Results</span>
          </h2>
          <p className="mt-4 text-white/55 text-sm md:text-lg leading-relaxed">
            From first design to launch day — we cover every step of building your online presence.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => (
            <Card key={s.title} glow hover>
              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-md bg-linear-to-br ${s.color} border ${s.border} mb-5`}
              >
                <s.icon className={`text-2xl ${s.iconColor}`} />
              </div>
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
