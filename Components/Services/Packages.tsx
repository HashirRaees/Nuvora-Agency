"use client";

import Card from "@/Components/ui/Card";
import Button from "@/Components/ui/Button";
import { FaCheck } from "react-icons/fa6";

const pricingPackages = [
    {
        name: "Starter",
        price: "$799",
        description: "Perfect for a polished launchpad with the essentials to get online quickly.",
        highlights: ["Landing page or starter website", "Mobile-friendly design", "Basic SEO setup", "One revision round"],
        featured: false,
    },
    {
        name: "Growth",
        price: "$1,499",
        description: "Best for brands that want stronger storytelling, better conversion flow, and more depth.",
        highlights: ["Multi-section marketing site", "Custom UI enhancements", "Performance tuning", "Content integration support"],
        featured: true,
    },
    {
        name: "Premium",
        price: "$2,499+",
        description: "A full-scale solution for ambitious launches, custom features, and long-term growth.",
        highlights: ["Fully custom experience", "Advanced functionality", "SEO and analytics setup", "Priority support and updates"],
        featured: false,
    },
];

export default function Packages() {
    return (
        <div className="pb-12 md:pb-24 bg-[#010205] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl mb-10">
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
