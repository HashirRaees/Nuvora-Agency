"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "@/Components/ui/Card";
import { FaFolderOpen,FaCircleCheck, FaBriefcase } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Done",
    icon: FaFolderOpen,
    color: "text-[#3D0C99]",
    bg: "from-[#3D0C99]/20 to-[#00ADE0]/10",
    border: "border-[#3D0C99]/20",
  },
  {
    value: 80,
    suffix: "%",
    label: "Client Satisfaction",
    icon: FaCircleCheck,
    color: "text-[#00ADE0]",
    bg: "from-[#00ADE0]/20 to-[#3D0C99]/10",
    border: "border-[#00ADE0]/20",
  },
  {
    value: 2,
    suffix: "+",
    label: "Years Experience",
    icon: FaBriefcase,
    color: "text-[#3D0C99]",
    bg: "from-[#3D0C99]/20 to-[#00ADE0]/10",
    border: "border-[#3D0C99]/20",
  },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>(".stat-counter-val");
      counters.forEach((counter) => {
        const val = parseInt(counter.getAttribute("data-val") || "0", 10);
        const obj = { count: 0 };
        gsap.to(obj, {
          count: val,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            counter.textContent = Math.floor(obj.count).toString();
          },
        });
      });

      // Stagger cards in
      gsap.fromTo(
        ".stat-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
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
    <section ref={containerRef} className="py-12 bg-[#010205] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, i) => (
            <Card key={i} className="stat-card flex flex-col items-center text-center p-8" glow hover>
              <div className={`w-14 h-14 rounded-md bg-linear-to-br ${stat.bg} border ${stat.border} flex items-center justify-center mb-4`}>
                <stat.icon className={`text-2xl ${stat.color}`} />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 flex items-center justify-center" style={{ fontFamily: "var(--font-outfit)" }}>
                <span className="stat-counter-val" data-val={stat.value}>0</span>
                <span>{stat.suffix}</span>
              </div>
              <p className="text-sm text-white/55 font-medium tracking-wide uppercase">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
