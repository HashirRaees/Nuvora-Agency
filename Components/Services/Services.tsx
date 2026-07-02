"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "@/Components/ui/Card";
import Button from "@/Components/ui/Button";
import Link from "next/link";
import Packages from "@/Components/Services/Packages";
import {
  FaPalette,
  FaCode,
  FaWordpress,
  FaArrowsRotate,
  FaRocket,
  FaLifeRing,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    icon: FaPalette,
    title: "Website Design",
    desc: "Modern and visually appealing designs tailored to your brand identity and goals.",
    color: "from-[#3D0C99]/20 to-[#00ADE0]/10",
    iconColor: "text-[#3D0C99]",
    border: "border-[#3D0C99]/20",
    highlights: [
      "Brand-aligned visual direction",
      "Responsive wireframes and layouts",
      "Clear user journey planning",
      "Design handoff for development",
    ],
  },
  {
    icon: FaCode,
    title: "Front-End Development",
    desc: "Responsive, lightning-fast websites built with React and Next.js.",
    color: "from-[#00ADE0]/20 to-[#3D0C99]/10",
    iconColor: "text-[#00ADE0]",
    border: "border-[#00ADE0]/20",
    highlights: [
      "Fast loading page experiences",
      "SEO-optimized structure",
      "Accessible interactive UI",
      "Modern component-driven build",
    ],
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    desc: "Fast-loading, Core Web Vitals optimized, and SEO-friendly websites.",
    color: "from-[#3D0C99]/20 to-[#00ADE0]/10",
    iconColor: "text-[#3D0C99]",
    border: "border-[#3D0C99]/20",
    highlights: [
      "Image and asset compression",
      "Core Web Vitals improvements",
      "Faster mobile performance",
      "Analytics and tracking setup",
    ],
  },
  {
    icon: FaWordpress,
    title: "WordPress Development",
    desc: "Custom WordPress and Elementor solutions for easy self-management.",
    color: "from-[#00ADE0]/20 to-[#3D0C99]/10",
    iconColor: "text-[#00ADE0]",
    border: "border-[#00ADE0]/20",
    highlights: [
      "Custom themes and templates",
      "Elementor-friendly layouts",
      "Easy content editing workflows",
      "Secure maintenance foundation",
    ],
  },
  {
    icon: FaArrowsRotate,
    title: "Website Redesign",
    desc: "Transform outdated websites into modern, high-performing experiences.",
    color: "from-[#3D0C99]/20 to-[#00ADE0]/10",
    iconColor: "text-[#3D0C99]",
    border: "border-[#3D0C99]/20",
    highlights: [
      "Fresh visual refresh",
      "Content hierarchy improvements",
      "Conversion-focused updates",
      "Improved navigation flow",
    ],
  },
  {
    icon: FaLifeRing,
    title: "Maintenance & Support",
    desc: "Reliable website updates, monitoring, and ongoing technical support.",
    color: "from-[#00ADE0]/20 to-[#3D0C99]/10",
    iconColor: "text-[#00ADE0]",
    border: "border-[#00ADE0]/20",
    highlights: [
      "Ongoing updates and fixes",
      "Monitoring and backups",
      "Fast issue resolution",
      "Scalable support plans",
    ],
  },
];

interface ServicesProps {
  isHomepage?: boolean;
}

export default function Services({ isHomepage = false }: ServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const displayedServices = isHomepage ? servicesData.slice(0, 3) : servicesData;

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
  }, [displayedServices]);

  return (
    <section id="services" ref={sectionRef} className="py-12 md:py-24 bg-[#010205] relative overflow-hidden">
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

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {displayedServices.map((s) => (
            <Card key={s.title} glow hover className="h-full">
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

              {!isHomepage && (
                <ul className="mt-5 space-y-2">
                  {s.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                      <FaCheck className="mt-1 text-[#00ADE0] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>

        {!isHomepage && <Packages />}

        {isHomepage && (
          <div className="mt-12 flex justify-center">
            <Link href="/services" className="no-underline">
              <Button
                variant="outline"
                size="lg"
                icon={FaArrowRight}
                iconPosition="right"
              >
                View All Services
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
