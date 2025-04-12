import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About ELUX.DEV | Luxury Website Designs & Digital Experiences",
  description: "ELUX.DEV creates bespoke luxury websites design with elegant aesthetics and technical excellence. Discover the studio behind exceptional digital platforms for discerning clients.",
  keywords: "luxury website designs, luxurious websites, luxury websites design, high-end web development, boutique web design studio, bespoke digital experiences",
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-white rounded-full filter blur-[120px]" />
        </div>
        
        <div className="container-wrapper relative z-10">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block w-20 h-[1px] bg-gradient-to-r from-[#D4AF37] to-[#F5F5DC] mb-4"></span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-extralight leading-tight mb-8">
              Crafting <span className="text-[#D4AF37] font-light">Luxurious</span> <br />
              Digital Experiences
            </h1>
            <p className="text-xl font-inter font-light leading-relaxed text-white/80 max-w-2xl">
              ELUX.DEV is a boutique atelier specializing in <span className="text-[#D4AF37]">luxury website designs</span> for discerning clients who demand excellence in every pixel.
            </p>
          </div>
        </div>
      </section>

      {/* Content will be added in future updates */}
      <div className="container-wrapper my-20">
        <p className="text-center text-white/60 font-light">About page content coming soon.</p>
      </div>
    </main>
  );
} 