"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navbarVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  const hamburgerTopVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 5 },
  };

  const hamburgerMiddleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const hamburgerBottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -5 },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? "bg-black/90 backdrop-blur" : "bg-transparent"
      } transition-all duration-300`}
    >
      <motion.nav
        className="container-wrapper flex justify-between items-center h-20 md:h-24"
        variants={navbarVariants}
        initial="initial"
        animate="animate"
      >
        <Link href="/" className="z-50">
          <h1 className="font-outfit font-extrabold text-xl tracking-tighter uppercase">
            <span className="text-white">ELUX</span>
            <span className="text-[#D4AF37]">.DEV</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link 
              key={href} 
              href={href}
              className={`nav-link hover:text-[#D4AF37] ${pathname === href ? "text-[#D4AF37]" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Button href="/contact" variant="primary">
            Contact
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 flex flex-col items-center justify-center w-8 h-8"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <motion.span
            className="block w-6 h-0.5 bg-white mb-1.5"
            variants={hamburgerTopVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white mb-1.5"
            variants={hamburgerMiddleVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block w-6 h-0.5 bg-white"
            variants={hamburgerBottomVariants}
            animate={isOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black flex flex-col items-center justify-center z-40"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col items-center space-y-6">
                {navLinks.map(({ href, label }) => (
                  <motion.div key={href} variants={linkVariants}>
                    <Link
                      href={href}
                      className={`text-2xl font-outfit uppercase tracking-widest hover:text-[#D4AF37] ${
                        pathname === href ? "text-[#D4AF37]" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div variants={linkVariants} className="mt-8">
                  <Button href="/contact" variant="primary">
                    Contact
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}; 