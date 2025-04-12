"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Image from "next/image";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "150+", label: "Elite Projects" },
    { value: "5", label: "Global Locations" },
    { value: "97%", label: "Client Retention" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2 + (i * 0.1),
      },
    }),
  };

  // Use a static showcase image with overlay for simplicity
  const showcaseImage = "/images/winslow.webp";

  return (
    <Section variant="pattern" id="about" className="py-24">
      <motion.div 
        ref={sectionRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        <motion.div variants={itemVariants} className="relative">
          <div className="relative mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-extralight leading-tight mb-8">
              The Studio Behind <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 font-light">Exceptional</span> Digital <br/>
              <span className="relative">
                Experiences
                <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-white/20 to-transparent"></span>
              </span>
            </h2>
          </div>
          
          <p className="font-inter font-light text-white/90 leading-relaxed text-lg mb-8 max-w-2xl">
            Founded by brothers Yeshaya and Yitz Shapiro, <span className="opacity-90">ELUX.DEV</span> is a boutique atelier that blends elegant aesthetics with technical excellence to create bespoke digital platforms for the world&apos;s most discerning clients.
          </p>
          
          <p className="font-inter font-light text-white/80 leading-relaxed mb-12 max-w-2xl">
            We approach each project as a collaboration with our clients, creating <span className="italic">luxurious websites</span> that not only look exceptional but perform flawlessly. Our work spans private aviation, yachting, fine art, boutique hospitality, and private equity — industries where perception is everything.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <Button href="/about" variant="secondary" className="backdrop-blur-sm">
              Our Philosophy
            </Button>
            <Button href="/services" variant="primary">
              Discover Services
            </Button>
          </div>
        </motion.div>
        
        <div className="space-y-10">
          <motion.div 
            variants={itemVariants}
            className="relative z-10"
          >
            <div className="relative overflow-hidden rounded-sm group">
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black/80 z-10 group-hover:opacity-90 transition-opacity duration-700"></div>
              
              <motion.div 
                className="absolute inset-0 bg-black/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ opacity: 1 }}
              />
              
              <motion.div 
                className="relative aspect-[16/9] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={showcaseImage}
                  alt="Luxury website design by ELUX.DEV" 
                  fill
                  priority
                  className="object-cover transition-transform duration-4000 ease-in-out scale-105 group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
              
              <div className="absolute inset-x-0 bottom-0 z-20 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-10 h-[1px] bg-white/30 mb-4"></div>
                <p className="text-xl font-outfit text-white/90 tracking-wide">Featured Project</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                custom={index}
                variants={statVariants}
                className="bg-black/20 backdrop-blur-sm p-8 rounded-sm group relative overflow-hidden"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></div>
                
                <p className="relative text-5xl lg:text-6xl font-outfit font-extralight text-white mb-2 tracking-tight">{stat.value}</p>
                <p className="relative font-inter uppercase tracking-widest text-xs text-white/60 group-hover:text-white/90 transition-colors duration-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default AboutSection; 