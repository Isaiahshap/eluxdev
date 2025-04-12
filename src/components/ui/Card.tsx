"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
};

export const Card = ({ children, className = "", href, onClick }: CardProps) => {
  const baseClasses = "relative overflow-hidden bg-neutral-900 p-6 transition-all";
  const classes = `${baseClasses} ${className}`;

  const cardMotion = {
    initial: { scale: 1 },
    whileHover: { 
      scale: 1.02,
      rotateY: 2,
      rotateX: 2,
      y: -5,
      transition: { 
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] 
      }
    },
    whileTap: { 
      scale: 0.98,
      transition: { 
        duration: 0.2,
        ease: [0.76, 0, 0.24, 1] 
      }
    }
  };

  const cardContent = (
    <div className="relative z-10">
      {children}
    </div>
  );

  if (href) {
    return (
      <motion.div {...cardMotion}>
        <Link href={href} className={classes}>
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  if (onClick) {
    return (
      <motion.div
        className={classes}
        onClick={onClick}
        {...cardMotion}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={classes}
      {...cardMotion}
    >
      {cardContent}
    </motion.div>
  );
};

export default Card; 