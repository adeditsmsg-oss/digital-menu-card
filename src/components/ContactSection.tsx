"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Compass, Navigation } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

interface ContactProps {
  isBn: boolean;
}

export default function ContactSection({ isBn }: ContactProps) {
  const contactInfo = [
    {
      title: isBn ? "আমাদের ঠিকানা" : "Where to Find Us",
      desc: isBn ? RESTAURANT_CONFIG.addressBn : RESTAURANT_CONFIG.address,
      icon: <MapPin className="text-accent-gold" size={20} />,
      link: RESTAURANT_CONFIG.googleMapsDirectionsUrl,
      btnLabel: isBn ? "ম্যাপে দেখুন" : "Directions",
    },
    {
      title: isBn ? "ফোনে যোগাযোগ" : "Call for Bookings",
      desc: RESTAURANT_CONFIG.phoneDisplay,
      icon: <Phone className="text-accent-gold" size={20} />,
      link: `tel:${RESTAURANT_CONFIG.phone}`,
      btnLabel: isBn ? "কল করুন" : "Call Now",
    },
    {
      title: isBn ? "খোলার সময়" : "Opening Hours",
      desc: isBn ? RESTAURANT_CONFIG.openingHoursBn : RESTAURANT_CONFIG.openingHours,
      icon: <Clock className="text-accent-gold" size={20} />,
      link: null,
      btnLabel: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-card-bg border-t border-border-color transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-accent-gold">
            {isBn ? "ক্যাফের অবস্থান ও যোগাযোগ" : "Locate & Contact Us"}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {isBn ? "সহজেই চলে আসুন হাভেলি ক্যাফেতে" : "Visit Medinipur's Favorite Corner"}
          </h3>
          <p className="text-base text-foreground/70">
            {isBn ? (
              "মেদিনীপুর রেলওয়ে স্টেশন রোড ধরে অশোক নগর বা ধর্মা মোড়ের কাছেই আমাদের ক্যাফে। কোনো সাহায্য লাগলে সরাসরি ফোনে যোগাযোগ করুন।"
            ) : (
              "Conveniently located along Midnapore Railway Station Road in Ashok Nagar. Find detailed landmarks below."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Info Cards & Landmarks */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-background border border-border-color p-5 rounded-2xl flex items-start gap-4 hover:border-accent-gold/25 transition-all duration-200"
                >
                  <div className="p-2.5 rounded-xl bg-accent-gold/10 border border-accent-gold/15 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="space-y-2 text-left flex-grow">
                    <h4 className="font-extrabold text-foreground text-sm sm:text-base">
                      {info.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      {info.desc}
                    </p>
                    {info.link && (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-gold uppercase tracking-wider hover:text-accent-gold-hover"
                      >
                        <span>{info.btnLabel}</span>
                        <Navigation size={12} className="transform rotate-45" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Landmarks Highlight Box */}
            <div className="bg-background border border-border-color p-5 rounded-2xl text-left space-y-3">
              <h4 className="font-extrabold text-foreground text-sm sm:text-base flex items-center gap-2">
                <Compass className="text-accent-gold" size={16} />
                <span>{isBn ? "আশেপাশের ল্যান্ডমার্ক" : "Nearby Landmarks"}</span>
              </h4>
              <ul className="text-xs sm:text-sm text-foreground/80 space-y-2 pl-4 list-disc marker:text-accent-gold">
                <li>
                  {isBn ? "মেদিনীপুর রেলওয়ে স্টেশন থেকে মাত্র ৫ মিনিটের হাঁটা পথ।" : "Just a 5-minute walk from Midnapore Railway Station."}
                </li>
                <li>
                  {isBn ? "ধর্ম মোড় ও অশোক নগর পেট্রোল পাম্পের অত্যন্ত কাছে অবস্থিত।" : "Right near the Dharma Junction and Ashok Nagar Petrol Pump."}
                </li>
                <li>
                  {isBn ? "স্টেশন রোডে আমাদের ক্যাফের ঠিক সামনেই বাইক পার্কিং পাওয়া যাবে।" : "Two-wheeler street parking directly along the Station Road frontage."}
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Google Maps IFrame */}
          <div className="lg:col-span-7 rounded-[2rem] overflow-hidden border border-border-color shadow-sm min-h-[350px] lg:min-h-auto relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0963177651034!2d87.30734817600862!3d22.429737579802094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5b0c20709fcb%3A0xcfea9a5ab4638e10!2sHaveli+Cafe!5e0!3m2!1sen!2sin!4v1720194000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Haveli Cafe Google Map Location"
              className="absolute inset-0 w-full h-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
