"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownItem {
  href: string;
  label: string;
}

interface NavDropdownProps {
  items: DropdownItem[];
  isOpen: boolean;
  pathname: string;
  onItemClick?: () => void;
}

export const NavDropdown = ({ items, isOpen, pathname, onItemClick }: NavDropdownProps) => {
  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: 5,
      transition: {
        duration: 0.15,
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
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
    <>
      {/* Invisible bridge to prevent dropdown from closing when moving mouse from nav item to dropdown */}
      <div 
        className={`absolute left-0 w-full h-6 -bottom-6 bg-transparent ${!isOpen ? 'pointer-events-none' : ''}`}
        aria-hidden="true"
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute left-0 top-full mt-6 py-3 w-60 bg-[#0a0a0a] border-t-[1px] border-l-0 border-r-0 border-b-0 border-[#D4AF37]/30 shadow-2xl z-50"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            style={{
              boxShadow: "0 20px 60px -10px rgba(0,0,0,0.8)",
            }}
          >
            {/* Menu items */}
            <div className="relative z-10">
              {items.map((item) => (
                <motion.div 
                  key={item.href}
                  variants={itemVariants}
                  className="relative"
                >
                  <Link 
                    href={item.href}
                    className={`block px-6 py-3 text-sm font-light tracking-wider uppercase transition-all duration-200 relative group hover:pl-8 ${
                      pathname === item.href ? "text-[#D4AF37]" : "text-white/80 hover:text-[#D4AF37]"
                    }`}
                    onClick={onItemClick}
                  >
                    
                    {/* Label with relative positioning */}
                    <span className="relative z-10 transition-all duration-300">
                      {item.label}
                    </span>

                    {/* Subtle background that appears on hover */}
                    <span 
                      className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                        pathname === item.href 
                          ? 'bg-[#D4AF37]/5' 
                          : 'bg-transparent group-hover:bg-[#0c0c0c]'
                      }`}
                    />
                    
                    {/* Subtle bottom border that reveals on hover */}
                    <span 
                      className="absolute left-6 right-6 bottom-0 h-[1px] bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}; 