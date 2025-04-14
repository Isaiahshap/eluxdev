"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/locations", label: "Locations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const locationGroups = [
  {
    region: "North America",
    cities: [
      { name: "New York", href: "/locations/new-york" },
      { name: "Los Angeles", href: "/locations/los-angeles" },
      { name: "Miami", href: "/locations/miami" },
      { name: "San Francisco", href: "/locations/san-francisco" },
    ]
  },
  {
    region: "Europe",
    cities: [
      { name: "London", href: "/locations/london" },
      { name: "Paris", href: "/locations/paris" },
      { name: "Monaco", href: "/locations/monaco" },
      { name: "Zurich", href: "/locations/zurich" },
    ]
  },
  {
    region: "Middle East",
    cities: [
      { name: "Dubai", href: "/locations/dubai" },
      { name: "Abu Dhabi", href: "/locations/abu-dhabi" },
      { name: "Istanbul", href: "/locations/istanbul" },
    ]
  },
  {
    region: "Asia Pacific",
    cities: [
      { name: "Tokyo", href: "/locations/tokyo" },
      { name: "Hong Kong", href: "/locations/hong-kong" },
      { name: "Sydney", href: "/locations/sydney" },
    ]
  }
];

export const Footer = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formState.name || !formState.email || !formState.message) {
      setFormStatus({ submitted: false, error: true });
      return;
    }
    
    // Will be implemented with backend later
    console.log("Form submitted", formState);
    setFormStatus({ submitted: true, error: false });
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" });
      setFormStatus({ submitted: false, error: false });
    }, 3000);
  };

  const footerVariants = {
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

  const itemVariants = {
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

  const shimmerEffect = {
    hidden: { backgroundPosition: '200% 0' },
    visible: { 
      backgroundPosition: '-200% 0',
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "linear"
      }
    }
  };

  return (
    <footer className="relative">
      {/* Diagonal cut top section */}
      <div className="w-full h-12 sm:h-16 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#080808] transform -skew-y-2 origin-top-right"></div>
      </div>
      
      <div className="bg-gradient-to-b from-[#080808] to-black pt-12 sm:pt-16 pb-8 sm:pb-10 relative overflow-hidden">
        {/* Gold accent line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
        
        {/* Background glow effect */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-[#D4AF37]/5 blur-[150px] z-0 opacity-50"
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      
        <motion.div
          className="container-wrapper relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={footerVariants}
        >
          {/* Logo and tagline section */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col lg:flex-row justify-between items-center mb-12 sm:mb-20 text-center lg:text-left"
          >
            <div className="mb-6 lg:mb-0">
              <Link href="/" className="inline-block">
                <motion.div 
                  className="relative"
                  initial="hidden"
                  animate="visible"
                  variants={shimmerEffect}
                  style={{
                    backgroundImage: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl tracking-tighter uppercase">
                    <span className="text-white">ELUX</span>
                    <span className="text-[#D4AF37]">.DEV</span>
                  </h2>
                </motion.div>
              </Link>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-white/80 font-light text-base sm:text-lg max-w-md">
                Creating exceptional digital experiences for those who demand nothing but perfection.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12">
            {/* Main content columns */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div>
                <h3 className="font-outfit text-white text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 relative pl-3 border-l-2 border-[#D4AF37]">
                  About Us
                </h3>
                <p className="text-white/70 mb-6 font-light text-sm sm:text-base">
                  Elite digital experiences for luxury brands and high-net-worth individuals.
                  Meticulously crafted websites with a relentless focus on elegance and performance.
                </p>
              </div>
              
              <div>
                <h3 className="font-outfit text-white text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 relative pl-3 border-l-2 border-[#D4AF37]">
                  Connect
                </h3>
                <div className="flex space-x-5">
                  <a
                    href="https://twitter.com/eluxdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="text-white/70 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/eluxdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-white/70 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/eluxdev"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-white/70 hover:text-[#D4AF37] transition-all duration-300 hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <h3 className="font-outfit text-white text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 relative pl-3 border-l-2 border-[#D4AF37]">
                Quick Links
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link 
                      href={href} 
                      className="text-white/70 hover:text-[#D4AF37] transition-all duration-300 inline-block relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-[#D4AF37] after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Locations */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <h3 className="font-outfit text-white text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 relative pl-3 border-l-2 border-[#D4AF37]">
                Global Presence
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-y-5">
                {locationGroups.map((group, groupIndex) => (
                  <div key={groupIndex} className="space-y-1.5 sm:space-y-2">
                    <p className="text-[#D4AF37] text-xs uppercase tracking-wider font-medium mb-1">
                      {group.region}
                    </p>
                    <ul className="space-y-1">
                      {group.cities.map((city, cityIndex) => (
                        <li key={cityIndex}>
                          <Link 
                            href={city.href}
                            className="text-xs sm:text-sm text-white/70 hover:text-[#D4AF37] transition-colors duration-300 inline-block"
                          >
                            {city.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <h3 className="font-outfit text-white text-sm sm:text-base uppercase tracking-wider mb-4 sm:mb-5 relative pl-3 border-l-2 border-[#D4AF37]">
                Get In Touch
              </h3>
              
              <AnimatePresence mode="wait">
                {formStatus.submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-sm py-3 sm:py-4 px-4 sm:px-5 text-center"
                  >
                    <div className="inline-block mb-2 sm:mb-3">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-white text-sm sm:text-base">Thank you for your message. We&apos;ll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-3 sm:space-y-4"
                  >
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className={`w-full bg-white/5 backdrop-blur-sm border text-sm sm:text-base ${formStatus.error && !formState.name ? 'border-red-500' : 'border-white/10'} py-2.5 sm:py-3 px-3 sm:px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors`}
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className={`w-full bg-white/5 backdrop-blur-sm border text-sm sm:text-base ${formStatus.error && !formState.email ? 'border-red-500' : 'border-white/10'} py-2.5 sm:py-3 px-3 sm:px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors`}
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        rows={3}
                        className={`w-full bg-white/5 backdrop-blur-sm border text-sm sm:text-base ${formStatus.error && !formState.message ? 'border-red-500' : 'border-white/10'} py-2.5 sm:py-3 px-3 sm:px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none`}
                        required
                      ></textarea>
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        variant="primary" 
                        fullWidth
                        className="py-2.5 sm:py-3 uppercase tracking-wider text-xs sm:text-sm"
                      >
                        Send Message
                      </Button>
                    </motion.div>
                    
                    {formStatus.error && (
                      <p className="text-red-400 text-xs sm:text-sm">Please fill in all required fields.</p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Footer bottom section with animated gradient border */}
          <div className="relative mt-12 sm:mt-20">
            <motion.div 
              className="h-px w-full mb-6 sm:mb-8 overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="h-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            >
              <p className="text-white/40 text-xs sm:text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} ELUX.DEV. All rights reserved.
              </p>
              <div>
                <ul className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-8">
                  <li>
                    <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300 text-xs sm:text-sm">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300 text-xs sm:text-sm">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white/40 hover:text-[#D4AF37] transition-colors duration-300 text-xs sm:text-sm">
                      Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}; 