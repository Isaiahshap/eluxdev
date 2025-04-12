"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

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
    <section className="min-h-screen relative flex items-center pt-20 pb-32 bg-black overflow-hidden">
      {/* Background abstract elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#D4AF37] rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-white rounded-full filter blur-[120px]" />
      </div>

      <div className="container-wrapper relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-outfit font-extralight leading-tight">
                Crafting <span className="font-normal text-[#D4AF37]">Elite</span> Digital Experiences
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="mt-6 text-xl font-inter font-light leading-relaxed text-white/80">
                ELUX.DEV creates meticulously designed digital platforms for luxury brands, high-net-worth individuals, and exclusive services.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <Button href="/contact" variant="primary">
                Start a Project
              </Button>
              <Button href="/work" variant="secondary">
                View Portfolio
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="relative aspect-square w-full max-w-xl mx-auto lg:ml-auto rounded-sm overflow-hidden"
          >
            <Image
              src="/images/hero-image.jpg"
              alt="ELUX.DEV Luxury Web Design"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30 mix-blend-overlay" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 