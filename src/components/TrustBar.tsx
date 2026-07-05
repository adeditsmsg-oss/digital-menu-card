"use client";

import React from "react";
import { Star, Award, Heart, ShieldCheck, MapPin, Coffee } from "lucide-react";

interface TrustBarProps {
  isBn: boolean;
}

export default function TrustBar({ isBn }: TrustBarProps) {
  const highlights = [
    { text: "4.8★ Rated on Restaurant Guru", textBn: "রেস্টুরেন্ট গুরু-তে ৪.৮★ রেটিং", icon: <Star className="text-accent-gold fill-accent-gold" size={16} /> },
    { text: "Midnapore Station Road", textBn: "মেদিনীপুর স্টেশন রোড", icon: <MapPin className="text-accent-gold" size={16} /> },
    { text: "Best Shawarma in Medinipur", textBn: "মেদিনীপুরের সেরা শাওয়ার্মা", icon: <Award className="text-accent-gold" size={16} /> },
    { text: "Couple & Student-Friendly Spot", textBn: "দম্পতি ও শিক্ষার্থীদের প্রিয় আড্ডা", icon: <Heart className="text-accent-gold fill-accent-gold" size={16} /> },
    { text: "100% Fresh & Authentic", textBn: "১০০% টাটকা ও আসল স্বাদ", icon: <ShieldCheck className="text-accent-gold" size={16} /> },
    { text: "Instagram-Worthy Interiors", textBn: "ইনস্টাগ্রাম-যোগ্য সুন্দর ডেকর", icon: <Coffee className="text-accent-gold" size={16} /> },
  ];

  // Duplicate the array to make the scrolling continuous
  const scrollItems = [...highlights, ...highlights, ...highlights];

  return (
    <div className="w-full bg-accent-gold py-3 sm:py-4 overflow-hidden border-y border-accent-gold-hover shadow-sm select-none">
      <div className="relative w-full flex items-center">
        {/* Left/Right masks for smooth fade in-out on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-accent-gold to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-accent-gold to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee whitespace-nowrap flex items-center">
          {scrollItems.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center mx-6 sm:mx-10 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-black gap-2 font-sans"
            >
              {item.icon}
              <span>{isBn ? item.textBn : item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
