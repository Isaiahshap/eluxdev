"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface InteractiveCardProps {
  images: string[];
  alt: string;
  className?: string;
  interval?: number; // Time in ms between image transitions
}

const InteractiveCard = ({
  images,
  alt,
  className = "",
  interval = 5000,
}: InteractiveCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Using spring values for smooth interpolation
  const rotateX = useSpring(0, { 
    stiffness: 50, 
    damping: 30,
    mass: 1
  });
  
  const rotateY = useSpring(0, { 
    stiffness: 50, 
    damping: 30,
    mass: 1
  });

  // Add glow position springs
  const glowX = useSpring(0, { 
    stiffness: 50, 
    damping: 30,
    mass: 1
  });
  
  const glowY = useSpring(0, { 
    stiffness: 50, 
    damping: 30,
    mass: 1
  });

  // Handle auto-rotation of images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, images.length]);

  // Add event listener to the entire document for mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Get viewport dimensions
      const { innerWidth, innerHeight } = window;
      
      // Calculate normalized coordinates (-1 to 1)
      const normalizedX = (e.clientX / innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / innerHeight) * 2 - 1;
      
      // Apply smooth rotation (reduced values for subtler effect)
      rotateY.set(normalizedX * 5); // 5 degrees max rotation
      rotateX.set(-normalizedY * 5); // Negative for natural tilt direction
      
      // Set glow position based on mouse movement
      glowX.set(normalizedX * 100); 
      glowY.set(normalizedY * 100);
    };
    
    // Add global mouse move handler
    document.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [rotateX, rotateY, glowX, glowY]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative w-full perspective-1000 ${className}`}
      style={{ 
        transformStyle: "preserve-3d",
        aspectRatio: "1512/746"
      }}
    >
      <motion.div
        className="w-full h-full rounded-sm overflow-hidden preserve-3d backface-hidden bg-black"
        style={{ 
          transformStyle: "preserve-3d",
          rotateX,
          rotateY
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImageIndex]}
              alt={`${alt} - ${currentImageIndex + 1}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 mix-blend-overlay" />
          </motion.div>
        </AnimatePresence>

        {/* Gold accent border */}
        <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-sm pointer-events-none" />
        
        {/* Dynamic matte reflection effect */}
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent rounded-sm pointer-events-none opacity-30"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)",
            width: "400%",
            height: "400%",
            top: glowY,
            left: glowX,
            transform: "translate(-50%, -50%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default InteractiveCard; 