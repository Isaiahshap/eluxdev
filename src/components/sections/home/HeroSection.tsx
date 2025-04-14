"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Button from "@/components/ui/Button";
import InteractiveCard from "@/components/ui/InteractiveCard";

const HeroSection = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Enable client-side animations only after component has mounted
  useEffect(() => {
    setIsClient(true);
  }, []);
  
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

  // Define spotlight animation keyframes
  const spotlightVariants: Variants = {
    animate: {
      left: ['85%', '10%', '65%', '25%', '90%', '5%', '85%'],
      top: ['15%', '75%', '85%', '5%', '60%', '40%', '15%'],
      width: ['45vh', '40vh', '42vh', '43vh', '41vh', '44vh', '45vh'],
      height: ['45vh', '40vh', '42vh', '43vh', '41vh', '44vh', '45vh'],
      opacity: [1, 1, 1, 1, 1, 1, 1],
      transition: {
        duration: 30,
        times: [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1],
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop" as const
      }
    }
  };

  // These are placeholder images - replace with actual uploaded images
  const heroImages = [
    "/images/winslow.webp",
    "/images/zahra.webp",
    "/images/aerii.webp",
    "/images/luscerro.webp",
  ];

  return (
    <section className="min-h-[100svh] relative flex items-center pt-16 sm:pt-20 pb-16 sm:pb-32 bg-black overflow-hidden -mt-24">
      {/* Background abstract elements - animated spotlight */}
      <div className="absolute inset-0 z-0 opacity-20">
        {isClient && (
          <motion.div 
            initial={{ 
              top: '15%', 
              left: '85%', 
              width: '45vh', 
              height: '45vh',
              opacity: 0
            }}
            animate="animate"
            variants={spotlightVariants}
            className="absolute bg-white rounded-full filter blur-[80px]" 
          />
        )}
      </div>

      <div className="container-wrapper relative z-10 pt-20 sm:pt-24 md:pt-32">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-outfit font-extralight leading-[1.1] sm:leading-tight">
                Crafting <span className="font-normal text-[#D4AF37]">Elite</span> Digital Experiences
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-inter font-light leading-relaxed text-white/80 max-w-[90%] sm:max-w-full">
                ELUX.DEV creates meticulously designed digital platforms for luxury brands, high-net-worth individuals, and exclusive services.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants} 
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Button href="/contact" variant="primary" className="w-full sm:w-auto text-center">
                Start a Project
              </Button>
              <Button href="/work" variant="secondary" className="w-full sm:w-auto text-center">
                View Portfolio
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-xl mx-auto lg:ml-auto mt-8 lg:mt-0"
          >
            <InteractiveCard
              images={heroImages}
              alt="ELUX.DEV Featured Projects"
              className="opacity-100"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 