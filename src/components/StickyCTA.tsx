"use client";

import React from "react";
import { Phone, MessageCircle, MapPin, CalendarRange } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

interface StickyCTAProps {
  isBn: boolean;
}

export default function StickyCTA({ isBn }: StickyCTAProps) {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${RESTAURANT_CONFIG.whatsappNumber}&text=${encodeURIComponent(
    isBn 
      ? "নমস্কার! আমি হাভেলি ক্যাফেতে টেবিল বুকিং বা কোনো খাবারের বিষয়ে ইনকোয়ারি করতে চাই।" 
      : "Hello! I would like to make an inquiry or book a table at Haveli Cafe."
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border-color shadow-2xl px-3 py-2.5 transition-all duration-300">
      <div className="grid grid-cols-4 gap-2 items-center">
        
        {/* Call Now */}
        <a
          href={`tel:${RESTAURANT_CONFIG.phone}`}
          className="flex flex-col items-center justify-center p-2 rounded-xl text-foreground hover:bg-foreground/5 transition-colors border border-border-color"
          title="Call Now"
        >
          <Phone size={18} className="text-accent-gold" />
          <span className="text-[10px] font-bold mt-1 tracking-wider uppercase font-sans">
            {isBn ? "কল করুন" : "Call"}
          </span>
        </a>

        {/* WhatsApp Chat */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors shadow-sm"
          title="Chat on WhatsApp"
        >
          <MessageCircle size={18} />
          <span className="text-[10px] font-bold mt-1 tracking-wider uppercase font-sans">
            {isBn ? "হোয়াটসঅ্যাপ" : "WhatsApp"}
          </span>
        </a>

        {/* Directions Map */}
        <a
          href={RESTAURANT_CONFIG.googleMapsDirectionsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center p-2 rounded-xl text-foreground hover:bg-foreground/5 transition-colors border border-border-color"
          title="Get Directions"
        >
          <MapPin size={18} className="text-accent-gold" />
          <span className="text-[10px] font-bold mt-1 tracking-wider uppercase font-sans">
            {isBn ? "ঠিকানা" : "Map"}
          </span>
        </a>

        {/* Reserve Table Anchor */}
        <a
          href="#reservation"
          className="flex flex-col items-center justify-center p-2 rounded-xl text-black bg-accent-gold hover:bg-accent-gold-hover transition-colors shadow-sm"
          title="Reserve Table"
        >
          <CalendarRange size={18} />
          <span className="text-[10px] font-bold mt-1 tracking-wider uppercase font-sans">
            {isBn ? "বুকিং" : "Reserve"}
          </span>
        </a>

      </div>
    </div>
  );
}
