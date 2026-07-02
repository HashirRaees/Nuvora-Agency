import Navbar from "@/Components/layout/Navbar";
import Footer from "@/Components/layout/Footer";
import Hero from "@/Components/Home/Hero";
import Stats from "@/Components/Home/Stats";
import HomeServices from "@/Components/Services/HomeServices";
import FeaturedProjects from "@/Components/Home/FeaturedProjects";
import Process from "@/Components/Home/Process";
import WhyChooseUs from "@/Components/Home/WhyChooseUs";
import Testimonials from "@/Components/Home/Testimonials";
import CTA from "@/Components/Home/CTA";
import CustomCursor from "@/Components/ui/CustomCursor";
import CurvedLoop from "@/Components/ui/CurvedLoop";
import FAQ from "@/Components/Home/Faq";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(to bottom, #04070f 0%, #060b18 40%, #04070f 100%)",
      }}
    >
      <CustomCursor />
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Curved marquee */}
        <div className="bg-[#010205]">
          <CurvedLoop
            marqueeText="Helping Businesses Grow Online ● Modern Websites That Convert ● Pixel-Perfect Design ● Fast & Responsive Experiences ● Custom Solutions for Brands ● SEO-Optimized Websites ● Seamless User Experiences"
            speed={1}
            curveAmount={0}
            direction="left"
            className=""
          />
          <div className="divider-gradient mt-0" />
        </div>

        {/* Stats Section with counter animation */}
        <Stats />
        <div className="divider-gradient mt-0" />

        {/* Services Section (Shows 3 services on Homepage) */}
        <HomeServices />
        <div className="divider-gradient mt-0" />

        {/* Why Choose Us Section */}
        <WhyChooseUs />
        <div className="divider-gradient mt-0" />

        {/* Process Section */}
        <Process />
        <div className="divider-gradient mt-0" />

        {/* Featured Projects Section (Shows 3 projects, no tabs on Homepage) */}
        <FeaturedProjects isHomepage={true} />
        <div className="divider-gradient mt-0" />

        {/* Testimonials Carousel Section */}
        <Testimonials />
        <div className="divider-gradient mt-0" />

        <FAQ/>
        {/* Call To Action (CTA) Section */}
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
