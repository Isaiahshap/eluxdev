"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: false
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const errors = {
      name: formState.name.trim() === "",
      email: formState.email.trim() === "",
      message: formState.message.trim() === ""
    };
    
    if (errors.name || errors.email || errors.message) {
      setFormErrors(errors);
      return;
    }
    
    // Will be implemented with backend later
    console.log("Form submitted", formState);
  };

  return (
    <section id="contact" className="relative min-h-[700px] py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/cta-bg.webp" 
          alt="Contact Background"
          fill
          priority
          className="object-cover"
        />
        {/* Very subtle overlay for better text readability (ADA compliance) */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container-wrapper relative z-10">
        <div className="max-w-4xl mx-auto backdrop-blur-sm bg-black/20 p-8 md:p-12 rounded-sm border border-[#D4AF37]/10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-outfit font-extralight leading-tight mb-6">
                Begin Your <span className="text-[#D4AF37] font-light">Luxury</span> Digital Journey
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-8"></div>
              <p className="font-inter font-light text-white max-w-2xl mx-auto text-lg">
                Contact us to discuss your project requirements and discover how ELUX.DEV can transform your digital presence.
              </p>
            </motion.div>

            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              aria-label="Contact form"
            >
              <div className="space-y-8 md:col-span-1">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-3 font-medium text-white">
                    Name <span className="text-[#D4AF37]" aria-hidden="true">*</span>
                  </label>
                  <div className={`relative ${formErrors.name ? 'animate-shake' : ''}`}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className={`w-full bg-black/40 backdrop-blur-sm border ${formErrors.name ? 'border-red-500' : 'border-white/30'} py-4 px-5 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors`}
                      aria-required="true"
                      aria-invalid={formErrors.name}
                    />
                    {formErrors.name && (
                      <span className="text-red-400 text-sm block mt-2" role="alert">Please enter your name</span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-3 font-medium text-white">
                    Email <span className="text-[#D4AF37]" aria-hidden="true">*</span>
                  </label>
                  <div className={`relative ${formErrors.email ? 'animate-shake' : ''}`}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className={`w-full bg-black/40 backdrop-blur-sm border ${formErrors.email ? 'border-red-500' : 'border-white/30'} py-4 px-5 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors`}
                      aria-required="true"
                      aria-invalid={formErrors.email}
                    />
                    {formErrors.email && (
                      <span className="text-red-400 text-sm block mt-2" role="alert">Please enter your email</span>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-wider mb-3 font-medium text-white">
                    Phone <span className="text-white/50">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="w-full bg-black/40 backdrop-blur-sm border border-white/30 py-4 px-5 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors"
                    aria-required="false"
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-3 font-medium text-white">
                  Project Details <span className="text-[#D4AF37]" aria-hidden="true">*</span>
                </label>
                <div className={`relative h-full ${formErrors.message ? 'animate-shake' : ''}`}>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows={8}
                    className={`w-full h-[calc(100%-24px)] bg-black/40 backdrop-blur-sm border ${formErrors.message ? 'border-red-500' : 'border-white/30'} py-4 px-5 rounded-sm focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors resize-none`}
                    aria-required="true"
                    aria-invalid={formErrors.message}
                  ></textarea>
                  {formErrors.message && (
                    <span className="text-red-400 text-sm block mt-2" role="alert">Please enter your project details</span>
                  )}
                </div>
              </div>

              <div className="md:col-span-2 text-center mt-8">
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="px-12 py-4 text-base uppercase tracking-wider hover:scale-105 transition-transform"
                  aria-label="Submit contact form"
                >
                  Send Inquiry
                </Button>
                <p className="text-white/60 text-sm mt-4">
                  <span className="text-[#D4AF37]" aria-hidden="true">*</span> Required fields
                </p>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 