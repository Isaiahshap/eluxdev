"use client";

import React, { useState, useEffect } from "react";
import { motion, LazyMotion, domAnimation } from "framer-motion";
import Section from "@/components/layout/Section";
import FAQ from "@/components/faq/FAQ";
import AnimatedText from "../mission/components/AnimatedText";

export default function FAQPage() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    return () => {
      setIsClient(false);
    };
  }, []);

  const faqItems = [
    {
      question: "What makes ELUX.DEV different from other web design agencies?",
      answer: "ELUX.DEV specializes exclusively in creating elite digital experiences for luxury brands and high-net-worth individuals. We combine artistic vision with technical precision, ensuring every pixel, interaction, and line of code is crafted with an unwavering commitment to perfection. Our approach is highly bespoke, focusing on elegant aesthetics and flawless performance that reflects the caliber of excellence our clients demand.",
      index: 0
    },
    {
      question: "What is your design process?",
      answer: "Our design process begins with an in-depth discovery phase to understand your brand's essence, target audience, and business goals. We then create a meticulous strategy, followed by wireframing and prototyping. Our design phase emphasizes luxury aesthetics with attention to typography, white space, and motion. Development is handled by expert craftsmen who build with performance and scalability in mind. Before launch, we conduct thorough testing across devices and platforms, ensuring an impeccable result.",
      index: 1
    },
    {
      question: "How long does it take to complete a project?",
      answer: "Typical luxury websites take 8-12 weeks from concept to launch, though timeline varies based on project complexity, features required, and content preparation. Our focus is on quality rather than rushed delivery. We provide a detailed timeline during our initial consultation and maintain transparent communication throughout the process. For clients with urgent needs, we can discuss expedited options without compromising our standards of excellence.",
      index: 2
    },
    {
      question: "Do you offer website maintenance services?",
      answer: "Yes, we offer comprehensive maintenance services including security updates, performance optimization, content updates, and technical support. We recommend our Luxury Concierge service, which provides priority support, regular performance audits, and proactive monitoring. This ensures your digital presence remains as impeccable as the day it launched, evolving with your needs and the changing digital landscape.",
      index: 3
    },
    {
      question: "What technologies do you use?",
      answer: "We select technologies based on each project's specific needs, rather than a one-size-fits-all approach. For most luxury sites, we utilize Next.js, React, and TypeScript for exceptional performance and maintainability. Our designs are implemented with Tailwind CSS and Framer Motion for sophisticated animations. For content management, we often recommend Sanity.io or Contentful, providing intuitive interfaces for our clients. All solutions are built with scalability, security, and future enhancement in mind.",
      index: 4
    },
    {
      question: "How do you handle SEO for luxury websites?",
      answer: "Our approach to SEO for luxury brands balances visibility with exclusivity. We implement technical SEO best practices including semantic HTML, optimized metadata, and schema markup. Our content strategy emphasizes quality over quantity, with perfectly crafted messaging that resonates with discerning audiences. We provide detailed analytics and can design comprehensive digital marketing strategies to complement your web presence, ensuring you attract the right clientele rather than simply increasing traffic volume.",
      index: 5
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden -mt-24">
        {/* Luxury gold gradient background with animated spotlights */}
        {isClient && (
          <div className="fixed inset-0 z-[-1] -top-24 opacity-50">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.8,
                left: ['65%', '35%', '65%'],
                top: ['25%', '60%', '25%'],
                transition: {
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
              className="absolute top-[25%] left-[65%] w-[40vh] h-[40vh] bg-[#D4AF37] rounded-full filter blur-[120px]" 
              style={{ willChange: "opacity, left, top" }}
            />
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.7,
                right: ['60%', '30%', '60%'],
                top: ['55%', '30%', '55%'],
                transition: {
                  duration: 35,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
              className="absolute top-[55%] right-[60%] w-[35vh] h-[35vh] bg-[#F5F5DC] rounded-full filter blur-[100px]" 
              style={{ willChange: "opacity, right, top" }}
            />
          </div>
        )}

        <Section variant="pattern" className="py-28 md:py-36 pt-32 md:pt-40 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main headline with luxury animation */}
            <div className="text-center mb-16 md:mb-20 relative">
              <AnimatedText 
                text="Frequently Asked Questions"
                className="text-4xl md:text-6xl font-outfit font-extralight tracking-tight mb-4"
              />

              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto my-8 max-w-md"
              />

              <AnimatedText 
                text="Everything you need to know about our luxury web design services"
                className="text-white/70 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto"
                delay={0.6}
              />
            </div>

            {/* Gold FAQ Component */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="relative z-10"
            >
              <FAQ items={faqItems} />
            </motion.div>

            {/* Additional Question CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-16 text-center"
            >
              <p className="text-white/70 text-lg mb-6">
                Have a question that&apos;s not answered above?
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-widest font-outfit transition-all duration-300 ease-out-silk bg-gradient-to-r from-[#D4AF37] via-[#F5F5DC] to-[#D4AF37] text-black border border-transparent hover:opacity-90"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.76, 0, 0.24, 1] }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </div>
        </Section>
      </div>
    </LazyMotion>
  );
} 