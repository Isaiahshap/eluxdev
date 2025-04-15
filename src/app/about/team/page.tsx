"use client";

import React, { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

function TeamPage() {
  const [isClient, setIsClient] = useState(false);
  
  // Enable client-side animations only after component has mounted
  useEffect(() => {
    setIsClient(true);
    
    // Clean up function to help with performance
    return () => {
      setIsClient(false);
    };
  }, []);

  const teamMembers = [
    {
      name: "Yeshaya Shapiro",
      title: "Partner & Creative Director",
      description: "With extensive experience in luxury brand development and creative direction, Yeshaya co-founded ELUX.DEV to help luxury companies establish the online presence they deserve through sophisticated digital experiences.",
      image: "/images/yeshaya.webp",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        email: "yeshaya@elux.dev",
      },
    },
    {
      name: "Yitz Shapiro",
      title: "Partner & Technical Director",
      description: "Combining deep technical expertise with marketing and SEO knowledge, Yitz is passionate about making the web more aesthetic while ensuring ELUX.DEV's luxury websites perform flawlessly for clients worldwide.",
      image: "/images/yitz.webp",
      socialLinks: {
        linkedin: "https://linkedin.com/",
        email: "yitz@elux.dev",
      },
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden -mt-24">
        {/* Simplified background with fewer animation points and lower complexity */}
        <div className="fixed inset-0 z-[-1] -top-24 opacity-60">
          {isClient && (
            <>
              <m.div 
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 0.8,
                  left: ['85%', '25%', '85%'],
                  top: ['15%', '75%', '15%'],
                  transition: {
                    duration: 30,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }}
                className="absolute top-[15%] left-[85%] w-[45vh] h-[45vh] bg-white rounded-full filter blur-[100px]" 
                style={{ willChange: "opacity, left, top" }}
              />
              <m.div 
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 0.7,
                  right: ['75%', '25%', '75%'],
                  top: ['65%', '25%', '65%'],
                  transition: {
                    duration: 35,
                    ease: "linear",
                    repeat: Infinity,
                    repeatType: "loop"
                  }
                }}
                className="absolute top-[65%] right-[75%] w-[50vh] h-[50vh] bg-[#D4AF37] rounded-full filter blur-[120px]" 
                style={{ willChange: "opacity, right, top" }}
              />
            </>
          )}
        </div>

        <Section variant="pattern" className="py-28 md:py-36 relative z-10 pt-32 md:pt-40">
          <div className="max-w-5xl mx-auto text-center mb-20">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-extralight leading-tight mb-8">
                Meet the <span className="text-[#D4AF37] font-light">Team</span>
              </h1>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-8"></div>
              <p className="font-inter font-light text-white/80 max-w-2xl mx-auto text-lg mb-6">
                Brothers Yeshaya and Yitz Shapiro founded ELUX.DEV with over 10 years of combined coding, marketing, and SEO experience. We create <span className="italic">luxurious websites</span> for elite clients, making the web more aesthetic one project at a time.
              </p>
            </m.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <m.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2 + (index * 0.1)
                }}
                className="group h-full"
              >
                <div className="bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/5 rounded-sm overflow-hidden relative h-full flex flex-col shadow-xl">
                  
                  {/* Image container with optimized hover effect */}
                  <div className="relative overflow-hidden">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name} - ELUX.DEV Team Member`}
                        fill
                        className="object-cover scale-105 group-hover:scale-100"
                        style={{ 
                          transition: "transform 700ms ease-in-out",
                          willChange: "transform" 
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority={index < 2} // Load first two images with priority
                        loading={index < 2 ? "eager" : "lazy"} // Eager for first two
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/70 group-hover:opacity-70"
                        style={{ transition: "opacity 700ms" }}
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl md:text-3xl font-outfit font-light tracking-tight text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    <p className="text-[#D4AF37]/80 font-inter uppercase tracking-widest text-xs mt-2 mb-4">
                      {member.title}
                    </p>
                    
                    <p className="text-white/70 font-light text-sm sm:text-base mb-6 group-hover:text-white/80 transition-colors duration-300 flex-grow">
                      {member.description}
                    </p>
                    
                    {/* Social links */}
                    {member.socialLinks && (
                      <div className="flex space-x-6 mt-auto">
                        {member.socialLinks.linkedin && (
                          <Link href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect x="2" y="9" width="4" height="12"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                            <span className="ml-2 text-sm">LinkedIn</span>
                          </Link>
                        )}
                        
                        {member.socialLinks.email && (
                          <Link href={`mailto:${member.socialLinks.email}`} className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                              <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <span className="ml-2 text-sm">Email</span>
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </Section>

        <Section variant="dark" className="py-24 relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-outfit font-extralight leading-tight mb-8">
              Ready to Give Your Brand the <span className="text-[#D4AF37] font-light">Online Presence</span> It Deserves?
            </h2>
            <p className="font-inter font-light text-white/80 max-w-2xl mx-auto mb-10">
              We believe luxury companies deserve exceptional digital experiences. Let us help elevate your brand with a website that combines elegant aesthetics with technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button href="/contact" variant="primary">
                Start a Project
              </Button>
              <Button href="/about" variant="secondary">
                About Our Studio
              </Button>
            </div>
          </m.div>
        </Section>
      </div>
    </LazyMotion>
  );
}

export default TeamPage;