"use client";

import React from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Book, Users, Compass, Flag, Briefcase } from "lucide-react";

export default function AboutPage() {
  // Timeline items
  const timelineItems = [
    {
      year: "2023",
      title: "Origins at yeshaya.dev",
      description: "Foundation laid through our sister brand, refining techniques and developing our approach to luxury web design."
    },
    {
      year: "2024",
      title: "Market Research",
      description: "Identified the significant gap in truly exceptional websites for luxury brands and high-net-worth individuals."
    },
    {
      year: "2025",
      title: "ELUX.DEV Launch",
      description: "Official launch of ELUX.DEV with a mission to create elite digital experiences that match our clients' caliber of excellence."
    },
    {
      year: "2025",
      title: "First Major Clients",
      description: "Partnered with select luxury brands to establish our portfolio of exceptional digital experiences."
    },
    {
      year: "Future",
      title: "Continued Excellence",
      description: "Ongoing commitment to pushing the boundaries of what's possible in luxury web design."
    }
  ];

  // About cards linking to subpages
  const aboutCards = [
    {
      title: "Our Mission",
      description: "Discover our guiding principles and why we're dedicated to elevating luxury brands through exceptional digital design.",
      icon: <Flag className="h-6 w-6 text-[#D4AF37]" />,
      href: "/about/mission",
      index: 0
    },
    {
      title: "Meet The Team",
      description: "Get to know the visionaries and craftsmen behind ELUX.DEV who bring precision and artistry to every project.",
      icon: <Users className="h-6 w-6 text-[#D4AF37]" />,
      href: "/about/team",
      index: 1
    },
    {
      title: "Get Started",
      description: "Learn about our process and take the first step towards transforming your digital presence with our expertise.",
      icon: <Compass className="h-6 w-6 text-[#D4AF37]" />,
      href: "/about/get-started",
      index: 2
    },
    {
      title: "FAQ",
      description: "Find answers to common questions about our approach, process, and what makes ELUX.DEV different.",
      icon: <Book className="h-6 w-6 text-[#D4AF37]" />,
      href: "/about/faq",
      index: 3
    }
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden -mt-24">
        {/* Hero Section */}
        <Section variant="pattern" className="py-28 md:py-36 pt-32 md:pt-40 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-extralight leading-tight mb-8">
              About <span className="text-[#D4AF37] font-light">Our Studio</span>
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-8"></div>
            <p className="font-inter font-light text-white/80 max-w-3xl mx-auto text-lg mb-8">
              Founded by brothers Yeshaya and Yitz Shapiro, ELUX.DEV was established in 2025 to address a critical gap in the digital landscape: truly exceptional websites for luxury brands.
            </p>
          </m.div>
        </Section>

        {/* Our Story Section */}
        <Section variant="dark" className="py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 md:mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-outfit font-extralight leading-tight mb-6 text-center">
                Our <span className="text-[#D4AF37] font-light">Origin Story</span>
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="font-inter font-light text-white/80 text-lg mb-6">
                  ELUX.DEV was born from a realization: while working with numerous clients through our sister brand yeshaya.dev, we noticed that most luxury companies were settling for digital mediocrity, with websites that failed to reflect their caliber of excellence.
                </p>
                <p className="font-inter font-light text-white/80 text-lg mb-6">
                  As avid admirers of refined aesthetics and technical precision, we found this disconnect between premium brands and their digital presence troubling. We envisioned a studio focused exclusively on creating elite digital experiences—websites where every pixel, interaction, and line of code is crafted with an unwavering commitment to perfection.
                </p>
                <p className="font-inter font-light text-white/80 text-lg">
                  This vision materialized in 2025 with the creation of ELUX.DEV, a boutique web design and development studio dedicated to serving luxury brands, high-net-worth individuals, and exclusive services with digital experiences as exceptional as they are.
                </p>
              </div>
            </m.div>

            {/* Timeline Section */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-20 md:mb-24"
            >
              <h3 className="text-2xl md:text-3xl font-outfit font-extralight leading-tight mb-12 text-center">
                Our <span className="text-[#D4AF37] font-light">Journey</span>
              </h3>
              
              <div className="relative px-4 md:px-8 lg:px-12">
                {/* Timeline line with improved positioning */}
                <div className="absolute left-4 right-4 md:left-8 md:right-8 lg:left-12 lg:right-12 top-8 h-0.5 bg-gradient-to-r from-[#0a0a0a] via-[#D4AF37]/30 to-[#0a0a0a]"></div>
                
                {/* Timeline wrapper with improved scrolling indicators */}
                <div className="relative">
                  {/* Left fade indicator */}
                  <div className="hidden md:block absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
                  
                  {/* Right fade indicator */}
                  <div className="hidden md:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
                  
                  {/* Timeline scrollable container */}
                  <div className="overflow-x-auto pb-10 md:pb-12 scrollbar-thin scrollbar-thumb-[#D4AF37]/20 scrollbar-track-transparent">
                    <div className="flex space-x-10 md:space-x-16 lg:space-x-20 min-w-max px-4 md:px-8">
                      {timelineItems.map((item, index) => (
                        <m.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          className="flex flex-col items-center w-56 md:w-64"
                        >
                          {/* Circle marker positioned directly on the line */}
                          <div className="relative mb-8">
                            <div className="w-5 h-5 rounded-full bg-[#D4AF37] z-10 relative translate-y-[24px]"></div>
                            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 absolute -top-2 -left-2 translate-y-[24px] animate-pulse"></div>
                          </div>
                          
                          {/* Content with better spacing */}
                          <span className="text-[#D4AF37] font-outfit font-medium mb-3">{item.year}</span>
                          <h4 className="text-white font-outfit text-lg mb-3 text-center">{item.title}</h4>
                          <p className="text-white/70 font-light text-sm text-center leading-relaxed">{item.description}</p>
                        </m.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Scroll hint - now visible on all screens */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-white/40 font-light italic">Swipe to see full timeline</p>
                </div>
              </div>
            </m.div>

            {/* Our Vision & Process */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <m.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/5 rounded-sm p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-sm bg-[#0c0c0c] border border-white/5 mr-4">
                    <Flag className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-outfit font-light">Our Vision</h3>
                </div>
                <p className="text-white/70 font-light mb-4">
                  We envision a web where luxury brands have digital presences that truly reflect their caliber—meticulously designed, flawlessly functional, and distinctly premium.
                </p>
                <p className="text-white/70 font-light">
                  Our aim is to bridge the divide between physical luxury and digital excellence, creating online experiences as refined and exceptional as the brands they represent.
                </p>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/5 rounded-sm p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-sm bg-[#0c0c0c] border border-white/5 mr-4">
                    <Briefcase className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-outfit font-light">Our Process</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">01.</span>
                    <p className="text-white/70 font-light">Deep discovery to understand your brand&apos;s essence and goals</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">02.</span>
                    <p className="text-white/70 font-light">Meticulous design that emphasizes elegance and sophistication</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">03.</span>
                    <p className="text-white/70 font-light">Precision development with flawless performance and interactions</p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">04.</span>
                    <p className="text-white/70 font-light">Comprehensive testing across devices and exclusive launch</p>
                  </li>
                </ul>
              </m.div>
            </div>

            {/* About Section Cards */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-20"
            >
              <h3 className="text-2xl md:text-3xl font-outfit font-extralight leading-tight mb-12 text-center">
                Explore <span className="text-[#D4AF37] font-light">ELUX.DEV</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aboutCards.map((card) => (
                  <Card
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                    href={card.href}
                    index={card.index}
                  />
                ))}
              </div>
            </m.div>

            {/* CTA Section */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-outfit font-extralight leading-tight mb-6">
                Ready to Elevate Your <span className="text-[#D4AF37] font-light">Digital Presence?</span>
              </h2>
              <p className="font-inter font-light text-white/80 max-w-2xl mx-auto mb-10">
                Let us transform your online experience into something as exceptional as your brand. 
                Our team is ready to create a website that truly reflects your caliber of excellence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button href="/about/get-started" variant="primary">
                  Start Your Project
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact Us
                </Button>
              </div>
            </m.div>
          </div>
        </Section>
      </div>
    </LazyMotion>
  );
} 