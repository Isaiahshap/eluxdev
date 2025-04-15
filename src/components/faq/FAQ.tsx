"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

type FAQItemProps = {
  question: string;
  answer: string;
  index: number;
};

type FAQProps = {
  items: FAQItemProps[];
  className?: string;
};

const FAQItem = ({ question, answer, index }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4 overflow-hidden"
    >
      <motion.div
        className={`p-5 rounded-sm cursor-pointer flex justify-between items-center transition-all duration-300 ${
          isOpen
            ? "bg-gradient-to-r from-[#D4AF37] via-[#F6E6CD] to-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20"
            : "bg-gradient-to-r from-[#D4AF37] via-[#F6E6CD] to-[#D4AF37] text-black hover:shadow-md hover:shadow-[#D4AF37]/10"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: isOpen ? 1 : 1.01 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="font-outfit font-medium text-lg md:text-xl tracking-tight pr-8">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
          className="text-black"
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              height: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
              opacity: { duration: 0.2 }
            }}
            className="overflow-hidden"
          >
            <div className="p-5 border-x border-b border-[#D4AF37]/20 bg-black/80 backdrop-blur-sm text-white/90 rounded-b-sm">
              <p className="font-light leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQ = ({ items, className = "" }: FAQProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="space-y-4">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ; 