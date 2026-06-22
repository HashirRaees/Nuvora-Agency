"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiFillStar } from "react-icons/ai";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, Bloom Bakery",
    avatar: "SM",
    text: "Studio delivered an absolutely stunning website that increased our online orders by 40% in the first month. The design exceeded every expectation.",
    stars: 5,
    color: "from-violet-600 to-purple-700",
  },
  {
    id: 2,
    name: "Mark Davidson",
    role: "Owner, Pro Plumbing Co.",
    avatar: "MD",
    text: "Professional, fast, and incredibly talented. Our new site generates 3x more leads than before. Couldn't be happier with the results.",
    stars: 5,
    color: "from-cyan-600 to-blue-700",
  },
  {
    id: 3,
    name: "Jules Fontaine",
    role: "Founder, Nomad Travels",
    avatar: "JF",
    text: "Exceptional communication throughout the entire project. The landing page design is world-class — modern, fast, and converts like crazy.",
    stars: 5,
    color: "from-pink-600 to-rose-700",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const animateCard = (inDirection: "left" | "right", cb: () => void) => {
    if (!cardRef.current) return cb();
    const xOut = inDirection === "right" ? -60 : 60;
    const xIn = inDirection === "right" ? 60 : -60;
    gsap.to(cardRef.current, {
      opacity: 0,
      x: xOut,
      duration: 0.28,
      ease: "power2.in",
      onComplete: () => {
        cb();
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: xIn },
          { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }
        );
      },
    });
  };

  const prev = () => {
    setDirection("left");
    animateCard("left", () =>
      setIndex((s) => (s - 1 + data.length) % data.length)
    );
  };

  const next = () => {
    setDirection("right");
    animateCard("right", () => setIndex((s) => (s + 1) % data.length));
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("right");
      animateCard("right", () => setIndex((s) => (s + 1) % data.length));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = data[index];

  return (
    <section id="testimonials" ref={sectionRef} className="py-12 md:py-24 bg-[#010205] relative overflow-hidden">
      <div className="orb orb-violet absolute left-1/4 top-0 w-96 h-96 opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-16">
          <p className="section-label mb-3 text-xs">What Clients Say</p>
          <h2 className="section-heading text-2xl md:text-5xl">
            Real Stories,{" "}
            <span className="gradient-text">Real Results</span>
          </h2>
        </div>

        {/* Card */}
        <div ref={cardRef} className="relative">
          <div className="bg-white/4 backdrop-blur-xl border border-white/8 rounded-md p-8 md:p-12 text-center">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: t.stars }).map((_, i) => (
                <AiFillStar key={i} className="text-amber-400 text-xl" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
              "{t.text}"
            </blockquote>

            {/* Avatar + name */}
            <div className="flex items-center justify-center gap-4">
              <div
                className={`w-12 h-12 rounded-full bg-linear-to-br ${t.color} flex items-center justify-center text-base font-semibold text-white`}
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {t.avatar}
              </div>
              <div className="text-left">
                <div className="font-semibold text-white text-base" style={{ fontFamily: "var(--font-outfit)" }}>
                  {t.name}
                </div>
                <div className="text-white/40 text-xs">{t.role}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/6 border border-white/8 text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <RiArrowLeftSLine size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {data.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? "right" : "left");
                  animateCard(i > index ? "right" : "left", () => setIndex(i));
                }}
                className={[
                  "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                  i === index
                    ? "w-6 bg-linear-to-r from-violet-500 to-cyan-400"
                    : "w-1.5 bg-white/20 hover:bg-white/40",
                ].join(" ")}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/6 border border-white/8 text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            <RiArrowRightSLine size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
