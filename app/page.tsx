import Navbar from "@/Components/layout/Navbar";
import Footer from "@/Components/layout/Footer";
import Hero from "@/Components/sections/Hero";
import Services from "@/Components/sections/Services";
import FeaturedProjects from "@/Components/sections/FeaturedProjects";
import Process from "@/Components/sections/Process";
import WhyChooseUs from "@/Components/sections/WhyChooseUs";
// import TechStack from "@/Components/sections/TechStack";
import About from "@/Components/sections/About";
import Testimonials from "@/Components/sections/Testimonials";
import FAQ from "@/Components/sections/FAQ";
import Contact from "@/Components/sections/Contact";
import CustomCursor from "@/Components/ui/CustomCursor";
import CurvedLoop from "@/Components/ui/CurvedLoop";
import CircularText from "@/Components/ui/CircularText";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ background: "linear-gradient(to bottom, #04070f 0%, #060b18 40%, #04070f 100%)" }}
    >
      <CustomCursor />
      <CircularText
        text="Contact-Now*Contact-Now*"
        onHover="speedUp"
        spinDuration={20}
      >
      </CircularText>
      <Navbar />
      <main>
        <Hero />
        {/* Curved marquee */}
        <div className="bg-[#010205]">
          <div className="divider-gradient mb-0" />
          <CurvedLoop
            marqueeText="Helping Businesses Grow Online ● Modern Websites That Convert ● Pixel-Perfect Design ● Fast & Responsive Experiences ● Custom Solutions for Brands ● SEO-Optimized Websites ● Seamless User Experiences"
            speed={1}
            curveAmount={0}
            direction="left"
            className=""
          />
          <div className="divider-gradient mt-0" />
        </div>
        <Services />
        <div className="divider-gradient mt-0" />
        <FeaturedProjects />
        <div className="divider-gradient mt-0" />
        <Process />
        <div className="divider-gradient mt-0" />
        <WhyChooseUs />
        <div className="divider-gradient mt-0" />
        <About />
        <div className="divider-gradient mt-0" />
        <Testimonials />
        <div className="divider-gradient mt-0" />
        <FAQ />
        <div className="divider-gradient mt-0" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
