"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Button from "@/Components/ui/Button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

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

  const handleScroll = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(href);
    setOpen(false);
  };

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
            href="#home"
            onClick={(e) => handleScroll(e as React.MouseEvent, "#home")}
            className="text-xl md:text-2xl font-semibold tracking-tight text-white hover:opacity-90 transition-opacity"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Nuvora<span className="gradient-text">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleScroll(e, l.href)}
                className={[
                  "relative px-4 py-2 text-base font-medium rounded-lg transition-colors duration-200",
                  active === l.href
                    ? "text-white"
                    : "text-white/55 hover:text-white/90",
                ].join(" ")}
              >
                {active === l.href && (
                  <span
                    ref={pillRef}
                    className="absolute inset-0 rounded-lg bg-white/7"
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={(e) => handleScroll(e as React.MouseEvent, "#contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden p-2 rounded-md bg-white/6 border border-white/8 text-white/80 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          >
            {open ? <RiCloseLine size={22} /> : <RiMenu3Line size={22} />}
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
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleScroll(e, l.href)}
                    className="px-4 py-3 text-white/80 hover:text-white hover:bg-white/6 rounded-md text-sm font-medium transition-all"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-white/6">
              <Button
                variant="primary"
                fullWidth
                onClick={(e) => handleScroll(e as React.MouseEvent, "#contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
