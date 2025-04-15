"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import PortfolioCard from "@/components/ui/PortfolioCard";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Zahra-al-Dahab",
      category: "ECOMMERCE JEWELRY",
      image: "/images/zahra.webp",
      href: "/work/zahra-al-dahab",
    },
    {
      title: "Luscerro",
      category: "LUXURY YACHT BROKERAGE",
      image: "/images/luscerro.webp",
      href: "/work/luscerro",
    },
    {
      title: "The Winslow",
      category: "NEW YORK CITY LUXURY HOTEL",
      image: "/images/winslow.webp",
      href: "/work/winslow",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Section variant="dark" id="portfolio">
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-outfit font-extralight leading-tight mb-8">
          Featured <span className="text-[#D4AF37] font-light">Work</span>
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-8"></div>
        <p className="font-inter font-light text-white/80 max-w-2xl mx-auto text-lg">
          A curated selection of our finest digital experiences created for elite brands and discerning clients worldwide.
        </p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project.title}
            category={project.category}
            image={project.image}
            href={project.href}
          />
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="mt-20 text-center">
        <Button href="/work" variant="secondary" className="px-8 py-3">
          View Full Portfolio
        </Button>
      </motion.div>
    </Section>
  );
};

export default PortfolioSection; 