"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Button from "@/components/ui/Button";
import InteractiveCard from "@/components/ui/InteractiveCard";

const HeroSection = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const spotlightAnimation = useAnimation();
  
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

  // Animate the spotlight element
  useEffect(() => {
    const animateSpotlight = async () => {
      while (true) {
        // Complex movement pattern covering the entire hero
        await spotlightAnimation.start({
          left: '85%', 
          top: '15%',
          width: '45vh',
          height: '45vh',
          transition: { 
            duration: 4.5, 
            ease: [0.45, 0.05, 0.55, 0.95] // Custom easing for more organic movement
          }
        });
        
        await spotlightAnimation.start({
          left: '10%', 
          top: '75%',
          width: '40vh',
          height: '40vh',
          transition: { 
            duration: 5, 
            ease: [0.45, 0.05, 0.55, 0.95]
          }
        });
        
        await spotlightAnimation.start({
          left: '65%', 
          top: '85%',
          width: '42vh',
          height: '42vh',
          transition: { 
            duration: 4.2, 
            ease: [0.45, 0.05, 0.55, 0.95]
          }
        });

        await spotlightAnimation.start({
          left: '25%', 
          top: '5%',
          width: '43vh',
          height: '43vh',
          transition: { 
            duration: 4.8, 
            ease: [0.45, 0.05, 0.55, 0.95]
          }
        });

        await spotlightAnimation.start({
          left: '90%', 
          top: '60%',
          width: '41vh',
          height: '41vh',
          transition: { 
            duration: 4.6, 
            ease: [0.45, 0.05, 0.55, 0.95]
          }
        });

        await spotlightAnimation.start({
          left: '5%', 
          top: '40%',
          width: '44vh',
          height: '44vh',
          transition: { 
            duration: 5.2, 
            ease: [0.45, 0.05, 0.55, 0.95]
          }
        });
      }
    };
    
    animateSpotlight();
  }, [spotlightAnimation]);

  // These are placeholder images - replace with actual uploaded images
  const heroImages = [
    "/images/winslow.webp",
    "/images/zahra.webp",
    "/images/aerii.webp",
    "/images/luscerro.webp",
  ];

  return (
    <section className="min-h-screen relative flex items-center pt-20 pb-32 bg-black overflow-hidden -mt-24">
      {/* Background abstract elements - animated spotlight */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div 
          ref={spotlightRef}
          animate={spotlightAnimation}
          initial={{ 
            top: '15%', 
            left: '85%', 
            width: '45vh', 
            height: '45vh' 
          }}
          className="absolute bg-white rounded-full filter blur-[80px]" 
        />
      </div>

      <div className="container-wrapper relative z-10 pt-32 md:pt-36">
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
            className="relative w-full max-w-xl mx-auto lg:ml-auto"
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