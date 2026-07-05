"use client";

import React from "react";
import { Heart, Coffee } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

interface FooterProps {
  isBn: boolean;
}

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer({ isBn }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0c0b] border-t border-zinc-800 text-zinc-400 py-16 transition-colors duration-300 pb-24 md:pb-16 select-none text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="space-y-2">
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-accent-gold uppercase font-sans block">
                {RESTAURANT_CONFIG.businessName}
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-zinc-500 uppercase tracking-widest block">
                {isBn ? "মেদিনীপুরের প্রিমিয়াম ক্যাফে" : "Premium Cafe & Restaurant"}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              {isBn ? (
                "মেদিনীপুর স্টেশন রোডের কাছে সেরা খাবারের আড্ডা। মন ভালো করা স্বাদ আর ঘরোয়া বন্ধুত্বপূর্ণ পরিবেশ নিয়ে আমরা তৈরি প্রতিদিন।"
              ) : (
                "Medinipur's favorite spot for fresh chicken shawarmas, creamy cold coffee, and endless college addas. Enjoy cozy dining every single day."
              )}
            </p>
            {/* Social Media Link Icons */}
            <div className="flex space-x-3">
              <a
                href={RESTAURANT_CONFIG.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-accent-gold/40 text-zinc-400 hover:text-accent-gold transition-colors"
                title="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href={RESTAURANT_CONFIG.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-accent-gold/40 text-zinc-400 hover:text-accent-gold transition-colors"
                title="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links Navigation */}
          <div className="lg:col-span-3 lg:pl-10 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white">
              {isBn ? "কুইক লিঙ্ক" : "Explore Links"}
            </h4>
            <ul className="text-xs sm:text-sm space-y-2">
              <li>
                <a href="#story" className="hover:text-accent-gold transition-colors">
                  {isBn ? "আমাদের গল্প" : "Our Story"}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-accent-gold transition-colors">
                  {isBn ? "মেনুর তালিকা" : "Digital Menu"}
                </a>
              </li>
              <li>
                <a href="#reputation" className="hover:text-accent-gold transition-colors">
                  {isBn ? "রেটিং ও রিভিউ" : "Google Reviews"}
                </a>
              </li>
              <li>
                <a href="#memories" className="hover:text-accent-gold transition-colors">
                  {isBn ? "গ্যালারি ও স্মৃতি" : "Cafe Gallery"}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent-gold transition-colors">
                  {isBn ? "জিজ্ঞাসিত প্রশ্ন" : "FAQs Info"}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-white">
              {isBn ? "যোগাযোগ করুন" : "Get In Touch"}
            </h4>
            <div className="text-xs sm:text-sm space-y-3">
              <p className="leading-relaxed">
                <strong className="text-zinc-300 block mb-1">
                  {isBn ? "ঠিকানা:" : "Address:"}
                </strong>
                {isBn ? RESTAURANT_CONFIG.addressBn : RESTAURANT_CONFIG.address}
              </p>
              <p>
                <strong className="text-zinc-300 block mb-0.5">
                  {isBn ? "ফোন নম্বর:" : "Phone Booking:"}
                </strong>
                <a href={`tel:${RESTAURANT_CONFIG.phone}`} className="hover:text-accent-gold transition-colors">
                  {RESTAURANT_CONFIG.phoneDisplay}
                </a>
              </p>
              <p>
                <strong className="text-zinc-300 block mb-0.5">
                  {isBn ? "খোলার সময়:" : "Business Hours:"}
                </strong>
                {isBn ? RESTAURANT_CONFIG.openingHoursBn : RESTAURANT_CONFIG.openingHours}
              </p>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="text-center sm:text-left space-y-1">
            <p>
              &copy; {currentYear} {RESTAURANT_CONFIG.businessName}. {isBn ? "সর্বস্বত্ব সংরক্ষিত।" : "All Rights Reserved."}
            </p>
            <p className="text-[10px] text-zinc-600">
              {isBn ? "ডিজাইন ও ডেভেলপমেন্ট করেছে প্রিমিয়াম ব্র্যান্ডিং এজেন্সি" : "Designed & Developed by Premium Branding Agency."}
            </p>
          </div>
          
          <div className="inline-flex items-center gap-1.5 text-zinc-500 font-sans tracking-wide">
            <span>{isBn ? "ভালোবাসার সাথে মেদিনীপুরে তৈরি" : "Made with"}</span>
            <Heart size={12} className="text-rose-600 fill-rose-600 animate-pulse" />
            <span>{isBn ? "" : "for Midnapore"}</span>
            <Coffee size={12} className="text-accent-gold" />
          </div>
        </div>

      </div>
    </footer>
  );
}
