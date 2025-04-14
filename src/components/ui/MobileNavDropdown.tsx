"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  href: string;
  label: string;
}

interface MobileNavDropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
  pathname: string;
  onItemClick: () => void;
}

export const MobileNavDropdown = ({ items, isOpen, pathname, onItemClick }: MobileNavDropdownProps) => {
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.25,
        staggerChildren: 0.03,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.15,
      }
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="w-full overflow-hidden"
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="mt-5 pt-5 border-t border-white/10 flex flex-col items-center space-y-3">
            {items.map((item) => (
              <motion.div 
                key={item.href}
                variants={itemVariants}
                className="w-full text-center"
              >
                <Link
                  href={item.href}
                  className={`py-2.5 px-4 inline-block text-base uppercase font-normal tracking-wide transition-colors duration-200 relative ${
                    pathname === item.href ? "text-[#D4AF37]" : "text-white/60"
                  }`}
                  onClick={onItemClick}
                >
                  <span className="relative">{item.label}</span>
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[1px] bg-[#D4AF37]/50"></span>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 