"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";

const ContactSection = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Will be implemented with backend later
    console.log("Form submitted");
  };

  return (
    <Section variant="dark" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-outfit font-extralight leading-tight mb-6">
            Begin Your <span className="text-[#D4AF37]">Luxury</span> Digital Journey
          </h2>
          <p className="font-inter font-light text-white/80 max-w-2xl mx-auto">
            Contact us to discuss your project requirements and discover how ELUX.DEV can transform your digital presence.
          </p>
        </motion.div>

        <motion.form 
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-6 md:col-span-1">
            <div>
              <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-transparent border border-white/20 py-3 px-4 focus:outline-none focus:border-[#D4AF37] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-transparent border border-white/20 py-3 px-4 focus:outline-none focus:border-[#D4AF37] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm uppercase tracking-wider mb-2">
                Phone (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-transparent border border-white/20 py-3 px-4 focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              className="w-full bg-transparent border border-white/20 py-3 px-4 focus:outline-none focus:border-[#D4AF37] transition-colors"
              required
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <Button type="submit" variant="primary">
              Send Inquiry
            </Button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
};

export default ContactSection; 