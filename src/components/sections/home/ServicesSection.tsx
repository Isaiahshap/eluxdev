"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const ServicesSection = () => {
  const services = [
    {
      title: "Bespoke Web Design",
      description: "Custom digital experiences crafted pixel by pixel for discerning luxury brands.",
      link: "/services#design",
    },
    {
      title: "Elite Development",
      description: "Performance-focused code with silky-smooth animations and flawless interactions.",
      link: "/services#development",
    },
    {
      title: "Digital Strategy",
      description: "Strategic guidance for positioning luxury brands in the competitive digital landscape.",
      link: "/services#strategy",
    },
    {
      title: "Brand Identity",
      description: "Crafting cohesive visual narratives that express exclusivity and refinement.",
      link: "/services#branding",
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
    <Section variant="dark" id="services">
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-outfit font-extralight leading-tight mb-6">
          Our <span className="text-[#D4AF37]">Signature</span> Services
        </h2>
        <p className="font-inter font-light text-white/80 max-w-2xl mx-auto">
          We provide end-to-end digital solutions tailored for luxury brands and high-net-worth individuals seeking distinction in the digital realm.
        </p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {services.map((service, index) => (
          <Card key={index} href={service.link} className="h-full">
            <span className="text-[#D4AF37] font-outfit text-sm tracking-widest uppercase mb-4 block">
              0{index + 1}
            </span>
            <h3 className="text-2xl font-outfit mb-4">{service.title}</h3>
            <p className="text-white/80 mb-6">{service.description}</p>
            <div className="text-[#D4AF37] font-outfit text-sm uppercase tracking-widest">
              Explore &rarr;
            </div>
          </Card>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="mt-16 text-center">
        <Button href="/services" variant="primary">
          All Services
        </Button>
      </motion.div>
    </Section>
  );
};

export default ServicesSection; 