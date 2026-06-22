import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Nuvora. — Modern Web Design & Development Agency",
  description:
    "We design and develop fast, responsive, and conversion-focused websites for businesses, startups, and brands. Get a stunning online presence that drives results.",
  keywords: ["web design", "web development", "Next.js", "React", "portfolio", "agency"],
  openGraph: {
    title: "Nuvora. — Modern Web Design & Development Agency",
    description: "We build websites that help businesses grow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased dark",
        inter.variable,
        outfit.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-[#04070f]">{children}</body>
    </html>
  );
}
