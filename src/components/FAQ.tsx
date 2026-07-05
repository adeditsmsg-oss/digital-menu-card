"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/config/restaurant";

interface FAQProps {
  isBn: boolean;
}

export default function FAQ({ isBn }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background border-t border-border-color transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-accent-gold">
            {isBn ? "সাধারণ জিজ্ঞাসা" : "Frequently Asked Questions"}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {isBn ? "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী" : "Everything You Want to Know"}
          </h3>
          <p className="text-base text-foreground/70">
            {isBn ? (
              "আমাদের ক্যাফে ভিজিট করার আগে সাধারণ কিছু প্রশ্ন ও তাদের উত্তর নিচে দেখে নিতে পারেন।"
            ) : (
              "Quick answers to help plan your visit, dates, group dinners, and birthday celebrations."
            )}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-card-bg border border-border-color rounded-2xl overflow-hidden hover:border-accent-gold/20 transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle size={18} className="text-accent-gold flex-shrink-0" />
                    <span className="font-extrabold text-foreground text-sm sm:text-base pr-4">
                      {isBn ? faq.questionBn : faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-foreground/50 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "transform rotate-180 text-accent-gold" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-foreground/80 border-t border-border-color/40 leading-relaxed font-normal text-left pl-[38px]">
                        {isBn ? faq.answerBn : faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
