"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { NavDropdown } from "../ui/NavDropdown";
import { MobileNavDropdown } from "../ui/MobileNavDropdown";

// Define dropdown items
const dropdownItems = {
  about: [
    { href: "/about/team", label: "Meet The Team" },
    { href: "/about/mission", label: "Our Mission" },
    { href: "/about/faq", label: "FAQ" },
    { href: "/about/get-started", label: "How to get started" },
  ],
  services: [
    { href: "/services/design", label: "Web Design" },
    { href: "/services/development", label: "Web Development" },
    { href: "/services/seo", label: "SEO" },
    { href: "/services/ads", label: "Advertisements" },
  ],
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", hasDropdown: true },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/work", label: "Work" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Simplified dropdown handlers - the invisible bridge in the dropdown component
  // prevents flickering when moving from nav item to dropdown
  const handleDropdownEnter = (key: string) => {
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

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
      // Store the current scroll position
      const scrollY = window.scrollY;
      
      // Add scroll lock to body with position fixed
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position when menu is closed
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup scroll lock on unmount
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
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
    open: { rotate: 45, y: 7 },
  };

  const hamburgerMiddleVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };

  const hamburgerBottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
  };

  // Helper function to determine if a nav item should be highlighted
  const isActive = (href: string) => {
    // Special case for home - should be white even if it's the current page
    if (href === "/") return false;
    
    return (
      pathname === href || 
      (pathname?.startsWith(href + "/") && href !== "/") || 
      activeDropdown === href.substring(1)
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[9990] ${
        scrolled ? "bg-black/90 backdrop-blur" : "bg-transparent"
      } transition-all duration-300`}
    >
      <motion.nav
        className="container-wrapper flex justify-between items-center h-20 lg:h-24"
        variants={navbarVariants}
        initial="initial"
        animate="animate"
      >
        <Link href="/" className="z-50">
          <h1 className="font-outfit font-extrabold text-xl tracking-tighter uppercase">
            <span className="text-white">ELUX<span className="text-[#D4AF37]">.DEV</span></span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map(({ href, label, hasDropdown }) => (
            <div 
              key={href} 
              className="relative group"
              onMouseEnter={() => hasDropdown && handleDropdownEnter(href.substring(1))}
              onMouseLeave={hasDropdown ? handleDropdownLeave : undefined}
            >
              <Link 
                href={href}
                className={`nav-link hover:text-[#D4AF37] inline-flex items-center ${
                  isActive(href) ? "text-[#D4AF37]" : "text-white"
                }`}
              >
                {label}
                {hasDropdown && (
                  <span className="ml-1 inline-block">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="10" 
                      height="6" 
                      viewBox="0 0 10 6" 
                      fill="none" 
                      className={`transition-transform duration-300 ${activeDropdown === href.substring(1) ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                )}
              </Link>
              
              {hasDropdown && (
                <NavDropdown 
                  items={dropdownItems[href.substring(1) as keyof typeof dropdownItems]}
                  isOpen={activeDropdown === href.substring(1)}
                  pathname={pathname || ""}
                />
              )}
            </div>
          ))}
          <Button href="/contact" variant="primary">
            Contact
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-[10000] flex flex-col items-center justify-center w-8 h-8 relative"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="w-6 h-4 relative flex flex-col justify-between">
            <motion.span
              className="absolute top-0 block w-6 h-0.5 bg-white transform-gpu"
              variants={hamburgerTopVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute top-1/2 -mt-[1px] block w-6 h-0.5 bg-white transform-gpu"
              variants={hamburgerMiddleVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute bottom-0 block w-6 h-0.5 bg-white transform-gpu"
              variants={hamburgerBottomVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
              style={{ 
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100svh',
                width: '100vw',
                overflowY: 'auto'
              }}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col items-center space-y-6 w-full max-w-lg px-6 py-20">
                {navLinks.map(({ href, label, hasDropdown }) => (
                  <motion.div key={href} variants={linkVariants} className="flex flex-col items-center w-full">
                    <div className="flex items-center justify-center">
                      <Link
                        href={href}
                        className={`text-xl sm:text-2xl font-outfit uppercase tracking-widest hover:text-[#D4AF37] ${
                          isActive(href) ? "text-[#D4AF37]" : ""
                        }`}
                        onClick={() => !hasDropdown && setIsOpen(false)}
                      >
                        {label}
                      </Link>
                      {hasDropdown && (
                        <button 
                          className="ml-2 p-1.5 focus:outline-none"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveDropdown(activeDropdown === href.substring(1) ? null : href.substring(1));
                          }}
                          aria-label={activeDropdown === href.substring(1) ? "Close dropdown" : "Open dropdown"}
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="12" 
                            height="8" 
                            viewBox="0 0 10 6" 
                            fill="none" 
                            className={`transition-transform duration-300 ${activeDropdown === href.substring(1) ? "rotate-180" : ""}`}
                          >
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      )}
                    </div>
                    
                    {hasDropdown && (
                      <MobileNavDropdown 
                        items={dropdownItems[href.substring(1) as keyof typeof dropdownItems]}
                        isOpen={activeDropdown === href.substring(1)}
                        pathname={pathname || ""}
                        onItemClick={() => setIsOpen(false)}
                      />
                    )}
                  </motion.div>
                ))}
                <motion.div variants={linkVariants} className="mt-8 w-full sm:w-auto">
                  <Button href="/contact" variant="primary" className="w-full sm:w-auto text-center">
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