"use client";

import React, { useState, useEffect, useRef } from "react";
import Card from "@/Components/ui/Card";
import Button from "@/Components/ui/Button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "La Cucina Restaurant",
    desc: "Booking & menu-focused site with elegant food photography layout.",
    category: "restaurant",
    live: "https://la-cucina-restaurant.vercel.app/",
    image: "la cucina.png",
    accent: "text-[#00ADE0]",
    tag: "bg-[#00ADE0]/15 text-[#00ADE0] border-[#00ADE0]/30",
  },
  {
    id: 2,
    title: "Aqua Fix Plumbing",
    desc: "Service booking and lead-gen with trust signals & CTAs.",
    category: "local",
    live: "https://aqua-fix-plumbing.vercel.app/",
    image: "aqua-fix.png",
    accent: "text-[#3D0C99]",
    tag: "bg-[#3D0C99]/15 text-[#3D0C99] border-[#3D0C99]/30",
  },
  {
    id: 3,
    title: "Iron Forge Gym",
    desc: "Responsive site for a local gym showcasing trainer bios and membership plans",
    category: "local",
    live: "https://iron-forge-gym-mu.vercel.app/",
    image: "iron forge.png",
    accent: "text-[#00ADE0]",
    tag: "bg-[#00ADE0]/15 text-[#00ADE0] border-[#00ADE0]/30",
  },
  {
    id: 4,
    title: "Havenly Real Estate",
    desc: "Property listings, search filters and agent contact system.",
    category: "real-estate",
    live: "https://havenly-estates.vercel.app/",
    image: "havenly.png",
    accent: "text-[#3D0C99]",
    tag: "bg-[#3D0C99]/15 text-[#3D0C99] border-[#3D0C99]/30",
  },
  {
    id: 5,
    title: "Wanderlux travels",
    desc: "Conversion-focused landing page with stunning visuals.",
    category: "local",
    live: "https://wanderlux-travel-ten.vercel.app/",
    gradient: "from-[#3D0C99]/60 via-[#00ADE0]/40 to-[#3D0C99]/20",
    image: "wanderlux.png",
    accent: "text-[#00ADE0]",
    tag: "bg-[#00ADE0]/15 text-[#00ADE0] border-[#00ADE0]/30",
  },
  {
    id: 6,
    title: "Build Core Constructions",
    desc: "A full fledged construction webiste for residential & commercial projects.",
    category: "local",
    live: "https://build-core-constructions-nu.vercel.app/",
    gradient: "from-[#00ADE0]/50 via-[#3D0C99]/35 to-[#00ADE0]/20",
    image: "buildcore.png",
    accent: "text-[#3D0C99]",
    tag: "bg-[#3D0C99]/15 text-[#3D0C99] border-[#3D0C99]/30",
  },
];

const categories = ["all", "restaurant", "local", "real-estate"];
const catLabels: Record<string, string> = {
  all: "All",
  restaurant: "Restaurant",
  local: "Local Biz",
  "real-estate": "Real Estate",
};

interface FeaturedProjectsProps {
  isHomepage?: boolean;
}

export default function FeaturedProjects({ isHomepage = false }: FeaturedProjectsProps) {
  const [filter, setFilter] = useState<string>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const displayedProjects = isHomepage
    ? projects.slice(0, 3)
    : filter === "all"
    ? projects
    : projects.filter((p) => p.category === filter);

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

  // Animate cards when filter or display list changes
  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 28, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.07,
        ease: "power2.out",
      }
    );
  }, [filter, isHomepage]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-12 md:py-24 bg-[#010205] relative overflow-hidden">
      <div className="orb orb-cyan absolute left-0 top-1/3 w-80 h-80 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-3 md:text-left text-center text-xs">Our Work</p>
            <h2 className="section-heading text-2xl md:text-5xl">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>

          {/* Filter tabs — Only shown if not on homepage */}
          {!isHomepage && (
            <div className="flex justify-center flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={[
                    "px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer",
                    filter === c
                      ? "bg-[#3D0C99] border-[#00ADE0] text-white shadow-lg shadow-[#3D0C99]/30"
                      : "bg-white/4 border-white/8 text-white/55 hover:text-white hover:bg-white/8",
                  ].join(" ")}
                >
                  {catLabels[c]}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedProjects.map((p) => (
            <Card key={p.id} glow hover className="overflow-hidden p-0!">
              {/* Image preview with dynamic color overlay */}
              <div className="h-44 relative">
                <img
                  src={`/assets/${p.image}`}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* <div className={`absolute inset-0 bg-linear-to-br ${p.gradient || 'from-[#3D0C99]/60 via-[#00ADE0]/40 to-[#3D0C99]/20'} mix-blend-overlay`} /> */}
                {/* Grid lines */}
                <div className="absolute inset-0 grid-bg opacity-30" />
                {/* content slot (if needed) */}
                <div className="absolute inset-0 flex items-end p-4" />
              </div>
              <div className="p-5">
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold border mb-3 ${p.tag}`}
                >
                  {catLabels[p.category]}
                </span>
                <h3
                  className="font-bold text-white text-base mb-1.5"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={FaArrowUpRightFromSquare}
                    iconPosition="right"
                    onClick={() => {
                      if (p.live) window.open(p.live, "_blank");
                    }}
                  >
                    Live
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button for Homepage */}
        {isHomepage && (
          <div className="mt-12 flex justify-center">
            <Link href="/portfolio" className="no-underline">
              <Button
                variant="outline"
                size="lg"
                icon={FaArrowRight}
                iconPosition="right"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
