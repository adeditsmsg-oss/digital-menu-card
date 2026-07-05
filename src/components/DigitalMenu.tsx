"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Flame, Sparkles } from "lucide-react";
import { MENU_ITEMS, MenuItem, getAssetUrl } from "@/config/restaurant";

interface DigitalMenuProps {
  isBn: boolean;
}

export default function DigitalMenu({ isBn }: DigitalMenuProps) {
  const [activeTab, setActiveTab] = useState("All");

  const categories = [
    { key: "All", label: "All Items", labelBn: "সব খাবার" },
    { key: "Starters", label: "Starters & Snacks", labelBn: "স্টার্টার্স" },
    { key: "Bengali Special", label: "Bengali Special", labelBn: "বাঙালি স্পেশাল" },
    { key: "Chinese", label: "Chinese", labelBn: "চাইনিজ" },
    { key: "Biryani", label: "Biryani", labelBn: "বিরিয়ানি" },
    { key: "Pizza & Burger", label: "Pizza & Burger", labelBn: "পিজ্জা ও বার্গার" },
    { key: "Drinks & Desserts", label: "Drinks & Desserts", labelBn: "ড্রিংকস ও ডেজার্ট" },
  ];

  const getFilteredItems = () => {
    if (activeTab === "All") return MENU_ITEMS;
    if (activeTab === "Pizza & Burger") {
      return MENU_ITEMS.filter(item => item.category === "Pizza" || item.category === "Burger");
    }
    if (activeTab === "Drinks & Desserts") {
      return MENU_ITEMS.filter(item => ["Coffee", "Tea", "Mocktails", "Milkshakes", "Desserts"].includes(item.category));
    }
    return MENU_ITEMS.filter(item => item.category === activeTab || (activeTab === "Starters" && item.category === "Rolls")); // Map rolls under starters/shawarma
  };

  const filteredItems = getFilteredItems();

  return (
    <section id="menu" className="py-20 bg-background border-t border-border-color transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-accent-gold">
            {isBn ? "আমাদের সম্পূর্ণ মেনু" : "Full Digital Menu"}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {isBn ? "মন মাতানো খাবারের তালিকা" : "Taste Our Premium Creations"}
          </h3>
          <p className="text-base text-foreground/70">
            {isBn ? (
              "নিচে আমাদের প্রতিটি ক্যাটাগরির খাবার এবং তাদের একদম আসল দাম দেওয়া হলো। আড্ডার মুড অনুযায়ী বেছে নিন আপনার পছন্দের খাবার!"
            ) : (
              "Explore our complete item listings and authentic pricing directly below. Cooked fresh by our specialty hospitality team."
            )}
          </p>
        </div>

        {/* Categories Tabs Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
                  isActive
                    ? "bg-accent-gold border-accent-gold text-black shadow-md"
                    : "bg-card-bg border-border-color text-foreground hover:border-accent-gold/40"
                }`}
              >
                {isBn ? cat.labelBn : cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative flex flex-col bg-card-bg border border-border-color rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-200">
                  <img
                    src={getAssetUrl(item.image)}
                    alt={item.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500"
                  />
                  
                  {/* Badges */}
                  {item.isBestSeller && (
                    <div className="absolute top-3 left-3 bg-yellow-500 text-black px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Sparkles size={10} className="fill-current" />
                      <span>{isBn ? "বেস্ট সেলার" : "Best Seller"}</span>
                    </div>
                  )}
                  {item.isPopular && !item.isBestSeller && (
                    <div className="absolute top-3 left-3 bg-accent-gold text-black px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Flame size={10} className="fill-current" />
                      <span>{isBn ? "জনপ্রিয়" : "Popular"}</span>
                    </div>
                  )}
                  {item.isHighestRated && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-accent-gold px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Star size={10} className="fill-accent-gold" />
                      <span>{isBn ? "টপ রেটেড" : "Top Rated"}</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex-grow flex flex-col justify-between space-y-3 text-left">
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-start gap-3">
                      <h4 className="font-extrabold text-foreground group-hover:text-accent-gold transition-colors text-base sm:text-lg line-clamp-1">
                        {isBn ? item.nameBn : item.name}
                      </h4>
                      <div className="text-right flex-shrink-0">
                        <span className="font-extrabold text-accent-gold font-sans text-base sm:text-lg">
                          ₹{item.price}
                        </span>
                        {item.priceDouble && (
                          <span className="text-[10px] text-foreground/50 block font-semibold">
                            {isBn ? `৮ পিস: ₹${item.priceDouble}` : `8 pcs: ₹${item.priceDouble}`}
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/80 line-clamp-2 leading-relaxed">
                      {isBn ? item.descriptionBn : item.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
