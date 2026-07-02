"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/Components/ui/Button";
import {
  RiSendPlaneFill,
  RiMailLine,
  RiWhatsappLine,
  RiMapPinLine,
  RiFacebookFill,
  RiInstagramLine,
  // RiLinkedinFill,
  RiCheckboxCircleFill,
} from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: RiMailLine, label: "Email", value: "nvoraagency@gmail.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=nvoraagency@gmail.com" },
  { icon: RiWhatsappLine, label: "Whatsapp", value: "+92 314-7125890", href: "https://wa.me/923147125890" },
  { icon: RiMapPinLine, label: "Location", value: "Karachi, Pakistan", href: "#" },
];

const socials = [
  { icon: RiFacebookFill, href: "https://www.facebook.com/profile.php?id=61591203403007", label: "Facebook" },
  { icon: RiInstagramLine, href: "https://www.instagram.com/nuvora__agency/", label: "Instagram" },
  // { icon: RiLinkedinFill, href: "#", label: "LinkedIn" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

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
        leftRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send");
      }

      setSent(true);

      if (successRef.current) {
        gsap.fromTo(
          successRef.current,
          { opacity: 0, scale: 0.9, y: 16 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.45,
            ease: "back.out(1.6)",
          }
        );
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-12 md:py-24 bg-[#010205] relative overflow-hidden">
      <div className="orb orb-violet absolute left-1/2 -translate-x-1/2 bottom-0 w-125 h-48 opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-label mb-3 text-xs">Get In Touch</p>
          <h2 className="section-heading text-2xl md:text-5xl">
            Let's Build Something{" "} <br />
            <span className="gradient-text">Great Together</span>
          </h2>
          <p className="mt-4 text-white/55 text-sm md:text-lg leading-relaxed">
            Ready to start your project? Drop us a message and we'll respond within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — info */}
          <div ref={leftRef} className="lg:col-span-2 space-y-8">
            {/* Contact details */}
            <div className="space-y-4">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-md bg-white/3 border border-white/7 hover:border-[#3D0C99]/30 hover:bg-[#3D0C99]/4 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-[#3D0C99]/15 border border-[#3D0C99]/20 flex items-center justify-center">
                    <c.icon className="text-lg text-[#00ADE0]" />
                  </div>
                  <div>
                    <div className="text-xs text-white/35 mb-0.5">{c.label}</div>
                    <div className="text-sm text-white/75 group-hover:text-white transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-white/35 md:text-left text-center uppercase tracking-widest mb-3">Follow Us</p>
              <div className="flex md:justify-start justify-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    aria-label={label}
                    className="w-12 h-12 flex items-center justify-center rounded-3xl bg-white/5 border border-white/8 text-white/50 hover:text-white hover:bg-white/10 hover:border-[#3D0C99]/30 transition-all duration-200"
                  >
                    <Icon size={25} />
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="rounded-md bg-gradient-to-br from-[#3D0C99]/15 to-[#00ADE0]/10 border border-[#3D0C99]/20 p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#00ADE0] animate-pulse" />
                <span className="text-xs font-semibold text-[#00ADE0] uppercase tracking-wider">Available Now</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                We typically respond within a few hours during business days.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div ref={rightRef} className="lg:col-span-3">
            {sent ? (
              <div
                ref={successRef}
                className="flex flex-col items-center justify-center text-center py-20 rounded-md bg-white/[0.03] border border-[#00ADE0]/25"
              >
                <RiCheckboxCircleFill className="text-6xl text-[#00ADE0] mb-4" />
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Message Sent!
                </h3>
                <p className="text-white/55 max-w-xs">
                  Thanks for reaching out. We'll get back to you as soon as we can.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.07] rounded-md p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                      Your Name
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="John Smith"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    placeholder="New website project"
                    className="form-input"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="form-input resize-none"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={loading}
                  icon={RiSendPlaneFill}
                  iconPosition="right"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
