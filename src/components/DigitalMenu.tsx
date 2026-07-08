"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Flame, Sparkles, BookOpen, X, ChevronLeft, ChevronRight } from "lucide-react";
import { MENU_ITEMS, MenuItem, getAssetUrl, MENU_SCANS } from "@/config/restaurant";

interface DigitalMenuProps {
  isBn: boolean;
}

export default function DigitalMenu({ isBn }: DigitalMenuProps) {
  const [activeTab, setActiveTab] = useState("All");
  const [isScannedMenuOpen, setIsScannedMenuOpen] = useState(false);
  const [scanPageIndex, setScanPageIndex] = useState(0);

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
          <div className="pt-2">
            <button
              onClick={() => {
                setScanPageIndex(0);
                setIsScannedMenuOpen(true);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-gold hover:bg-accent-gold/90 text-black text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <BookOpen size={16} />
              <span>{isBn ? "সম্পূর্ণ ফিজিক্যাল মেনু বুক দেখুন" : "View Full Physical Menu"}</span>
            </button>
          </div>
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

        {/* Fullscreen Scanned Menu Modal */}
        <AnimatePresence>
          {isScannedMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
              onClick={() => setIsScannedMenuOpen(false)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50 shadow-lg border border-white/10"
                onClick={() => setIsScannedMenuOpen(false)}
              >
                <X size={24} />
              </button>

              {/* Navigation Arrows for Large Screens */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setScanPageIndex(prev => Math.max(0, prev - 1));
                }}
                disabled={scanPageIndex === 0}
                className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center p-4 rounded-full bg-zinc-900/80 border border-zinc-800 text-white hover:bg-zinc-800 transition-all z-40 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setScanPageIndex(prev => Math.min(MENU_SCANS.length - 1, prev + 1));
                }}
                disabled={scanPageIndex === MENU_SCANS.length - 1}
                className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center p-4 rounded-full bg-zinc-900/80 border border-zinc-800 text-white hover:bg-zinc-800 transition-all z-40 disabled:opacity-20 disabled:cursor-not-allowed"
              >
                <ChevronRight size={24} />
              </button>

              {/* Main Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-2xl w-full flex flex-col items-center justify-center space-y-6"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Image Showcase */}
                <div className="relative w-full aspect-[3/4] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <img
                    key={scanPageIndex}
                    src={getAssetUrl(MENU_SCANS[scanPageIndex])}
                    alt={`Haveli Cafe Physical Menu Page ${scanPageIndex + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Pagination Controls at Bottom */}
                <div className="flex items-center justify-between w-full max-w-xs px-2">
                  <button
                    onClick={() => setScanPageIndex(prev => Math.max(0, prev - 1))}
                    disabled={scanPageIndex === 0}
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-white rounded-full hover:bg-zinc-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider"
                  >
                    {isBn ? "পূর্ববর্তী" : "Prev"}
                  </button>

                  <span className="text-white text-xs sm:text-sm font-bold tracking-widest font-mono bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800">
                    {isBn ? `পৃষ্ঠা ${scanPageIndex + 1} / ${MENU_SCANS.length}` : `PAGE ${scanPageIndex + 1} OF ${MENU_SCANS.length}`}
                  </span>

                  <button
                    onClick={() => setScanPageIndex(prev => Math.min(MENU_SCANS.length - 1, prev + 1))}
                    disabled={scanPageIndex === MENU_SCANS.length - 1}
                    className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-white rounded-full hover:bg-zinc-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-xs font-bold uppercase tracking-wider"
                  >
                    {isBn ? "পরবর্তী" : "Next"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
