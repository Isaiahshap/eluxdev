"use client";

import React from "react";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  highlightColor?: string;
  highlightLetter?: string;
  delay?: number;
};

const AnimatedText = ({
  text,
  className = "",
  highlightColor = "",
  highlightLetter = "",
  delay = 0
}: AnimatedTextProps) => {
  // For better performance, animate words instead of individual letters
  const words = text.split(" ");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      }
    }
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ willChange: "opacity, transform" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mx-[2px] md:mx-1"
          style={{
            willChange: "opacity, transform",
            transformOrigin: "bottom center"
          }}
        >
          {Array.from(word).map((letter, letterIndex) => (
            <span 
              key={letterIndex}
              style={{ 
                color: letter === highlightLetter ? highlightColor : "inherit",
              }}
            >
              {letter}
            </span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText; 