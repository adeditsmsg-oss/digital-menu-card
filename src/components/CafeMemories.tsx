"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, Heart, MessageSquare } from "lucide-react";

interface CafeMemoriesProps {
  isBn: boolean;
}

export default function CafeMemories({ isBn }: CafeMemoriesProps) {
  const [activeCategory, setActiveCategory] = useState("Ambiance");
  const [selectedImage, setSelectedImage] = useState<null | {
    src: string;
    title: string;
    titleBn: string;
    desc: string;
    descBn: string;
  }>(null);

  const galleryItems = [
    // AMBIANCE
    {
      src: "/images/haveli_exterior.jpg",
      category: "Ambiance",
      title: "Cafe Grand Entrance",
      titleBn: "হাভেলি ক্যাফে প্রবেশদ্বার",
      desc: "Our glowing signature yellow board welcoming you to अशोक Nagar, Midnapore.",
      descBn: "অশোক নগর, মেদিনীপুরে আপনাকে স্বাগত জানাচ্ছে আমাদের আকর্ষণীয় নিওন সাইনবোর্ড।",
    },
    {
      src: "/images/haveli_interior_grass.jpg",
      category: "Ambiance",
      title: "Cozy Dining Corner",
      titleBn: "আরামদায়ক বসার জায়গা",
      desc: "Warm spot lights and natural green backdrops perfect for group adda.",
      descBn: "উষ্ণ আলো আর সবুজ দেওয়াল ঘেরা বন্ধুদের সাথে জমিয়ে আড্ডা মারার উপযুক্ত স্থান।",
    },
    {
      src: "/images/haveli_interior_woman_mural.jpg",
      category: "Ambiance",
      title: "The Vintage Camera Mural",
      titleBn: "ভিন্টেজ ক্যামেরা ওয়াল মিউরাল",
      desc: "Hand-painted artistic wall mural that is the ultimate selfie background.",
      descBn: "হাতে আঁকা অসাধারণ ওয়াল পেইন্টিং, যা আমাদের ক্যাফের অন্যতম বড় আকর্ষণ।",
    },
    {
      src: "/images/haveli_interior_coffee_mural.jpg",
      category: "Ambiance",
      title: "Best Coffee Chalkboard Mural",
      titleBn: "বেস্ট কফি ওয়াল আর্ট",
      desc: "Celebrating our love for coffee with detailed retro chalk doodles.",
      descBn: "কফির প্রতি আমাদের ভালোবাসাকে ফুটিয়ে তোলা চমৎকার সব দেয়ালচিত্র।",
    },
    {
      src: "/images/haveli_interior_cat_mural.jpg",
      category: "Ambiance",
      title: "Iconic Cat Washroom Mural",
      titleBn: "চশমা পরিহিত বিড়াল দেয়ালচিত্র",
      desc: "Our unique wash basin wall featuring a cool cat with sunglasses mirrors.",
      descBn: "একটি আকর্ষণীয় বিড়ালের ছবির উপর চশমা আকারের আয়না দেওয়া ওয়াশ বেসিন কর্নার।",
    },
    {
      src: "/images/haveli_counter.jpg",
      category: "Ambiance",
      title: "The Coffee & Beverage Counter",
      titleBn: "হট ও কোল্ড ড্রিংকস কাউন্টার",
      desc: "Where our experienced baristas brew fresh filter coffee and milkshakes.",
      descBn: "যেখানে আমাদের অভিজ্ঞ কর্মীরা প্রতিদিন সেরা সব কফি ও মিল্কশেক প্রস্তুত করেন।",
    },
    {
      src: "/images/haveli_interior_shelves.jpg",
      category: "Ambiance",
      title: "Vintage Shelves Detail",
      titleBn: "শো-পিস কাঠের আলমারি",
      desc: "Two horse statues and 'HAVELI' lettering decor details.",
      descBn: "হাভেলি ক্যাফের আকর্ষণীয় শো-পিস, কাঠের তাকে রাখা দুটি ঘোড়ার প্রতিকৃতি।",
    },

    // DISHES
    {
      src: "/images/haveli_milkshake.jpg",
      category: "Dishes",
      title: "Brownie Coffee Shake",
      titleBn: "ব্রাউনি কফি শেক",
      desc: "Thick creamy chocolate drizzle milkshake served fresh.",
      descBn: "চকলেট ও কফিতে ভরপুর অত্যন্ত ক্রিমি ও সুস্বাদু আমাদের স্পেশাল মিল্কশেক।",
    },
    {
      src: "/images/haveli_shawarma_drink.jpg",
      category: "Dishes",
      title: "Shawarma & Red Cooler Combo",
      titleBn: "চিকেন শাওয়ার্মা ও রেড কুলার",
      desc: "Signature rolls served with our refreshing layered watermelon beverage.",
      descBn: "আমাদের সিগনেচার রোলের সাথে তরতাজা ও রঙিন তরমুজের মকটেল ড্রিংকস।",
    },
    {
      src: "/images/haveli_cheese_fries.jpg",
      category: "Dishes",
      title: "Cheese Loaded French Fries",
      titleBn: "চিজ লোডেড ফ্রেঞ্চ ফ্রাইজ",
      desc: "Crispy hot potatoes glazed with thick garlic cheese sauce.",
      descBn: "মুচমুচে গরম আলু ভাজা, উপর থেকে মাখানো ঘন গার্লিক চিজ সসের প্রলেপ।",
    },
    {
      src: "/images/haveli_mocktail_cucumber.jpg",
      category: "Dishes",
      title: "Haveli Fizz Mocktail",
      titleBn: "হাভেলি ফিজ মকটেল",
      desc: "A carbonated layering splash garnished with fresh cucumber slice.",
      descBn: "লেবু ও পুদিনার স্বাদে ভরা সোডা ওয়াটার, শসার স্লাইস দিয়ে সাজানো।",
    },
    {
      src: "/images/haveli_crispy_wings.jpg",
      category: "Dishes",
      title: "Crispy Batter Fried Chicken Wings",
      titleBn: "মুচমুচে ফ্রাইড চিকেন উইংস",
      desc: "Deep fried seasoned wings served with sweet chili sauce dip.",
      descBn: "মশলাদার ব্যাটার ফ্রাইড চিকেন উইংস, সুইট চিলি সসের সাথে গরম গরম পরিবেশিত।",
    },
    {
      src: "/images/haveli_noodles.jpg",
      category: "Dishes",
      title: "Wok-Tossed Chicken Hakka Noodles",
      titleBn: "চিকেন হাক্কা নুডলস",
      desc: "Thin egg noodles tossed with chicken shreds and crisp bell peppers.",
      descBn: "চিকেনের কুচি এবং তাজা সবজি দিয়ে টস করা স্পাইসি চাউমিন।",
    },
    {
      src: "/images/haveli_chicken_lollipop.jpg",
      category: "Dishes",
      title: "Drums of Heaven",
      titleBn: "ড্রামস অফ হেভেন",
      desc: "Golden-fried lollipops glazed in hot schezwan sauce.",
      descBn: "সোনালী করে ভাজা কড়াই ফ্রেস চিকেন ললিপপ, ঝাল সেজুয়ান সসে কোটেড।",
    },
    {
      src: "/images/haveli_hot_coffee_grass.jpg",
      category: "Dishes",
      title: "Traditional Filter Coffee",
      titleBn: "গরম ফিল্টার কফি",
      desc: "Freshly brewed hot filter coffee served on our cozy tables.",
      descBn: "আমাদের টেবিলে পরিবেশিত মেদিনীপুরের সেরা ফেনা যুক্ত ফিল্টার কফি।",
    },
    {
      src: "/images/haveli_top_coffee.jpg",
      category: "Dishes",
      title: "Rich Foam Coffee Detail",
      titleBn: "ক্রিমি কফি বাবল ক্লোজ-আপ",
      desc: "Freshly brewed espresso blend with golden frothy crema.",
      descBn: "সদ্য প্রস্তুত এসপ্রেসো কফির ওপর জমানো ক্রিমি সোনালী ফেনা।",
    },
    {
      src: "/images/haveli_chicken_manchurian.jpg",
      category: "Dishes",
      title: "Chilli Manchurian Chicken Platter",
      titleBn: "চিলি মাঞ্চুরিয়ান চিকেন",
      desc: "Spicy and tangy Chinese gravy chicken served with spoons.",
      descBn: "চীনা স্টাইলে তৈরি ঝাল ও টক গ্রেভি চিকেন যা আড্ডার জন্য অসাধারণ কম্বো।",
    },
    {
      src: "/images/haveli_fish_fingers.jpg",
      category: "Dishes",
      title: "Fish Finger & Ketchup Platter",
      titleBn: "মুচমুচে ফিশ ফিঙ্গার",
      desc: "Crumbed fish fingers served with red sweet tomato dip.",
      descBn: "বিস্কুটের গুঁড়োয় জড়িয়ে ডিপ ফ্রাই করা মাছের ফিঙ্গার, টমেটো সসের সাথে।",
    },
  ];

  const filteredItems = galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="memories" className="py-20 bg-card-bg border-t border-border-color transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-accent-gold">
            {isBn ? "ক্যাফে গ্যালারি ও স্মৃতি" : "Cafe Gallery & Memories"}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {isBn ? "আমাদের ক্যাফের কিছু সুন্দর মুহূর্ত" : "Capturing Haveli Memories"}
          </h3>
          <p className="text-base text-foreground/70">
            {isBn ? (
              "আমাদের ইন্টেরিয়র আর খাবারের আসল ছবিগুলো দেখুন। বন্ধুদের সাথে আড্ডা হোক বা সুস্বাদু কফি—এখানের প্রতিটা মুহূর্তই ম্যাজিকাল!"
            ) : (
              "Take a visual tour through our hand-painted murals, cozy grass-walled dining corners, and real freshly-prepared dishes."
            )}
          </p>
        </div>

        {/* Gallery Type Selector Toggle */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveCategory("Ambiance")}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
              activeCategory === "Ambiance"
                ? "bg-accent-gold border-accent-gold text-black shadow-md"
                : "bg-background border-border-color text-foreground hover:border-accent-gold/45"
            }`}
          >
            {isBn ? "ইন্টেরিয়র ও পরিবেশ" : "Cafe Ambiance"}
          </button>
          <button
            onClick={() => setActiveCategory("Dishes")}
            className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 border ${
              activeCategory === "Dishes"
                ? "bg-accent-gold border-accent-gold text-black shadow-md"
                : "bg-background border-border-color text-foreground hover:border-accent-gold/45"
            }`}
          >
            {isBn ? "সুস্বাদু খাবারসমূহ" : "Delightful Dishes"}
          </button>
        </div>

        {/* Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.src}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg border border-border-color bg-background"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-103 transition-transform duration-500"
                />
                
                {/* Hover Glass Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white text-left">
                  <div className="self-end p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <Maximize2 size={14} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-extrabold text-sm sm:text-base text-accent-gold">
                      {isBn ? item.titleBn : item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-zinc-200 line-clamp-1">
                      {isBn ? item.descBn : item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Fullscreen Lightbox Modal Popup */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#121210] border border-zinc-800 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Photo container */}
                <div className="lg:w-7/12 aspect-[4/3] lg:aspect-auto bg-black relative max-h-[500px]">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain lg:object-cover"
                  />
                </div>

                {/* Content description container */}
                <div className="p-6 sm:p-8 lg:w-5/12 text-left flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <span className="px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/25 text-accent-gold text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      {activeCategory === "Ambiance" ? (isBn ? "ক্যাফে ডেকর" : "Ambiance & Decor") : (isBn ? "খাবারের প্লেট" : "Food Platter")}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {isBn ? selectedImage.titleBn : selectedImage.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {isBn ? selectedImage.descBn : selectedImage.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-6 pt-4 border-t border-zinc-800 text-zinc-400 text-xs sm:text-sm">
                    <span className="flex items-center gap-1.5"><Heart size={16} className="text-rose-500 fill-rose-500" /> {isBn ? "২০৩টি লাইক" : "203 Likes"}</span>
                    <span className="flex items-center gap-1.5"><MessageSquare size={16} className="text-accent-gold" /> {isBn ? "১৮টি মন্তব্য" : "18 Comments"}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
