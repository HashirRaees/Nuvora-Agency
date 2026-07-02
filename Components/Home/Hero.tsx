"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "@/Components/ui/Button";
import DarkVeil from "@/Components/ui/DarkVeil";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power3.out" }
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
        "-=0.45"
      )
      .fromTo(
        actionsRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" },
        "-=0.35"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative overflow-hidden min-h-100 pt-30 pb-10 md:min-h-137.5 md:pb-0 md:pt-40"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0, opacity: 0.7 }}
      >
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex items-center text-center justify-center">
          <div className="max-w-5xl">
            <h1
              ref={titleRef}
              className="text-2xl md:text-7xl font-extrabold text-white leading-tight opacity-0"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              We Build Digital Experiences <br />{" "}
              <span className="gradient-text">That Drive Growth</span>
            </h1>
            <p
              ref={descRef}
              className="mt-6 max-w-3xl mx-auto text-sm md:text-lg text-white/80 text-center opacity-0 leading-relaxed"
            >
              We transform ambitious ideas into high-performing websites and
              digital solutions through strategic design, modern development, and
              innovative technology—helping businesses grow, engage customers,
              and stand out online.
            </p>

            <div
              ref={actionsRef}
              className="mt-8 flex justify-center gap-4 opacity-0"
            >
              <Button
                onClick={() => {
                  const el = document.getElementById("portfolio");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Our Work
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
