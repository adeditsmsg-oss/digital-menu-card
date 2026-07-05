"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Sparkles, ShieldCheck, Heart } from "lucide-react";

interface AboutStoryProps {
  isBn: boolean;
}

export default function AboutStory({ isBn }: AboutStoryProps) {
  const points = [
    {
      title: isBn ? "পকেট-ফ্রেন্ডলি প্রিমিয়াম ফিল" : "Premium yet Pocket-Friendly",
      titleBn: "পকেট-ফ্রেন্ডলি প্রিমিয়াম ফিল",
      desc: isBn ? "কম খরচে শহরের সেরা ক্যাফে এক্সপেরিয়েন্স। প্রতিটি খাবারের দাম আপনার হাতের নাগালে।" : "Enjoy high-end hospitality, rich ingredients, and gorgeous plating without breaking your budget.",
      icon: <Sparkles className="text-accent-gold" size={24} />,
    },
    {
      title: isBn ? "ইনস্টাগ্রাম-যোগ্য সুন্দর দেওয়াল" : "Instagram-Worthy Murals",
      titleBn: "ইনস্টাগ্রাম-যোগ্য সুন্দর দেওয়াল",
      desc: isBn ? "আমাদের ভিন্টেজ ক্যামেরা আর স্পেশাল কফি কাপের আর্ট ওয়াল সেলফি তোলার জন্য একদম পারফেক্ট!" : "Our hand-painted camera girl and retro coffee doodles offer the ultimate backdrop for your photos.",
      icon: <Compass className="text-accent-gold" size={24} />,
    },
    {
      title: isBn ? "নিরাপদ ও ঘরোয়া পরিবেশ" : "Cozy, Safe & Welcoming Vibe",
      titleBn: "নিরাপদ ও ঘরোয়া পরিবেশ",
      desc: isBn ? "দম্পতিদের ডেট, বন্ধুদের আড্ডা বা পরিবারের গেট-টুগেদার—সবার জন্য সম্পূর্ণ নিরাপদ ও রিল্যাক্সড পরিবেশ।" : "A warm, couple-friendly, and family-safe environment with pleasant music and comfortable seating.",
      icon: <ShieldCheck className="text-accent-gold" size={24} />,
    },
  ];

  return (
    <section id="story" className="py-20 bg-card-bg border-t border-border-color transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Images Grid */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4">
            {/* Main large image (Grass backdrop interior) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-12 rounded-3xl overflow-hidden aspect-[4/3] shadow-lg border border-border-color"
            >
              <img
                src="/images/haveli_interior_grass.jpg"
                alt="Haveli Cafe Greenery Cozy Corner"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Smaller image left (Counter) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="col-span-6 rounded-2xl overflow-hidden aspect-square shadow-md border border-border-color"
            >
              <img
                src="/images/haveli_counter.jpg"
                alt="Haveli Cafe Drinks Counter"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Smaller image right (Shelves) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-6 rounded-2xl overflow-hidden aspect-square shadow-md border border-border-color"
            >
              <img
                src="/images/haveli_interior_shelves.jpg"
                alt="Haveli Cafe Wooden Shelves"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right Side: Text & Features */}
          <div className="lg:col-span-7 text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-accent-gold">
                {isBn ? "আমাদের সম্পর্কে জানুন" : "About Haveli Cafe"}
              </h2>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                {isBn ? "মেদিনীপুরের মন জয় করা স্বাদ আর ভালোবাসার গল্প" : "Our Story – Crafting Delicious Moments in Midnapore"}
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                {isBn ? (
                  "আমাদের শুরুটা হয়েছিল একটা সাধারণ স্বপ্ন নিয়ে—মেদিনীপুরের বুকে এমন একটা সুন্দর ক্যাফে তৈরি করা, যেখানে খুব সাধারণ দামে প্রিমিয়াম কোয়ালিটির কফি আর ফাস্টফুড পাওয়া যাবে। মেদিনীপুর কলেজ বা বিদ্যাসাগর ইউনিভার্সিটির বন্ধুদের কলেজ আড্ডা হোক কিংবা পরিবারের সাথে একটু রিল্যাক্সড ডিনার—হাভেলি ক্যাফে আজ সবার জন্য সবচেয়ে বিশ্বস্ত ঠিকানা। আমাদের প্রতিটি কর্নার ইনস্টাগ্রাম-বান্ধব এবং প্রতিটি খাবার ভালোবাসায় মোড়ানো।"
                ) : (
                  "We started with a simple vision: to offer Midnapore a beautiful space where locals can experience premium-quality cafe dining without premium price tags. Whether it is a quick coffee adda for university students, a casual family dinner, or a cozy couple date, Haveli Cafe has grown into Medinipur's favorite neighborhood retreat. Every corner is handcrafted, and every dish is seasoned with love."
                )}
              </p>
            </div>

            {/* Why Choose Us Features */}
            <div className="space-y-6 pt-2">
              <h4 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Heart className="text-accent-gold fill-accent-gold" size={18} />
                <span>{isBn ? "কেন আপনি হাভেলি ক্যাফে পছন্দ করবেন?" : "Why Choose Us?"}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {points.map((pt, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="p-2.5 rounded-2xl bg-accent-gold/10 border border-accent-gold/15 flex-shrink-0">
                      {pt.icon}
                    </div>
                    <div className="space-y-1 text-left">
                      <h5 className="font-bold text-foreground text-sm sm:text-base">
                        {isBn ? pt.titleBn : pt.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-foreground/75 leading-normal">
                        {isBn ? pt.desc : pt.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
