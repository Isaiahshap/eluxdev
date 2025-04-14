"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface LocationCardProps {
  country: string;
  city: string;
  image: string;
  href: string;
}

export const LocationCard = ({ country, city, image, href }: LocationCardProps) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // For 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Springs for smooth animation
  const rotateX = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 30 });
  
  // Transform values for parallax effect
  const imageScale = useTransform(
    x, 
    [-100, 100], 
    [1.05, 1.15]
  );
  
  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Adjust sensitivity
    x.set(mouseX * 0.15);
    y.set(mouseY * 0.15);
  };
  
  const resetPosition = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <Link href={href}>
      <motion.div
        ref={cardRef}
        className="relative h-[380px] overflow-hidden group rounded-sm"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          resetPosition();
        }}
        style={{
          rotateY,
          rotateX: useTransform(rotateX, v => -v), // Invert for natural feel
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        whileHover={{
          z: 10,
          transition: { duration: 0.3 }
        }}
      >
        {/* Image with parallax effect */}
        <motion.div 
          className="absolute inset-0 z-0 transform-gpu"
          style={{
            scale: imageScale,
            z: -10,
          }}
        >
          <Image
            src={image}
            alt={`${city}, ${country}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-700"
            priority
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500" />
        </motion.div>
        
        {/* Gold border */}
        <motion.div 
          className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/80 transition-all duration-700"
          style={{
            z: 20,
          }}
        />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
          {/* City name */}
          <motion.h3 
            className="font-outfit text-2xl text-white font-light tracking-wide mb-2"
            initial={{ y: 0 }}
            animate={{ y: hovered ? -5 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {city}
          </motion.h3>
          
          {/* Accent line */}
          <motion.div 
            className="h-px bg-[#D4AF37]/70 w-12 mb-4"
            initial={{ width: 12 }}
            animate={{ width: hovered ? 50 : 12 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
          
          {/* Explore button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: hovered ? 1 : 0, 
              y: hovered ? 0 : 20
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-white/80 text-sm inline-flex items-center group-hover:text-[#D4AF37] transition-colors duration-300">
              Explore
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}; 