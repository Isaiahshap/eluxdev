"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ number, title, description, link }: ServiceCardProps) => {
  return (
    <div className="relative group h-full">
      <Link href={link}>
        <motion.div
          className="relative h-full border border-[#D4AF37]/10 bg-[#121212]/70 backdrop-blur-sm p-8 flex flex-col overflow-hidden"
          whileHover={{ 
            y: -8, 
            backgroundColor: "rgba(24, 24, 24, 0.95)",
            borderColor: "rgba(212, 175, 55, 0.3)",
            transition: { duration: 0.2, ease: [0.33, 1, 0.68, 1] }
          }}
          initial={{ backgroundColor: "rgba(18, 18, 18, 0.7)" }}
        >
          {/* Gold accent line */}
          <motion.div 
            className="absolute top-0 left-0 h-px bg-[#D4AF37]/40"
            initial={{ width: 0 }}
            whileHover={{ 
              width: "100%", 
              transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
            }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Card content */}
          <motion.span 
            className="text-[#D4AF37] font-outfit text-2xl mb-6 block opacity-40"
            whileHover={{ opacity: 0.6, x: 2, transition: { duration: 0.15 } }}
          >
            {number}
          </motion.span>
          
          <motion.h3 
            className="text-xl md:text-2xl font-outfit font-light mb-4"
            whileHover={{ x: 2, transition: { duration: 0.15 } }}
          >
            {title}
          </motion.h3>
          
          <motion.p 
            className="text-white/70 font-light mb-6 flex-grow"
            whileHover={{ x: 2, transition: { duration: 0.15 } }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex items-center text-[#D4AF37] opacity-70 group-hover:opacity-100"
            initial={{ x: 0 }}
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
          >
            <span className="font-outfit text-sm uppercase tracking-wider">Explore</span>
            <motion.svg 
              className="w-4 h-4 ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 3, transition: { duration: 0.15 } }}
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </motion.svg>
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
};

export default ServiceCard; 