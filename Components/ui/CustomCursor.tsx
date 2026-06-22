"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Dot follows instantly
      gsap.to(dot, {
        x: mouseX - 5,
        y: mouseY - 5,
        duration: 0.12,
        ease: "power2.out",
      });

      // Ring follows with lag
      gsap.to(ring, {
        x: mouseX - 18,
        y: mouseY - 18,
        duration: 0.35,
        ease: "power2.out",
      });

      const target = e.target as HTMLElement;
      const style = window.getComputedStyle(target);
      const pointer = style.cursor === "pointer";
      setIsPointer(pointer);

      gsap.to(dot, {
        scale: pointer ? 1.6 : 1,
        background: pointer
          ? "linear-gradient(135deg, #a78bfa, #06b6d4)"
          : "#a78bfa",
        duration: 0.2,
        ease: "power2.out",
      });

      gsap.to(ring, {
        scale: pointer ? 1.5 : 1,
        borderColor: pointer
          ? "rgba(6, 182, 212, 0.7)"
          : "rgba(167, 139, 250, 0.45)",
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };
    const handleMouseEnter = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none">
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: "#a78bfa",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "screen",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid rgba(167, 139, 250, 0.45)",
          pointerEvents: "none",
          zIndex: 9998,
        }}
      />
    </div>
  );
};

export default CustomCursor;
