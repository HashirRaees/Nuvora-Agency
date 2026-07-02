"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    q: "How long does a website typically take to build?",
    a: "Timelines vary by scope — a landing page takes 1-2 weeks, while a full business website typically runs 4-8 weeks. We provide a detailed timeline at the start of every project.",
  },
  {
    q: "Do you redesign existing websites?",
    a: "Absolutely. We specialize in transforming outdated websites into modern, high-performing experiences while preserving your SEO equity and improving conversion rates.",
  },
  {
    q: "Do you provide hosting and domain setup?",
    a: "Yes — we can handle hosting setup, domain configuration, and SSL certificates. We also recommend the best hosting solutions for your traffic and budget.",
  },
  {
    q: "Will my website work perfectly on mobile devices?",
    a: "Every website we build is mobile-first and rigorously tested across all major devices and browsers. Mobile performance is a top priority.",
  },
  {
    q: "What happens after the website launches?",
    a: "We offer ongoing maintenance, content updates, performance monitoring, and support packages to keep your site fast, secure, and up-to-date.",
  },
  {
    q: "How much does a website cost?",
    a: "Pricing depends on scope and complexity. We offer transparent, project-based quotes with no hidden fees. Reach out for a free consultation and custom quote.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: listRef.current, start: "top 82%" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const toggle = (idx: number) => {
    const isOpening = open !== idx;
    const newOpen = isOpening ? idx : null;

    // Animate closing old
    if (open !== null && contentRefs.current[open]) {
      gsap.to(contentRefs.current[open], {
        height: 0,
        opacity: 0,
        duration: 0.28,
        ease: "power2.in",
      });
    }

    // Animate opening new
    if (isOpening && contentRefs.current[idx]) {
      const el = contentRefs.current[idx]!;
      const scrollH = el.scrollHeight;
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        { height: scrollH, opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    }

    setOpen(newOpen);
  };

  // On mount, open first item immediately
  useEffect(() => {
    if (contentRefs.current[0]) {
      const el = contentRefs.current[0]!;
      gsap.set(el, { height: el.scrollHeight, opacity: 1 });
    }
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-12 md:py-24 bg-[#010205] relative overflow-hidden">
      <div className="orb orb-cyan absolute right-0 top-1/2 w-72 h-72 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-14">
          <p className="section-label mb-3 text-xs">FAQ</p>
          <h2 className="section-heading text-2xl md:text-5xl">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-white/55 text-lg">
            Everything you need to know before we start working together.
          </p>
        </div>

        <div ref={listRef} className="space-y-3">
          {items.map((item, idx) => (
            <div
              key={item.q}
              className={[
                "rounded-md border transition-all duration-300 overflow-hidden",
                open === idx
                  ? "border-[#3D0C99]/30 bg-[#3D0C99]/6"
                  : "border-white/7 bg-white/3 hover:border-white/12",
              ].join(" ")}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer gap-4"
                onClick={() => toggle(idx)}
              >
                <span
                  className={[
                    "font-semibold text-sm sm:text-base transition-colors duration-200",
                    open === idx ? "text-white" : "text-white/75",
                  ].join(" ")}
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {item.q}
                </span>
                <span
                  className={[
                    "shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-200",
                    open === idx
                      ? "bg-[#3D0C99] border-[#00ADE0] text-white"
                      : "bg-white/5 border-white/10 text-white/50",
                  ].join(" ")}
                >
                  {open === idx ? (
                    <RiSubtractLine size={14} />
                  ) : (
                    <RiAddLine size={14} />
                  )}
                </span>
              </button>

              <div
                ref={(el) => { contentRefs.current[idx] = el; }}
                className="overflow-hidden"
                style={{ height: 0, opacity: 0 }}
              >
                <p className="px-6 pb-5 text-sm text-white/55 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
