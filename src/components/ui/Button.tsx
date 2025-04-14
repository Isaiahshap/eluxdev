"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  fullWidth = false,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-widest font-outfit transition-all duration-300 ease-out-silk";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-[#D4AF37] via-[#F5F5DC] to-[#D4AF37] text-black border border-transparent hover:opacity-90",
    secondary: "bg-transparent border border-white hover:bg-white/5",
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${disabled ? "opacity-70 cursor-not-allowed" : ""} ${className}`;
  
  const buttonMotion = {
    whileHover: { scale: disabled ? 1 : 1.02, y: disabled ? 0 : -1 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    transition: { duration: 0.2, ease: [0.76, 0, 0.24, 1] },
  };

  if (href && !disabled) {
    return (
      <motion.div {...buttonMotion}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href && disabled) {
    return (
      <div className={classes}>
        {children}
      </div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...buttonMotion}
    >
      {children}
    </motion.button>
  );
};

// Add default export to ensure the component can be imported both ways
export default Button; 