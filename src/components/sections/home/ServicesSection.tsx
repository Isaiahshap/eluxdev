"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "Bespoke Web Design",
      description: "Custom digital experiences crafted pixel by pixel for discerning luxury brands.",
      link: "/services#design",
    },
    {
      number: "02",
      title: "Elite Development",
      description: "Performance-focused code with silky-smooth animations and flawless interactions.",
      link: "/services#development",
    },
    {
      number: "03",
      title: "Digital Strategy",
      description: "Strategic guidance for positioning luxury brands in the competitive digital landscape.",
      link: "/services#strategy",
    },
    {
      number: "04",
      title: "Brand Identity",
      description: "Crafting cohesive visual narratives that express exclusivity and refinement.",
      link: "/services#branding",
    },
  ];

  return (
    <div className="relative py-32 overflow-hidden">
      {/* Premium background with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 -right-8 overflow-hidden">
          <Image 
            src="/images/luxury-background.webp" 
            alt="Luxury Background"
            fill
            priority
            className="object-cover opacity-100"
          />
        </div>
        <div className="absolute inset-0"></div>
      </div>

      <div className="container-wrapper relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-outfit font-extralight leading-tight mb-8">
            Our <span className="text-[#D4AF37] font-light">Signature</span> Services
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-8"></div>
          <p className="font-inter font-light text-white/80 max-w-2xl mx-auto text-lg">
            We provide end-to-end digital solutions tailored for luxury brands and high-net-worth individuals seeking distinction in the digital realm.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { 
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.5,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center mt-20"
        >
          <Button href="/services" variant="primary" className="px-8 py-3">
            View All Services
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection; 