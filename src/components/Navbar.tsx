"use client";

import React, { useState } from "react";
import { Moon, Sun, Globe, Menu, X, ArrowRight } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

interface NavbarProps {
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  isBn: boolean;
  setIsBn: (bn: boolean) => void;
}

export default function Navbar({ isDark, setIsDark, isBn, setIsBn }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Full Menu", nameBn: "মেনু তালিকা", href: "#menu" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-glass-bg backdrop-blur-md border-b border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex flex-col justify-center">
            <a href="#" className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-accent-gold uppercase font-sans">
                {RESTAURANT_CONFIG.businessName}
              </span>
              <span className="text-xs font-semibold text-foreground/75 tracking-widest mt-[-2px]">
                {isBn ? "হাভেলি ক্যাফে মেদিনীপুর" : "Medinipur's Own Adda"}
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-accent-gold transition-colors duration-200"
              >
                {isBn ? link.nameBn : link.name}
              </a>
            ))}
          </div>

          {/* Controls & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <button
              onClick={() => setIsBn(!isBn)}
              className="p-2 rounded-full hover:bg-foreground/5 text-foreground/80 hover:text-accent-gold transition-all duration-200 flex items-center gap-1.5"
              aria-label="Toggle language"
              title="Toggle English / Bengali"
            >
              <Globe size={18} />
              <span className="text-xs font-bold font-sans uppercase">
                {isBn ? "EN" : "বাং"}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-foreground/5 text-foreground/80 hover:text-accent-gold transition-all duration-200"
              aria-label="Toggle theme"
              title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* View Menu CTA */}
            <a
              href="#menu"
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-gold hover:bg-accent-gold-hover text-black transition-all duration-300 shadow-md hover:shadow-accent-gold/20 flex items-center gap-1.5"
            >
              <span>{isBn ? "মেনু দেখুন" : "View Menu"}</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Quick Lang Switch */}
            <button
              onClick={() => setIsBn(!isBn)}
              className="p-1.5 rounded-full text-foreground/80 hover:text-accent-gold"
            >
              <Globe size={18} />
            </button>

            {/* Quick Dark Switch */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-1.5 rounded-full text-foreground/80 hover:text-accent-gold"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:text-accent-gold hover:bg-foreground/5 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border-color transition-all duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-semibold text-foreground/90 hover:text-accent-gold transition-colors"
              >
                {isBn ? link.nameBn : link.name}
              </a>
            ))}
            <div className="pt-4 pb-2 px-4">
              <a
                href="#menu"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex justify-center items-center px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider bg-accent-gold hover:bg-accent-gold-hover text-black transition-all duration-300 shadow-md"
              >
                <span>{isBn ? "মেনু দেখুন" : "View Menu"}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
