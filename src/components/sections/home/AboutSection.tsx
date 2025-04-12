"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

const AboutSection = () => {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "150+", label: "Elite Projects" },
    { value: "5", label: "Global Locations" },
    { value: "97%", label: "Client Retention" },
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
    <Section variant="pattern" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-outfit font-extralight leading-tight mb-6">
            The Studio Behind <span className="text-[#D4AF37]">Exceptional</span> Digital Experiences
          </h2>
          
          <p className="font-inter font-light text-white/80 leading-relaxed mb-6">
            Founded by brothers Yeshaya and Yitz Shapiro, ELUX.DEV is a boutique atelier that blends elegant aesthetics with technical excellence to create bespoke digital platforms for the world&apos;s most discerning clients.
          </p>
          
          <p className="font-inter font-light text-white/80 leading-relaxed mb-10">
            We approach each project as a collaboration with our clients, creating websites that not only look exceptional but perform flawlessly. Our work spans private aviation, yachting, fine art, boutique hospitality, and private equity — industries where perception is everything.
          </p>
          
          <Button href="/about" variant="secondary">
            Our Philosophy
          </Button>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-black/50 backdrop-blur p-8 rounded-sm">
                <p className="text-5xl font-outfit font-extralight text-[#D4AF37] mb-2">{stat.value}</p>
                <p className="font-inter uppercase tracking-wider text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection; 