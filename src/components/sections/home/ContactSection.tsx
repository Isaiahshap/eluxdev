"use client";

import React, { useState } from "react";
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

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    errorMessage: ""
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

    // Reset form status on new changes
    if (formStatus.isSuccess || formStatus.isError) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: false,
        errorMessage: ""
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset form status
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      errorMessage: ""
    });
    
    // Comprehensive validation
    const errors = {
      name: formState.name.trim() === "",
      email: formState.email.trim() === "" || !validateEmail(formState.email),
      message: formState.message.trim() === ""
    };
    
    if (errors.name || errors.email || errors.message) {
      setFormErrors(errors);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: "Please fill out all required fields correctly."
      });
      return;
    }
    
    try {
      // In the future, this will be connected to Resend API
      // Mock successful submission for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted successfully", formState);
      
      // Reset form after successful submission
      setFormState({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
      setFormStatus({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        errorMessage: ""
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        errorMessage: "An error occurred while submitting the form. Please try again later."
      });
    }
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
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-outfit font-extralight leading-tight mb-6">
                Begin Your <span className="text-[#D4AF37] font-light">Luxury</span> Digital Journey
              </h2>
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-8"></div>
              <p className="font-inter font-light text-white max-w-2xl mx-auto text-lg">
                Contact us to discuss your project requirements and discover how ELUX.DEV can transform your digital presence.
              </p>
            </div>

            {formStatus.isSuccess && (
              <div className="bg-green-900/40 border border-green-500/50 text-white p-6 mb-8 text-center rounded-sm">
                <h3 className="text-xl font-outfit mb-2">Thank You For Your Inquiry</h3>
                <p>We have received your message and will contact you shortly.</p>
              </div>
            )}

            {formStatus.isError && !formErrors.name && !formErrors.email && !formErrors.message && (
              <div className="bg-red-900/40 border border-red-500/50 text-white p-6 mb-8 text-center rounded-sm">
                <h3 className="text-xl font-outfit mb-2">Submission Error</h3>
                <p>{formStatus.errorMessage}</p>
              </div>
            )}

            <form 
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
                      disabled={formStatus.isSubmitting}
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
                      disabled={formStatus.isSubmitting}
                    />
                    {formErrors.email && (
                      <span className="text-red-400 text-sm block mt-2" role="alert">
                        {formState.email.trim() === "" ? "Please enter your email" : "Please enter a valid email address"}
                      </span>
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
                    disabled={formStatus.isSubmitting}
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
                    disabled={formStatus.isSubmitting}
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
                  className="px-12 py-4 text-base uppercase tracking-wider hover:scale-105 transition-all"
                  aria-label="Submit contact form"
                  disabled={formStatus.isSubmitting}
                >
                  {formStatus.isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
                <p className="text-white/60 text-sm mt-4">
                  <span className="text-[#D4AF37]" aria-hidden="true">*</span> Required fields
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 