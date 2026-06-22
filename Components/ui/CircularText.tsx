"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "speedUp" | "slowDown" | "pause" | "goBonkers" | null;
  className?: string;
}

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}: CircularTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const letters = Array.from(text);

  useEffect(() => {
    if (!containerRef.current) return;

    tweenRef.current = gsap.to(containerRef.current, {
      rotation: 360,
      repeat: -1,
      ease: "none",
      duration: spinDuration,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [spinDuration, text]);

  const handleHoverStart = () => {
    if (!tweenRef.current || !onHover) return;
    switch (onHover) {
      case "speedUp":
        gsap.to(tweenRef.current, { timeScale: 4, duration: 0.4, ease: "power2.out" });
        break;
      case "slowDown":
        gsap.to(tweenRef.current, { timeScale: 0.5, duration: 0.4, ease: "power2.out" });
        break;
      case "pause":
        gsap.to(tweenRef.current, { timeScale: 0, duration: 0.4, ease: "power2.out" });
        break;
      case "goBonkers":
        gsap.to(tweenRef.current, { timeScale: 8, duration: 0.2, ease: "power2.out" });
        break;
    }
  };

  const handleHoverEnd = () => {
    if (!tweenRef.current) return;
    gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5, ease: "power2.inOut" });
  };

  return (
    <div
      ref={containerRef}
      className={`circular-text ${className}`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;
        return (
          <span key={i} style={{ transform, WebkitTransform: transform }}>
            {letter}
          </span>
        );
      })}
    </div>
  );
};

export default CircularText;
