"use client";

import React, { useState } from "react";
import { Calendar, Users, Clock, Send, CheckCircle2 } from "lucide-react";
import { RESTAURANT_CONFIG, getAssetUrl } from "@/config/restaurant";

interface ReservationProps {
  isBn: boolean;
}

export default function ReservationForm({ isBn }: ReservationProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [requests, setRequests] = useState("");
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isWhatsappLoading, setIsWhatsappLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent, method: "local" | "whatsapp") => {
    e.preventDefault();

    if (method === "whatsapp") {
      setIsWhatsappLoading(true);
      const text = `*NEW TABLE RESERVATION*
---------------------------------
*Name:* ${name}
*Phone:* ${phone}
*Date:* ${date}
*Time:* ${time}
*Guests:* ${guests} Person(s)
*Special Request:* ${requests || "None"}`;

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${RESTAURANT_CONFIG.whatsappNumber}&text=${encodedText}`;
      
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
        setIsWhatsappLoading(false);
        setIsSubmitted(true);
      }, 800);
    } else {
      // Local lead capture
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setDate("");
    setTime("");
    setGuests("2");
    setRequests("");
    setIsSubmitted(false);
  };

  return (
    <section id="reservation" className="py-20 bg-card-bg border-t border-border-color transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-background border border-border-color rounded-[2.5rem] overflow-hidden shadow-lg">
          
          {/* Left Column: Visual Callout */}
          <div className="lg:col-span-5 relative aspect-square lg:aspect-auto lg:h-full min-h-[350px] bg-zinc-950 overflow-hidden">
            <img
              src={getAssetUrl("/images/haveli_shawarma_drink.jpg")}
              alt="Delicious Shawarma and Mocktail Combo"
              className="w-full h-full object-cover opacity-90"
            />
            {/* Dark glass overlay details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
            <div className="absolute bottom-10 left-8 right-8 text-white text-left space-y-3">
              <span className="px-3 py-1 rounded-full bg-accent-gold text-black text-[10px] font-extrabold uppercase tracking-widest">
                {isBn ? "ভিজিট করুন" : "Plan Your Visit"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                {isBn ? "টেবিল বুক করে চলে আসুন আমাদের ক্যাফেতে!" : "Reserve Your Table & Skip The Wait!"}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                {isBn ? (
                  "মেদিনীপুর স্টেশন রোডে প্রিয়জনের সাথে কাটান জমজমাট সন্ধ্যে। ছুটির দিনে টেবিল খালি পেতে আগে থেকেই হোয়াটসঅ্যাপ বা ইনকোয়ারি ফর্ম বুক করে রাখুন।"
                ) : (
                  "Dine-in with our cozy seating and unique murals. Secure your table in advance for birthdays, dates, or college reunions."
                )}
              </p>
            </div>
          </div>

          {/* Right Column: Reservation Interactive Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 text-left">
            {!isSubmitted ? (
              <form className="space-y-5" onSubmit={(e) => handleSubmit(e, "local")}>
                <div className="space-y-1">
                  <h4 className="text-2xl font-extrabold text-foreground tracking-tight">
                    {isBn ? "অনলাইন টেবিল বুকিং" : "Book A Table Online"}
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/70">
                    {isBn ? "নিচের ফর্মটি পূরণ করুন, আমরা আপনার আসন সুরক্ষিত রাখব।" : "Fill in details to book or request a custom setup."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1">
                    <label htmlFor="res-name" className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                      {isBn ? "আপনার নাম" : "Your Name"}
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Debashis Roy"
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-card-bg text-foreground text-sm focus:border-accent-gold focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label htmlFor="res-phone" className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                      {isBn ? "ফোন নম্বর" : "Phone Number"}
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-card-bg text-foreground text-sm focus:border-accent-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Date */}
                  <div className="space-y-1">
                    <label htmlFor="res-date" className="text-xs font-bold uppercase tracking-wider text-foreground/60 flex items-center gap-1">
                      <Calendar size={12} className="text-accent-gold" />
                      <span>{isBn ? "তারিখ" : "Date"}</span>
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-card-bg text-foreground text-sm focus:border-accent-gold focus:outline-none transition-colors font-sans"
                    />
                  </div>

                  {/* Time */}
                  <div className="space-y-1">
                    <label htmlFor="res-time" className="text-xs font-bold uppercase tracking-wider text-foreground/60 flex items-center gap-1">
                      <Clock size={12} className="text-accent-gold" />
                      <span>{isBn ? "সময়" : "Time"}</span>
                    </label>
                    <input
                      id="res-time"
                      type="time"
                      required
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-card-bg text-foreground text-sm focus:border-accent-gold focus:outline-none transition-colors font-sans"
                    />
                  </div>

                  {/* Guests */}
                  <div className="space-y-1">
                    <label htmlFor="res-guests" className="text-xs font-bold uppercase tracking-wider text-foreground/60 flex items-center gap-1">
                      <Users size={12} className="text-accent-gold" />
                      <span>{isBn ? "জনসংখ্যা" : "No of People"}</span>
                    </label>
                    <select
                      id="res-guests"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border-color bg-card-bg text-foreground text-sm focus:border-accent-gold focus:outline-none transition-colors font-sans"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="6">6 People</option>
                      <option value="8">8+ People</option>
                    </select>
                  </div>
                </div>

                {/* Special Request */}
                <div className="space-y-1">
                  <label htmlFor="res-requests" className="text-xs font-bold uppercase tracking-wider text-foreground/60">
                    {isBn ? "বিশেষ অনুরোধ (যেমন: জন্মদিন ডেকোরেশন, এয়ার কন্ডিশনার সাইড)" : "Special Requests (e.g. Birthday decor, Couple Corner)"}
                  </label>
                  <textarea
                    id="res-requests"
                    rows={2}
                    value={requests}
                    onChange={(e) => setRequests(e.target.value)}
                    placeholder={isBn ? "আজ আমাদের অ্যানিভার্সারি, একটি সুন্দর কাপল টেবিল সাজিয়ে দেবেন।" : "Decorate a small birthday table with balloons."}
                    className="w-full px-4 py-3 rounded-xl border border-border-color bg-card-bg text-foreground text-sm focus:border-accent-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Buttons (Split Local vs WhatsApp) */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-xs bg-foreground text-background hover:bg-foreground/90 transition-colors shadow-sm text-center"
                  >
                    {isBn ? "ইনকোয়ারি পাঠান" : "Submit Inquiry"}
                  </button>
                  <button
                    type="button"
                    onClick={(e) => handleSubmit(e, "whatsapp")}
                    disabled={isWhatsappLoading}
                    className="flex-1 py-3.5 px-6 rounded-xl font-bold uppercase tracking-wider text-xs bg-[#25D366] text-white hover:bg-[#20ba59] disabled:bg-zinc-400 transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    {isWhatsappLoading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={14} />
                    )}
                    <span>{isBn ? "হোয়াটসঅ্যাপে বুক করুন" : "Book via WhatsApp"}</span>
                  </button>
                </div>
              </form>
            ) : (
              // Booking Success State
              <div className="text-center py-16 space-y-6">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h4 className="text-2xl font-extrabold text-foreground">
                    {isBn ? "বুকিং অনুরোধ সফল হয়েছে!" : "Reservation Request Sent!"}
                  </h4>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal">
                    {isBn ? (
                      "ধন্যবাদ! আপনার টেবিল বুকিংয়ের অনুরোধটি রেকর্ড করা হয়েছে। টেবিল কনফার্ম করতে আমাদের ম্যানেজার কিছুক্ষণের মধ্যে আপনার সাথে ফোনে যোগাযোগ করবেন।"
                    ) : (
                      "Thank you for choosing Haveli Cafe. Our staff will review your request and contact you via phone or WhatsApp to confirm your table shortly."
                    )}
                  </p>
                </div>
                <div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-gold hover:bg-accent-gold-hover text-black transition-colors"
                  >
                    {isBn ? "নতুন বুকিং করুন" : "Book Another Table"}
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
