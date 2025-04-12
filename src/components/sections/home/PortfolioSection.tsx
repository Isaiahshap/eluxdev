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
      title: "Azure Horizons",
      category: "Private Aviation",
      image: "/images/portfolio-1.jpg",
      href: "/work/azure-horizons",
    },
    {
      title: "Luminary Residences",
      category: "Luxury Real Estate",
      image: "/images/portfolio-2.jpg",
      href: "/work/luminary-residences",
    },
    {
      title: "Celestial Yachting",
      category: "Maritime Luxury",
      image: "/images/portfolio-3.jpg",
      href: "/work/celestial-yachting",
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
    <Section variant="pattern" id="portfolio">
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-outfit font-extralight leading-tight mb-6">
          Featured <span className="text-[#D4AF37]">Work</span>
        </h2>
        <p className="font-inter font-light text-white/80 max-w-2xl mx-auto">
          A curated selection of our finest digital experiences created for elite brands and discerning clients worldwide.
        </p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16"
      >
        {projects.map((project, index) => (
          <div key={index} className="group">
            <Link href={project.href} className="block">
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
                  }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="font-outfit text-sm uppercase tracking-widest text-white px-6 py-3 border border-white/30 backdrop-blur-sm">
                      View Project
                    </span>
                  </div>
                </motion.div>
              </div>
              <span className="text-[#D4AF37] font-outfit text-sm tracking-widest uppercase block">
                {project.category}
              </span>
              <h3 className="text-xl font-outfit mt-1">{project.title}</h3>
            </Link>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="mt-16 text-center">
        <Button href="/work" variant="secondary">
          Full Portfolio
        </Button>
      </motion.div>
    </Section>
  );
};

export default PortfolioSection; 