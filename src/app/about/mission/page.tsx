"use client";

import React, { useState, useEffect } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import AnimatedText from "./components/AnimatedText";

function MissionPage() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Clean up function to help with performance
    return () => {
      setIsClient(false);
    };
  }, []);

  // Mission statements with elegant typography
  const missionStatements = [
    { 
      title: "Vision", 
      text: "To redefine digital luxury through meticulous design and flawless execution."
    },
    { 
      title: "Craft", 
      text: "We combine artistic vision with technical precision, creating digital experiences as exceptional as the brands they represent."
    },
    { 
      title: "Excellence", 
      text: "Every pixel, interaction, and line of code is crafted with an unwavering commitment to perfection."
    }
  ];

  // Optimized statement variants for better performance
  const statementVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden -mt-24">
        {/* Simplified spotlights with fewer keyframes for better performance */}
        {isClient && (
          <div className="fixed inset-0 z-[-1] -top-24 opacity-50">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.8,
                left: ['85%', '25%', '85%'],
                top: ['15%', '70%', '15%'],
                transition: {
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
              className="absolute top-[15%] left-[85%] w-[45vh] h-[45vh] bg-white rounded-full filter blur-[100px]" 
              style={{ willChange: "opacity, left, top" }}
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.7,
                right: ['75%', '25%', '75%'],
                top: ['65%', '20%', '65%'],
                transition: {
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
              className="absolute top-[65%] right-[75%] w-[50vh] h-[50vh] bg-[#D4AF37] rounded-full filter blur-[120px]" 
              style={{ willChange: "opacity, right, top" }}
            />
          </div>
        )}

        <Section variant="pattern" className="py-28 md:py-36 pt-32 md:pt-40 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main headline with optimized animation using the AnimatedText component */}
            <div className="text-center mb-16 md:mb-24 relative">
              <AnimatedText 
                text="Our Mission"
                className="text-5xl md:text-7xl lg:text-8xl font-outfit font-extralight tracking-tight mb-4"
              />

              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto my-8 md:my-10 max-w-md"
              />

              <AnimatedText 
                text="Elevating luxury brands through exceptional digital design"
                className="text-white/70 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto"
                delay={0.6}
              />
            </div>

            {/* Luxury statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-20 md:mb-24"
            >
              <p className="text-xl md:text-2xl font-outfit font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
                At <span className="font-normal text-[#D4AF37]">ELUX.DEV</span>, we believe luxury companies deserve exceptional digital experiences that reflect their caliber of excellence. Our mission is to elevate brands with bespoke websites that blend elegant aesthetics with technical precision.
              </p>
            </motion.div>

            {/* Core mission statements with optimized animations */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              {missionStatements.map((statement, index) => (
                <motion.div
                  key={index}
                  variants={statementVariants}
                  className="bg-[#0a0a0a]/70 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-sm relative group overflow-hidden"
                  style={{ willChange: "opacity, transform" }}
                >
 
                  
                  <h3 className="text-2xl font-outfit text-[#D4AF37] mb-4">{statement.title}</h3>
                  <p className="text-white/80 font-light">{statement.text}</p>

                  {/* Simplified decorative elements */}
                  <div className="absolute -bottom-20 -right-20 w-40 h-40 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                    <div className="w-full h-full rounded-full border border-[#D4AF37]/30" />
                    <div className="absolute inset-4 rounded-full border border-[#D4AF37]/20" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Luxury approach - Simplified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <div className="inline-block relative">
                <p className="text-white/50 uppercase text-xs tracking-[0.2em] font-inter mb-4">Our Approach</p>
                <div className="w-full h-px bg-white/10 mb-10"></div>
                <p className="text-xl text-white/80 italic font-light mb-4">&ldquo;Making the web more beautiful, one luxury website at a time.&rdquo;</p>
              </div>
            </motion.div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="flex flex-col sm:flex-row justify-center gap-6 mt-10"
            >
              <Button href="/about/team" variant="primary">
                Meet The Team
              </Button>
              <Button href="/contact" variant="secondary">
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </Section>
      </div>
    </LazyMotion>
  );
}

export default MissionPage; 