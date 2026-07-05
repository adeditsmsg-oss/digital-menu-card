"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedDishes from "@/components/FeaturedDishes";
import AboutStory from "@/components/AboutStory";
import DigitalMenu from "@/components/DigitalMenu";
import CafeMemories from "@/components/CafeMemories";
import ReputationManager from "@/components/ReputationManager";
import ReservationForm from "@/components/ReservationForm";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

export default function Home() {
  const [isDark, setIsDark] = useState(true); // Default is Night Mode (Black/Yellow)
  const [isBn, setIsBn] = useState(false);     // Default is English (70% + 30% mixed)

  // Sync dark class on the HTML tag
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // Schema Markup data
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": RESTAURANT_CONFIG.businessName,
    "image": "https://havelicafemi.com/images/haveli_exterior.jpg",
    "@id": "https://havelicafemi.com",
    "url": "https://havelicafemi.com",
    "telephone": RESTAURANT_CONFIG.phone,
    "priceRange": "$$",
    "menu": "https://havelicafemi.com/#menu",
    "servesCuisine": "Indian, Chinese, Cafe, Shawarma, Continental",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Midnapore Railway Station Road, Ashok Nagar, Dharma",
      "addressLocality": "Midnapore",
      "postalCode": "721101",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.4297376,
      "longitude": 87.3099231
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "23:00"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Haveli Cafe couple and family-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely! We offer a safe, cozy, and private atmosphere for couples and a comfortable, spacious environment for families."
        }
      },
      {
        "@type": "Question",
        "name": "What are the opening hours of Haveli Cafe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are open every day from 11:00 AM to 11:00 PM."
        }
      },
      {
        "@type": "Question",
        "name": "Is parking available near Haveli Cafe Midnapore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, street parking for two-wheelers and cars is available along the station road frontage."
        }
      }
    ]
  };

  return (
    <>
      {/* Injecting Structured Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Main Single Page Container */}
      <div className="flex flex-col min-h-screen text-foreground bg-background transition-colors duration-300">
        <Navbar isDark={isDark} setIsDark={setIsDark} isBn={isBn} setIsBn={setIsBn} />
        
        <main className="flex-grow">
          <Hero isBn={isBn} />
          <TrustBar isBn={isBn} />
          <FeaturedDishes isBn={isBn} />
          <AboutStory isBn={isBn} />
          <DigitalMenu isBn={isBn} />
          <CafeMemories isBn={isBn} />
          <ReputationManager isBn={isBn} />
          <ReservationForm isBn={isBn} />
          <FAQ isBn={isBn} />
          <ContactSection isBn={isBn} />
        </main>

        <Footer isBn={isBn} />
        <StickyCTA isBn={isBn} />
      </div>
    </>
  );
}
