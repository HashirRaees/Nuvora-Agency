"use client";

import { useRef } from "react";
import gsap from "gsap";
import React from "react";

type CardVariant = "glass" | "bordered" | "elevated";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  subtle?: boolean;
  variant?: CardVariant;
  hover?: boolean;
  glow?: boolean;
};

const variantBase: Record<CardVariant, string> = {
  glass:
    "bg-white/[0.04] backdrop-blur-xl border border-white/[0.07]",
  bordered:
    "bg-white/[0.03] border border-violet-500/20",
  elevated:
    "bg-[#0c0f1e] border border-white/[0.06] shadow-xl shadow-black/40",
};

export default function Card({
  subtle = false,
  variant = "glass",
  hover = true,
  glow = false,
  children,
  className = "",
  ...props
}: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (!hover) return;
    gsap.to(cardRef.current, {
      y: -6,
      borderColor: glow ? "rgba(124, 58, 237, 0.4)" : "rgba(255,255,255,0.14)",
      boxShadow: glow
        ? "0 16px 48px rgba(124, 58, 237, 0.2), 0 0 0 1px rgba(124, 58, 237, 0.1)"
        : "0 16px 48px rgba(0,0,0,0.35)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!hover) return;
    gsap.to(cardRef.current, {
      y: 0,
      borderColor: "rgba(255,255,255,0.07)",
      boxShadow: "none",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={[
        "rounded-lg p-6 transition-colors duration-300",
        variantBase[variant],
        subtle ? "opacity-90" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
