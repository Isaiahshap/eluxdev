"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  href: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  category,
  image,
  href,
}) => {
  return (
    <div className="group relative flex flex-col h-[500px] max-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-[120%] h-[120%] -left-[10%] -top-[10%]">
          <Image
            src={image}
            alt={`${title} background`}
            fill
            quality={40}
            sizes="100vw"
            className="object-cover blur-lg scale-110 opacity-80"
          />
        </div>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-between h-full p-6">
        <div className="text-center pt-4">
          <span className="text-[#D4AF37] font-outfit text-xs tracking-widest uppercase block mb-2">
            {category}
          </span>
          <h3 className="text-2xl font-outfit font-light mb-4">{title}</h3>
        </div>
        
        <div className="w-full flex-grow flex items-center justify-center overflow-hidden">
          <motion.div
            whileHover={{ 
              scale: 1.03,
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            }}
            className="w-full relative"
            style={{ aspectRatio: "16/9" }}
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover rounded-sm"
              quality={90}
            />
          </motion.div>
        </div>
        
        <Link href={href} className="mt-6">
          <motion.div
            whileHover={{ 
              y: -3,
              transition: { duration: 0.2 }
            }}
            className="font-outfit text-sm uppercase tracking-wider text-white px-6 py-3 border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors duration-300"
          >
            View Project
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard; 