"use client";

import React from "react";
import { motion } from "framer-motion";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "dark" | "pattern";
  fullHeight?: boolean;
};

export const Section = ({
  children,
  className = "",
  id,
  variant = "dark",
  fullHeight = false,
}: SectionProps) => {
  const baseClasses = "w-full relative";
  const variantClasses = {
    dark: "section-dark",
    pattern: "section-pattern",
  };

  const classes = `section ${baseClasses} ${variantClasses[variant]} ${
    fullHeight ? "min-h-screen" : ""
  } ${className}`;

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants = {
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
    <motion.section
      id={id}
      className={classes}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      <motion.div className="container-wrapper" variants={childVariants}>
        {children}
      </motion.div>
    </motion.section>
  );
};

export default Section; 