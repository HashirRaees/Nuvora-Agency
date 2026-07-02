import Navbar from "@/Components/layout/Navbar";
import Footer from "@/Components/layout/Footer";
import FeaturedProjects from "@/Components/Home/FeaturedProjects";
import CTA from "@/Components/Home/CTA";
import CustomCursor from "@/Components/ui/CustomCursor";

export default function PortfolioPage() {
  return (
    <div
      className="min-h-screen text-white pt-24"
      style={{
        background: "linear-gradient(to bottom, #04070f 0%, #060b18 40%, #04070f 100%)",
      }}
    >
      <CustomCursor />
      <Navbar />
      <main>
        <section className="relative py-12 md:py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-[#00ADE0]/25 via-[#060b18]/80 to-[#3D0C99]/20" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('/assets/batthern.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="orb orb-cyan absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-80 h-80 opacity-20 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="mt-4 text-white/55 text-sm md:text-lg max-w-xl mx-auto leading-relaxed">
              Explore some of our recent work across web design, front-end development, and custom applications.
            </p>
          </div>
        </section>

        <FeaturedProjects isHomepage={false} />

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
