"use client";

import Card from "@/Components/ui/Card";
import Button from "@/Components/ui/Button";
import { FaCheck } from "react-icons/fa6";

const pricingPackages = [
    {
        name: "Launch",
        price: "$299",
        description: "For a single, polished page to get you online fast.",
        highlights: ["1-page website (landing page or one-pager)", "Mobile-responsive custom design", "Basic on-page SEO setup", "Contact form + WhatsApp/social links", "1 round of revisions", "Delivered in 5–7 days"],
        featured: false,
    },
    {
        name: "Momentum",
        price: "$699",
        description: "For businesses that need a full multi-page site with real content and structure.",
        highlights: ["Up to 5 pages (Home, About, Services, Portfolio/Gallery, Contact)", "Custom design matched to your brand", "On-page SEO across all pages", "Google Maps + business info integration", "Basic performance optimization", "2 rounds of revisions", "Delivered in 2–3 weeks"],
        featured: true,
    },
    {
        name: "Elevate",
        price: "$1,499+",
        description: "For businesses that need custom functionality, not just a brochure site.",
        highlights: ["Fully custom design and unlimited standard pages", "Custom features (booking systems, filters, calculators, dashboards, etc.)", "Advanced SEO: schema markup, sitemap, Search Console setup", "Performance optimization for Core Web Vitals", "Analytics + conversion tracking setup", "Priority support for 30 days post-launch", "Timeline scoped to project (typically 4–8 weeks)"],
        featured: false,
    },
];

export default function Packages() {
    return (
        <div className="pb-12 md:pb-24 bg-[#010205] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl md:text-left text-center mb-10">
                    <p className="section-label mb-3 text-xs">Flexible Packages</p>
                    <h3 className="section-heading text-2xl md:text-4xl">
                        Choose a package for your <span className="gradient-text">next launch</span>
                    </h3>
                    <p className="mt-4 text-white/55 text-sm md:text-lg leading-relaxed">
                        Every package includes a discovery call, thoughtful strategy, and a launch-ready web experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {pricingPackages.map((pkg) => (
                        <Card key={pkg.name} glow hover className="h-full flex flex-col">
                            <div className="flex items-start justify-between gap-3 mb-4">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.25em] text-white/40">{pkg.name}</p>
                                    <p className="text-3xl font-bold text-white mt-2">{pkg.price}</p>
                                </div>
                                {pkg.featured && (
                                    <span className="rounded-full border border-[#00ADE0]/40 bg-[#00ADE0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00ADE0]">
                                        Popular
                                    </span>
                                )}
                            </div>

                            <p className="text-sm text-white/55 leading-relaxed">{pkg.description}</p>

                            <ul className="mt-6 space-y-2 flex-1">
                                {pkg.highlights.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                                        <FaCheck className="mt-1 text-[#00ADE0] shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                href="/contact"
                                variant={pkg.featured ? "primary" : "outline"}
                                size="md"
                                className="mt-8 w-full"
                            >
                                Book This Package
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
