"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, ChevronRight, Phone } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

interface HeroProps {
  isBn: boolean;
}

export default function Hero({ isBn }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-accent-gold/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 rounded-full bg-accent-gold/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-gold/10 border border-accent-gold/25 text-accent-gold text-xs sm:text-sm font-bold tracking-wide uppercase font-sans"
            >
              <Coffee size={14} className="animate-bounce" />
              <span>
                {isBn ? "মেদিনীপুরের প্রিয় খাবারের ঠেক" : "Medinipur's Ultimate Food & Adda Destination"}
              </span>
            </motion.div>

            {/* Main Header */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground"
            >
              {isBn ? (
                <>
                  স্বাদ আর আড্ডার অনন্য মেলবন্ধন, <br />
                  <span className="text-accent-gold font-sans">Haveli Cafe</span>-তে আসুন!
                </>
              ) : (
                <>
                  Enjoy Amazing Food <br />
                  & Premium Adda at <br />
                  <span className="text-accent-gold font-sans">Haveli Cafe</span>
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-foreground/80 max-w-2xl font-normal leading-relaxed"
            >
              {isBn ? (
                "মেদিনীপুর স্টেশন রোডের ঠিক পাশেই, আড্ডা জমানোর সেরা জায়গা। আমাদের স্পেশাল চিকেন শাওয়ার্মা র‍্যাপ, ক্রিস্পি ড্রামস অফ হেভেন আর এক কাপ গরম ফিল্টার কফি বা কোল্ড কফি—একবার খেলে আপনি বারবার আসতে বাধ্য! একদম ঘরোয়া এবং বন্ধুত্বপূর্ণ পরিবেশ।"
              ) : (
                "Located right near Midnapore Railway Station, Haveli Cafe brings you the perfect blend of cozy rustic ambiance, mouth-watering Shawarma wraps, crispy drums of heaven, and rich creamy cold coffee. It's not just a cafe, it's where college memories are made and families gather."
              )}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#menu"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-accent-gold hover:bg-accent-gold-hover text-black transition-all duration-300 shadow-lg hover:shadow-accent-gold/20 gap-2 group"
              >
                <span>{isBn ? "মেনু দেখুন" : "View Digital Menu"}</span>
                <ChevronRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#reservation"
                className="inline-flex justify-center items-center px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-transparent hover:bg-foreground/5 border-2 border-foreground/20 hover:border-foreground/45 text-foreground transition-all duration-300 gap-2"
              >
                <Phone size={16} />
                <span>{isBn ? "টেবিল বুকিং" : "Reserve Table"}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative w-[290px] h-[360px] sm:w-[350px] sm:h-[450px] rounded-[2rem] overflow-hidden border-4 border-accent-gold shadow-2xl group"
            >
              {/* Main Image (Mural photo) */}
              <img
                src="/images/haveli_interior_woman_mural.jpg"
                alt="Haveli Cafe Signature Mural"
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Overlay styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <p className="text-xs uppercase tracking-wider text-accent-gold font-bold">
                  {isBn ? "ইনস্টাগ্রাম-যোগ্য ছবি" : "Instagram-Worthy"}
                </p>
                <h3 className="text-lg font-bold">
                  {isBn ? "আমাদের সিগনেচার ওয়াল মিউরাল" : "Our Iconic Camera Wall Mural"}
                </h3>
              </div>
            </motion.div>

            {/* Floating Visual Badge Card (The milkshake/dessert) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 bg-card-bg border border-border-color p-3 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-[200px] sm:max-w-[220px]"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src="/images/haveli_milkshake.jpg"
                  alt="Haveli Milkshake"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-extrabold text-accent-gold uppercase tracking-wider">
                  {isBn ? "সেরা কাস্টমার চয়েস" : "Best Choice"}
                </p>
                <h4 className="text-xs sm:text-sm font-bold text-foreground line-clamp-1">
                  {isBn ? "ব্রাউনি কফি শেক" : "Brownie Coffee Shake"}
                </h4>
                <p className="text-xs font-semibold text-foreground/70">
                  {isBn ? "মাত্র ₹১৩০" : "Only ₹130"}
                </p>
              </div>
            </motion.div>

            {/* Floating Badge Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -top-6 -left-4 sm:-left-8 bg-card-bg border border-border-color px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-extrabold tracking-wider text-foreground uppercase">
                {isBn ? "খোলা আছে (১১টা - ১১টা)" : "Open Now (11 AM - 11 PM)"}
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
