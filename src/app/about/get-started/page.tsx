"use client";

import React, { useState } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import Section from "@/components/layout/Section";
import { ArrowRight, CheckCircle, Calendar, MessageSquare, Briefcase } from "lucide-react";

export default function GetStartedPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectDetails: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.projectDetails) {
      setFormStatus({ 
        submitted: false, 
        error: true, 
        message: "Please fill out all required fields." 
      });
      return;
    }
    
    // Would normally submit to a backend API here
    console.log("Form submitted", formState);
    setFormStatus({ 
      submitted: true, 
      error: false, 
      message: "Thank you for your inquiry. We will reach out to you shortly." 
    });
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormState({ 
        name: "", 
        email: "", 
        company: "", 
        budget: "",
        projectDetails: "" 
      });
    }, 3000);
  };

  // Process steps data
  const processSteps = [
    {
      icon: <CheckCircle size={24} />,
      title: "Submit Inquiry",
      description: "Fill out our detailed inquiry form to help us understand your vision and requirements.",
      highlight: true
    },
    {
      icon: <ArrowRight size={24} />,
      title: "Founders Connect",
      description: "Our founders personally reach out to discuss your project and answer initial questions.",
      highlight: false
    },
    {
      icon: <Calendar size={24} />,
      title: "Strategy Meeting",
      description: "We schedule an in-depth consultation to explore your needs, goals, and aesthetic preferences.",
      highlight: false
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Collaborative Discussion",
      description: "Together we refine the concept, clarify the scope, and establish the project timeline.",
      highlight: false
    },
    {
      icon: <Briefcase size={24} />,
      title: "Meticulous Development",
      description: "Our team of craftsmen bring your vision to life with pixel-perfect precision and luxury details.",
      highlight: false
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden -mt-24">
        <Section variant="pattern" className="py-28 md:py-36 pt-32 md:pt-40 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Main headline */}
            <div className="text-center mb-16 md:mb-20">
              <h1 className="text-4xl md:text-6xl font-outfit font-extralight tracking-tight mb-4">
                Begin Your <span className="text-[#D4AF37]">Luxury</span> Journey
              </h1>
              
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/50 to-transparent mx-auto my-8 max-w-md"
              />
              
              <p className="text-white/70 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
                Transform your digital presence with our meticulously crafted solutions designed exclusively for discerning brands.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              {/* Process Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-black/30 backdrop-blur-sm border border-white/5 p-8 rounded-sm"
              >
                <h2 className="text-2xl md:text-3xl font-outfit font-light mb-8 relative pl-4 border-l-2 border-[#D4AF37]">
                  Our Process
                </h2>
                
                <div className="space-y-8">
                  {processSteps.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                      className="flex"
                    >
                      {/* Vertical line connecting steps */}
                      {index < processSteps.length - 1 && (
                        <div className="absolute ml-4 mt-10 w-0.5 h-16 bg-gradient-to-b from-[#B8860B]/50 to-transparent" />
                      )}
                      
                      {/* Step icon */}
                      <div className={`relative flex-shrink-0 w-8 h-8 mr-5 flex items-center justify-center rounded-full ${
                        step.highlight 
                          ? "text-black bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B]" 
                          : "text-[#D4AF37] bg-black/50 border border-[#B8860B]/30"
                      }`}>
                        {step.icon}
                      </div>
                      
                      {/* Step content */}
                      <div>
                        <h3 className="text-xl font-outfit font-light text-white mb-2">{step.title}</h3>
                        <p className="text-white/70 font-light">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Inquiry Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-black/30 backdrop-blur-sm border border-white/5 p-8 rounded-sm"
              >
                <h2 className="text-2xl md:text-3xl font-outfit font-light mb-8 relative pl-4 border-l-2 border-[#D4AF37]">
                  Start Your Project
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-white/80 text-sm uppercase tracking-wider mb-2 font-outfit">
                      Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-white/80 text-sm uppercase tracking-wider mb-2 font-outfit">
                      Email <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-black/50 border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  {/* Company Field */}
                  <div>
                    <label htmlFor="company" className="block text-white/80 text-sm uppercase tracking-wider mb-2 font-outfit">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formState.company}
                      onChange={handleInputChange}
                      className="w-full bg-black/50 border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  
                  {/* Project Details Field */}
                  <div>
                    <label htmlFor="projectDetails" className="block text-white/80 text-sm uppercase tracking-wider mb-2 font-outfit">
                      Project Details <span className="text-[#D4AF37]">*</span>
                    </label>
                    <textarea
                      id="projectDetails"
                      name="projectDetails"
                      value={formState.projectDetails}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-black/50 border border-white/10 text-white p-3 rounded-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and vision"
                    />
                  </div>
                  
                  {/* Form Status Messages */}
                  {formStatus.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-3 rounded-sm ${formStatus.error ? "bg-red-900/30 text-red-200" : "bg-[#B8860B]/20 text-[#D4AF37]"}`}
                    >
                      {formStatus.message}
                    </motion.div>
                  )}
                  
                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#B8860B] text-black py-3 px-6 rounded-sm text-sm uppercase tracking-widest font-outfit transition-all duration-300 hover:opacity-90"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    Submit Inquiry
                  </motion.button>
                  
                  <p className="text-white/50 text-xs text-center mt-4">
                    All inquiries are confidential and responded to within 24-48 business hours.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </Section>
      </div>
    </LazyMotion>
  );
} 