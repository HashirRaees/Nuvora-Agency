"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "@/Components/ui/Card";
import { FaCheck } from "react-icons/fa6";
import { servicesData } from "@/Components/Services/servicesData";

gsap.registerPlugin(ScrollTrigger);

export default function InnerServices() {
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
    <section ref={sectionRef} className="py-12 md:py-24 bg-[#010205] relative overflow-hidden">
      <div className="orb orb-violet absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className="max-w-2xl mb-8 md:mb-16">
          <p className="section-label mb-3 text-xs">What We Offer</p>
          <h2 className="section-heading text-2xl md:text-5xl">
            Services Built for <span className="gradient-text">Real Results</span>
          </h2>
          <p className="mt-4 text-white/55 text-sm md:text-lg leading-relaxed">
            From first design to launch day — we cover every step of building your online presence.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesData.map((s) => (
            <Card key={s.title} glow hover className="h-full">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-md bg-linear-to-br ${s.color} border ${s.border} mb-5`}>
                <s.icon className={`text-2xl ${s.iconColor}`} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                {s.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed">{s.desc}</p>

              <ul className="mt-5 space-y-2">
                {s.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <FaCheck className="mt-1 text-[#00ADE0] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
