"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/Components/ui/Button";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-16 md:py-28 bg-[#010205] relative overflow-hidden border-t border-white/5"
    >
      {/* Background orbs */}
      <div className="orb orb-violet absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-25 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div ref={textRef} className="space-y-6">
          <p className="section-label text-xs">Let's Work Together</p>
          <h2
            className="text-2xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Ready to Build Something <br />
            <span className="gradient-text">Exceptional?</span>
          </h2>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with Nuvora to turn your vision into a stunning, high-performing website. Let's create a digital presence that delivers real business growth.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href="/contact" className="no-underline">
              <Button
                variant="primary"
                size="lg"
                icon={FaArrowRight}
                iconPosition="right"
              >
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
