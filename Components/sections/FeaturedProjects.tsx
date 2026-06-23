"use client";

import { useState, useEffect, useRef } from "react";
import Card from "@/Components/ui/Card";
import Button from "@/Components/ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiExternalLinkLine} from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "La Cucina Restaurant",
    desc: "Booking & menu-focused site with elegant food photography layout.",
    category: "restaurant",
    live: "https://la-cucina-restaurant.vercel.app/",
    gradient: "from-orange-600/40 via-red-600/20 to-rose-900/30",
    image: "la cucina.png",
    accent: "text-orange-400",
    tag: "bg-orange-500/15 text-orange-300 border-orange-500/20",
  },
  {
    id: 2,
    title: "Plumbing Business Site",
    desc: "Service booking and lead-gen with trust signals & CTAs.",
    category: "local",
    live: "https://example.com/plumbing",
    gradient: "from-blue-600/40 via-blue-700/20 to-indigo-900/30",
    image: "plumbing.svg",
    accent: "text-blue-400",
    tag: "bg-blue-500/15 text-blue-300 border-blue-500/20",
  },
  {
    id: 3,
    title: "Travel Landing Page",
    desc: "Conversion-focused landing page with stunning visuals.",
    category: "landing",
    live: "https://example.com/travel",
    gradient: "from-cyan-600/40 via-teal-600/20 to-emerald-900/30",
    image: "travel.svg",
    accent: "text-cyan-400",
    tag: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    desc: "Admin & analytics dashboards with real-time data visualization.",
    category: "saas",
    live: "https://example.com/saas-dashboard",
    gradient: "from-violet-600/40 via-purple-700/20 to-indigo-900/30",
    image: "saas.svg",
    accent: "text-violet-400",
    tag: "bg-violet-500/15 text-violet-300 border-violet-500/20",
  },
  {
    id: 5,
    title: "Gym & Fitness Website",
    desc: "Classes, membership pages and personal trainer showcase.",
    category: "local",
    live: "https://example.com/gym",
    gradient: "from-pink-600/40 via-rose-600/20 to-red-900/30",
    image: "gym.svg",
    accent: "text-pink-400",
    tag: "bg-pink-500/15 text-pink-300 border-pink-500/20",
  },
  {
    id: 6,
    title: "Real Estate Platform",
    desc: "Property listings, search filters and agent contact system.",
    category: "real-estate",
    live: "https://example.com/real-estate",
    gradient: "from-emerald-600/40 via-green-700/20 to-teal-900/30",
    image: "real-estate.svg",
    accent: "text-emerald-400",
    tag: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
  },
];

const categories = ["all", "restaurant", "local", "landing", "saas", "real-estate"];
const catLabels: Record<string, string> = {
  all: "All",
  restaurant: "Restaurant",
  local: "Local Biz",
  landing: "Landing",
  saas: "SaaS",
  "real-estate": "Real Estate",
};

export default function FeaturedProjects() {
  const [filter, setFilter] = useState<string>("all");
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

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

  // Animate cards when filter changes
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
  }, [filter]);

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

          {/* Filter tabs */}
          <div className="flex justify-center flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={[
                  "px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer",
                  filter === c
                    ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-900/30"
                    : "bg-white/4 border-white/8 text-white/55 hover:text-white hover:bg-white/8",
                ].join(" ")}
              >
                {catLabels[c]}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <Card key={p.id} glow hover className="overflow-hidden p-0!">
              {/* Image preview with dynamic color overlay */}
              <div className="h-44 relative">
                <img
                  src={`/assets/${p.image}`}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} mix-blend-overlay`} />
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
                    icon={RiExternalLinkLine}
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
      </div>
    </section>
  );
}
