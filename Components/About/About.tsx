"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/Components/ui/Button";
import Link from "next/link";
import { FaArrowRight, FaBullseye, FaLightbulb, FaShieldHalved, FaUsers } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const coreValues = [
  {
    title: "Purpose-Driven",
    description: "Every website we create is shaped around your goals, audience, and story.",
    icon: FaBullseye,
  },
  {
    title: "Creative Thinking",
    description: "We turn ideas into experiences that feel distinctive, memorable, and refined.",
    icon: FaLightbulb,
  },
  {
    title: "Trusted Quality",
    description: "We build with care, attention to detail, and a commitment to lasting impact.",
    icon: FaShieldHalved,
  },
  {
    title: "People First",
    description: "Communication, collaboration, and clarity guide everything we deliver.",
    icon: FaUsers,
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-24 bg-[#010205] relative overflow-hidden">
      <div className="orb orb-violet absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 opacity-20 pointer-events-none" />
      <div className="orb orb-cyan absolute right-0 bottom-0 w-64 h-64 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div ref={leftRef} className="relative h-full">
            <img
              src="/assets/about-img.webp"
              alt="About Nuvora"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          {/* Right — text */}
          <div ref={rightRef}>
            <p className="section-label mb-3 md:text-left text-center text-xs">About Us</p>
            <h2 className="section-heading mb-6 text-2xl md:text-left text-center md:text-5xl">
              Why Nuvora
              <span className="gradient-text"> Exists</span>
            </h2>
            <p className="text-white/60 text-sm md:text-lg md:text-left text-center leading-relaxed mb-5">
              Nuvora is a creative web studio focused on designing and developing websites that are not only visually striking but also thoughtfully built to support your business goals. We combine strategy, storytelling, and clean execution to create experiences that feel modern, trustworthy, and easy to navigate.
            </p>
            <p className="text-white/60 text-sm md:text-lg md:text-left text-center leading-relaxed mb-10">
              From the first concept to the final launch, we pay close attention to performance, responsiveness, and user experience so your website works beautifully across every device. Whether you need a fresh brand presence, a conversion-focused landing page, or a complete web experience, we build with clarity, purpose, and long-term impact in mind.
            </p>
            <div className="flex md:justify-start justify-center">
              <Link href="/contact" className="no-underline">
                <Button
                  variant="primary"
                  size="lg"
                  icon={FaArrowRight}
                  iconPosition="right"
                >
                  Work With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="section-heading mb-6 text-2xl text-center md:text-5xl">
              Our Core
              <span className="gradient-text"> Values</span>
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/3 p-5 backdrop-blur-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-[#3D0C99] to-[#00ADE0] text-white">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
