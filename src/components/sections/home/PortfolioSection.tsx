"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

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
          <div key={index} className="group relative flex flex-col h-[500px] max-h-[80vh] overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%]">
                <Image
                  src={project.image}
                  alt={`${project.title} background`}
                  fill
                  quality={40}
                  sizes="100vw"
                  className="object-cover blur-lg scale-110 opacity-80"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center justify-between h-full p-6">
              <div className="text-center pt-4">
                <span className="text-[#D4AF37] font-outfit text-xs tracking-widest uppercase block mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-outfit font-light mb-4">{project.title}</h3>
              </div>
              
              <div className="w-full flex-grow flex items-center justify-center overflow-hidden">
                <motion.div
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                  }}
                  className="w-full relative"
                  style={{ aspectRatio: "16/9" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-sm"
                    quality={90}
                  />
                </motion.div>
              </div>
              
              <Link href={project.href} className="mt-6">
                <motion.div
                  whileHover={{ 
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                  className="font-outfit text-sm uppercase tracking-wider text-white px-6 py-3 border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300"
                >
                  View Project
                </motion.div>
              </Link>
            </div>
          </div>
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