"use client";

import React from "react";
import { motion } from "framer-motion";
import { LocationCard } from "@/components/ui/LocationCard";

interface Location {
  city: string;
  country: string;
  image: string;
  href: string;
}

interface LocationGroup {
  region: string;
  locations: Location[];
}

interface LocationsGridProps {
  locationData: LocationGroup[];
}

export const LocationsGrid = ({ locationData }: LocationsGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const regionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="bg-black pt-10 pb-32">
      <div className="container-wrapper">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-[#D4AF37]/5 blur-[150px] z-0 opacity-40" />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          {locationData.map((group) => (
            <motion.div
              key={group.region}
              variants={regionVariants}
              className="mb-20 last:mb-0"
            >
              <motion.div
                className="flex items-center mb-10"
                variants={regionVariants}
              >
                <div className="h-px w-12 bg-[#D4AF37]/50 mr-6" />
                <h2 className="font-outfit text-xl text-white font-light tracking-wider">
                  {group.region}
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {group.locations.map((location) => (
                  <motion.div
                    key={location.city}
                    variants={cardVariants}
                    className="h-full"
                  >
                    <LocationCard
                      country={location.country}
                      city={location.city}
                      image={location.image}
                      href={location.href}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="mt-24 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-[#D4AF37] font-outfit text-sm uppercase tracking-widest mb-4">
              Global Expertise, Local Touch
            </h3>
            <h4 className="text-white font-outfit text-2xl md:text-3xl font-light mb-6">
              Don&apos;t see your location? We serve clients worldwide
            </h4>
            <p className="text-white/70 mb-10">
              Our elite digital agency delivers exceptional luxury experiences to clients around the globe. Contact us to discover how we can bring our expertise to your region.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-[#D4AF37] hover:bg-[#BF9C30] text-black font-medium px-8 py-4 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 