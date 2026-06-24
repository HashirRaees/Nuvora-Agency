"use client"
import Button from "@/Components/ui/Button";
import DarkVeil from "@/Components/ui/DarkVeil";
import { motion } from "framer-motion";

export default function Hero() {
  return ( 
    <section id="home" className="relative overflow-hidden min-h-100 pt-30 pb-10 md:min-h-137.5 md:pb-0 md:pt-40">
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0, opacity: 0.7 }}>
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <div className="flex items-center text-center justify-center">
          <div>
            <motion.h1
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5}}
              className="text-2xl md:text-6xl font-extrabold text-white leading-tight"
            >
              Modern Websites That Help <br /> <span className="gradient-text">Businesses Grow</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }} className="mt-6 text-sm md:text-lg text-white/80 text-center">
              We design and develop fast, responsive, and conversion-focused websites for businesses, startups, and brands.
            </motion.p>

            <div className="mt-8 flex justify-center gap-4">
              <Button onClick={(e) => { const el = document.getElementById('portfolio'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>View Our Work</Button>
              <Button variant="ghost" onClick={(e) => { const el = document.getElementById('contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }}>Get In Touch</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
