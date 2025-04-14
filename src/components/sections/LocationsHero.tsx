"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const LocationsHero = () => {
  const textVariants = {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const goldAccentVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  // Text animation with staggered letters
  const title = "Global Luxury Presence";
  const letters = Array.from(title);

  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/locations/locations-hero.jpg"
          alt="Luxury Global Locations"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/95" />
        
        {/* Subtle animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container-wrapper relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Staggered letter animation */}
          <motion.div className="overflow-hidden mb-4 inline-flex justify-center">
            <div className="text-[#D4AF37] font-outfit text-sm uppercase tracking-[0.3em]">
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.05 }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.h2
            variants={textVariants}
            className="text-white font-outfit text-6xl md:text-7xl lg:text-8xl font-extralight leading-tight mb-8"
          >
            Exceptional Design <br />
            <span className="text-[#D4AF37]">Around the World</span>
          </motion.h2>

          {/* Animated gold accent line */}
          <div className="relative h-px w-full max-w-[200px] mx-auto my-10 overflow-hidden">
            <motion.div 
              className="absolute inset-y-0 left-0 bg-[#D4AF37]"
              variants={goldAccentVariants}
            />
          </div>

          <motion.p
            variants={textVariants}
            className="text-white/80 max-w-xl mx-auto text-lg mb-12 font-light"
          >
            Discover our luxury digital studios in the world&apos;s most prestigious locations, where elite design meets local sophistication.
          </motion.p>

          <motion.div
            variants={textVariants}
            className="flex justify-center items-center space-x-3"
          >
            <motion.div 
              className="h-10 w-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center"
              animate={{ 
                y: [0, 5, 0], 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 text-[#D4AF37]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 