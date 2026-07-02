"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { FaBars, FaXmark } from "react-icons/fa6";
import Button from "@/Components/ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Entrance animation
  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu animation
  useEffect(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;
    if (open) {
      gsap.fromTo(
        menu,
        { opacity: 0, y: -12, pointerEvents: "none" },
        { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.28, ease: "power2.out" }
      );
      gsap.fromTo(
        menu.querySelectorAll("a"),
        { opacity: 0, x: -14 },
        { opacity: 1, x: 0, duration: 0.22, stagger: 0.04, ease: "power2.out", delay: 0.05 }
      );
    } else {
      gsap.to(menu, { opacity: 0, y: -8, duration: 0.2, ease: "power2.in", pointerEvents: "none" });
    }
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "backdrop-blur-xl bg-[#04070f]/80 border-b border-white/7 shadow-lg shadow-black/20"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-semibold tracking-tight text-white hover:opacity-90 transition-opacity"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Nuvora<span className="gradient-text">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    "relative px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200",
                    isActive
                      ? "text-white bg-white/7"
                      : "text-white/55 hover:text-white/90",
                  ].join(" ")}
                >
                  <span className="relative z-10">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded-lg bg-white/6 border border-white/8 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            {open ? <FaXmark size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-18 left-0 right-0 z-40 md:hidden opacity-0 pointer-events-none"
      >
        <div className="mx-4 rounded-md bg-[#0a0d1a]/95 backdrop-blur-xl border border-white/8 shadow-2xl shadow-black/40 p-4">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/6 rounded-md text-sm font-medium transition-all"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-white/6">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Button variant="primary" fullWidth>
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
