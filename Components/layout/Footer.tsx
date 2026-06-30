import Link from "next/link";
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill, RiDribbbleFill } from "react-icons/ri";

const footerLinks = [
  {
    label: "Services",
    links: [
      { label: "Web Design", href: "#services" },
      { label: "Development", href: "#services" },
      { label: "WordPress", href: "#services" },
      { label: "Redesign", href: "#services" },
    ],
  },
  {
    label: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Process", href: "#process" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    label: "Contact",
    links: [
      { label: "Get In Touch", href: "#contact" },
      { label: "nvoraagency@gmail.com", href: "mailto:nvoraagency@gmail.com" },
    ],
  },
];

const socials = [
  { icon: RiFacebookFill, href: "https://www.facebook.com/profile.php?id=61591203403007", label: "Facebook" },
  { icon: RiInstagramLine, href: "https://www.instagram.com/nuvora__agency/", label: "Instagram" },
  // { icon: RiLinkedinFill, href: "#", label: "LinkedIn" },
  // { icon: RiDribbbleFill, href: "#", label: "Dribbble" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/6 overflow-hidden">
      {/* Gradient glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-px bg-linear-to-r from-transparent via-violet-500/50 to-transparent" />

      {/* Orbs */}
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/6">
          {/* Brand */}
          <div className="md:col-span-1">
            <div
              className="text-xl md:text-2xl font-semibold text-white mb-3"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Nuvora<span className="gradient-text">.</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              Building modern, high-performing websites that help businesses grow online.
            </p>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-3xl bg-white/5 border border-white/7 text-white/50 hover:text-white hover:bg-white/10 hover:border-violet-500/30 transition-all duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.label}>
              <h4
                className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {group.label}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      target="_blank"
                      className="text-sm text-white/55 hover:text-white transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Nuvora. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Designed & Developed By{" "}
            <span className="gradient-text font-medium">Hashir Raees.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
