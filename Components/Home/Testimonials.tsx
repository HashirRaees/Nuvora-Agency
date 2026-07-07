"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import Card from "@/Components/ui/Card";

gsap.registerPlugin(ScrollTrigger);

const data = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "CEO, Bloom Bakery",
    avatar: "SM",
    text: "Nuvora delivered an absolutely stunning website that increased our online orders by 40% in the first month. The design exceeded every expectation.",
    stars: 5,
    color: "from-[#3D0C99] to-[#00ADE0]",
  },
  {
    id: 2,
    name: "Mark Davidson",
    role: "Owner, Pro Plumbing Co.",
    avatar: "MD",
    text: "Professional, fast, and incredibly talented. Our new site generates 3x more leads than before. Couldn't be happier with the results.",
    stars: 5,
    color: "from-[#00ADE0] to-[#3D0C99]",
  },
  {
    id: 3,
    name: "Jules Fontaine",
    role: "Founder, Nomad Travels",
    avatar: "JF",
    text: "Exceptional communication throughout the entire project. The landing page design is world-class — modern, fast, and converts like crazy.",
    stars: 5,
    color: "from-[#3D0C99] to-[#00ADE0]",
  },
  {
    id: 4,
    name: "Ariana Brooks",
    role: "Marketing Lead, Northstar Studio",
    avatar: "AB",
    text: "The team made the whole process feel effortless. Our new site looks premium, loads quickly, and has already improved our conversion rate.",
    stars: 5,
    color: "from-[#00ADE0] to-[#3D0C99]",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

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
      gsap.fromTo(
        carouselRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: carouselRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-12 md:py-24 bg-[#010205] relative overflow-hidden">
      <div className="orb orb-violet absolute left-1/4 top-0 w-96 h-96 opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-8 md:mb-16">
          <p className="section-label mb-3 text-xs">What Clients Say</p>
          <h2 className="section-heading text-2xl md:text-5xl">
            Real Stories, <span className="gradient-text">Real Results</span>
          </h2>
        </div>

        <div ref={carouselRef} className="w-full mx-auto px-0 md:px-2 relative">
          <Carousel opts={{ loop: true, align: "start" }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {data.map((t) => (
                <CarouselItem key={t.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 xl:basis-1/3">
                  <div className="h-full p-1">
                    <Card className="flex flex-col items-start text-left p-8 md:p-12 relative overflow-hidden" hover glow>
                      {/* Quote Icon */}
                      <FaQuoteLeft className="text-4xl md:text-6xl text-[#00ADE0]/25 mb-6" />

                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {Array.from({ length: t.stars }).map((_, i) => (
                          <FaStar key={i} className="text-[#00ADE0] text-lg" />
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-sm md:text-lg text-white/80 leading-relaxed font-light mb-8 max-w-2xl mx-auto">
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
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex bg-white/5 border border-white/10 hover:bg-white/10 text-white" />
            <CarouselNext className="hidden md:inline-flex bg-white/5 border border-white/10 hover:bg-white/10 text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
