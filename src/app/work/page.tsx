"use client";

import React, { useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Section from "@/components/layout/Section";
import PortfolioCard from "@/components/ui/PortfolioCard";
import Button from "@/components/ui/Button";

export default function WorkPage() {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter categories
  const categories = [
    { id: "all", label: "All" },
    { id: "luxury-retail", label: "Luxury Retail" },
    { id: "hospitality", label: "Hospitality" },
    { id: "high-end-services", label: "High-End Services" },
  ];

  // Projects data including existing and new placeholder projects
  const projects = [
    // Existing projects from the home page
    {
      title: "Zahra-al-Dahab",
      category: "ECOMMERCE JEWELRY",
      image: "/images/zahra.webp",
      href: "/work/zahra-al-dahab",
      filterCategory: "luxury-retail",
    },
    {
      title: "Luscerro",
      category: "LUXURY YACHT BROKERAGE",
      image: "/images/luscerro.webp",
      href: "/work/luscerro",
      filterCategory: "high-end-services",
    },
    {
      title: "The Winslow",
      category: "NEW YORK CITY LUXURY HOTEL",
      image: "/images/winslow.webp",
      href: "/work/winslow",
      filterCategory: "hospitality",
    },
    // Additional placeholder projects
    {
      title: "Atelier Lumière",
      category: "HIGH-END FASHION BRAND",
      image: "/images/placeholder-fashion.webp",
      href: "/work/atelier-lumiere",
      filterCategory: "luxury-retail",
    },
    {
      title: "Celestial Reserve",
      category: "LUXURY SPIRITS COLLECTION",
      image: "/images/placeholder-spirits.webp",
      href: "/work/celestial-reserve",
      filterCategory: "luxury-retail",
    },
    {
      title: "Azure Skies",
      category: "PRIVATE AVIATION SERVICES",
      image: "/images/placeholder-aviation.webp",
      href: "/work/azure-skies",
      filterCategory: "high-end-services",
    },
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.filterCategory === activeFilter);

  // Handle filter change
  const handleFilterChange = (categoryId: string) => {
    setActiveFilter(categoryId);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden -mt-24">
        {/* Hero Section */}
        <Section variant="pattern" className="py-28 md:py-36 pt-32 md:pt-40 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-extralight leading-tight mb-8">
              Our <span className="text-[#D4AF37] font-light">Portfolio</span>
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-8"></div>
            <p className="font-inter font-light text-white/80 max-w-3xl mx-auto text-lg mb-8">
              Explore our meticulously crafted digital experiences for elite clients. Each project reflects our commitment to exceptional design, flawless functionality, and luxury aesthetics.
            </p>
          </m.div>
        </Section>

        {/* Portfolio Grid Section */}
        <Section variant="dark" className="py-20 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Filtering categories */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map((category) => (
                <button 
                  key={category.id}
                  onClick={() => handleFilterChange(category.id)}
                  className={`px-5 py-2 rounded-sm text-sm uppercase tracking-wider font-outfit transition-all duration-300 ${
                    activeFilter === category.id 
                      ? "text-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37]" 
                      : "text-white/70 border border-white/10 hover:border-white/30"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </m.div>

            {/* Projects Grid with filter animation */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {filteredProjects.map((project, index) => (
                <m.div
                  key={`${project.title}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.2 + (index * 0.1),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  layout
                  className="w-full"
                >
                  <PortfolioCard
                    title={project.title}
                    category={project.category}
                    image={project.image}
                    href={project.href}
                  />
                </m.div>
              ))}
            </m.div>

            {/* No results message */}
            {filteredProjects.length === 0 && (
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-white/70 font-light text-lg">
                  No projects found in this category. Please try another filter.
                </p>
              </m.div>
            )}
          </div>
        </Section>

        {/* CTA Section */}
        <Section variant="dark" className="py-20 relative z-10 border-t border-white/5">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-outfit font-extralight leading-tight mb-6">
              Ready for a Website That <span className="text-[#D4AF37] font-light">Elevates</span> Your Brand?
            </h2>
            <p className="font-inter font-light text-white/80 max-w-2xl mx-auto mb-10">
              Let us transform your digital presence with the same meticulous attention to detail and luxurious aesthetics showcased in our portfolio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button href="/contact" variant="primary">
                Discuss Your Project
              </Button>
              <Button href="/about" variant="secondary">
                Learn About Our Process
              </Button>
            </div>
          </m.div>
        </Section>
      </div>
    </LazyMotion>
  );
} 