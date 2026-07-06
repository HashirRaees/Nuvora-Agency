import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/Components/layout/Navbar";
import Footer from "@/Components/layout/Footer";
import CustomCursor from "@/Components/ui/CustomCursor";
import Chatbot from "../Components/ui/ChatBot";

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
  title: "Nuvora — Web Design & Development Agency.",
  description:
    "Nuvora is a web design agency building fast, SEO-ready websites for restaurants, local businesses, and startups. Get a free quote today.",
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
      <body className="min-h-full flex flex-col bg-[#04070f]">
        <CustomCursor />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
