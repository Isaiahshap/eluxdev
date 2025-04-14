"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon?: string | ReactNode; // Allow either an image path or a React component
  href: string;
  index?: number;
  footer?: ReactNode;
  className?: string;
  imageClassName?: string;
  iconClassName?: string;
}

const Card = ({
  title,
  description,
  icon,
  href,
  index = 0,
  footer,
  className = "",
  imageClassName = "",
  iconClassName = "",
}: CardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`group ${className}`}
    >
      <Link href={href} className="block h-full">
        <div className="bg-[#090909] border border-white/5 rounded-sm p-6 h-full transition-all duration-500 group-hover:border-[#D4AF37]/20 relative overflow-hidden">
          {/* Subtle glow effect in the background */}
          <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 bg-[#D4AF37]/5 blur-xl rounded-full transition-opacity duration-700" />
          
          {/* Gold line accent that animates on hover */}
          <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/20 group-hover:w-full transition-all duration-700 ease-in-out" />
          
          <div className="relative z-10 h-full flex flex-col">
            {icon && (
              typeof icon === 'string' ? (
                <div className={`mb-4 p-3 rounded-sm inline-flex bg-[#0c0c0c] border border-white/5 ${iconClassName}`}>
                  <Image 
                    src={icon}
                    alt={title}
                    width={24}
                    height={24}
                    className={`h-5 w-5 object-contain ${imageClassName}`}
                  />
                </div>
              ) : (
                <div className={`mb-4 ${iconClassName}`}>
                  {icon}
                </div>
              )
            )}
            
            <h3 className="text-xl sm:text-2xl font-outfit font-light tracking-tight text-white group-hover:text-[#D4AF37] transition-colors duration-300 mb-3">
              {title}
            </h3>
            
            <p className="text-white/70 font-light text-sm sm:text-base mb-6 group-hover:text-white/80 transition-colors duration-300 flex-grow">
              {description}
            </p>
            
            {footer ? (
              footer
            ) : (
              <div className="flex items-center text-[#D4AF37] text-sm font-medium mt-auto">
                <span className="mr-2">Learn More</span>
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card; 