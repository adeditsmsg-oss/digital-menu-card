"use client";

import React, { useState, useEffect } from "react";
import { Star, MessageSquare, Send, ThumbsUp, ArrowRight, ExternalLink } from "lucide-react";
import { RESTAURANT_CONFIG, REVIEWS } from "@/config/restaurant";
import { motion, AnimatePresence } from "framer-motion";

interface ReputationProps {
  isBn: boolean;
}

export default function ReputationManager({ isBn }: ReputationProps) {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  
  // Feedback Form State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [issue, setIssue] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    if (selectedRating >= 4) {
      // Automatic redirection to Google Review page
      setSubmitted(true);
      setTimeout(() => {
        window.open(RESTAURANT_CONFIG.googleReviewUrl, "_blank");
      }, 1500);
    } else {
      // Open feedback form
      setSubmitted(false);
    }
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the feedback text for WhatsApp message
    const formattedMessage = `*FEEDBACK FOR HAVELI CAFE*
---------------------------------
*Customer Name:* ${name}
*Phone Number:* ${phone}
*Rating Given:* ${rating} Star(s) ⭐
*Specific Issue:* ${issue}
*Suggestion:* ${suggestion}`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${RESTAURANT_CONFIG.whatsappNumber}&text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  const resetForm = () => {
    setRating(0);
    setSubmitted(false);
    setName("");
    setPhone("");
    setIssue("");
    setSuggestion("");
  };

  return (
    <section id="reputation" className="py-20 bg-background border-t border-border-color transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-accent-gold">
            {isBn ? "রিভিউ এবং মতামত" : "Google Reviews & Reputation"}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {isBn ? "কাস্টমারদের চোখে হাভেলি ক্যাফে" : "What Our Guests Say About Us"}
          </h3>
          <p className="text-base text-foreground/70">
            {isBn ? (
              "আমাদের আড্ডা আর খাবার কেমন লাগলো? আপনার মূল্যবান রিভিউ দিন, অথবা মেদিনীপুরের প্রিয় ক্যাফেতে কাটানো সুন্দর অভিজ্ঞতা শেয়ার করুন।"
            ) : (
              "Rated 4.8★ by hundreds of happy foodies in Midnapore. Your feedback helps us serve you better every day."
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Reputation Management Form */}
          <div className="lg:col-span-5 bg-card-bg border border-border-color p-6 sm:p-8 rounded-3xl shadow-sm text-left">
            <h4 className="text-xl font-extrabold text-foreground mb-2 flex items-center gap-2">
              <MessageSquare className="text-accent-gold" size={20} />
              <span>{isBn ? "আমাদের রেটিং দিন" : "Rate Your Experience"}</span>
            </h4>
            <p className="text-xs sm:text-sm text-foreground/75 mb-6">
              {isBn ? (
                "আপনার হাভেলি ক্যাফের ভিজিট কেমন ছিল? আপনার পছন্দের তারকা চিহ্নে ক্লিক করুন।"
              ) : (
                "How was your recent visit to Haveli Cafe? Select a star rating below to share."
              )}
            </p>

            {/* Reputation Trigger Widget */}
            {!submitted ? (
              <div className="space-y-6">
                {/* Stars Grid Selector */}
                <div className="flex items-center gap-3 justify-center py-4 bg-background/50 rounded-2xl border border-border-color">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleStarClick(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transition-all duration-150 hover:scale-110 focus:outline-none"
                    >
                      <Star
                        size={36}
                        className={`transition-all duration-150 ${
                          star <= (hoverRating || rating)
                            ? "fill-accent-gold text-accent-gold"
                            : "text-foreground/20"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Conditional Form: Rating is 1, 2 or 3 */}
                {rating > 0 && rating <= 3 && (
                  <motion.form
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    onSubmit={handleFeedbackSubmit}
                    className="space-y-4 pt-4 border-t border-border-color"
                  >
                    <p className="text-xs font-bold text-red-500">
                      {isBn ? "দুঃখিত যে আপনার ভালো লাগেনি। আমাদের জানান কীভাবে আমরা আরও ভালো করতে পারি:" : "We're sorry to hear that. Help us improve by submitting details directly to the manager:"}
                    </p>
                    
                    <div className="space-y-1">
                      <label htmlFor="rep-name" className="text-xs font-bold uppercase tracking-wider text-foreground/70">
                        {isBn ? "আপনার নাম" : "Your Name"}
                      </label>
                      <input
                        id="rep-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Arijit Dutta"
                        className="w-full px-4 py-3 rounded-xl border border-border-color bg-background text-foreground text-sm focus:border-accent-gold focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="rep-phone" className="text-xs font-bold uppercase tracking-wider text-foreground/70">
                        {isBn ? "ফোন নম্বর (হোয়াটসঅ্যাপ)" : "Phone Number (WhatsApp)"}
                      </label>
                      <input
                        id="rep-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-border-color bg-background text-foreground text-sm focus:border-accent-gold focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="rep-issue" className="text-xs font-bold uppercase tracking-wider text-foreground/70">
                        {isBn ? "কী সমস্যা হয়েছিল?" : "What was the issue?"}
                      </label>
                      <textarea
                        id="rep-issue"
                        rows={2}
                        required
                        value={issue}
                        onChange={(e) => setIssue(e.target.value)}
                        placeholder={isBn ? "সার্ভিস ধীর ছিল / খাবারের মান ভালো লাগেনি" : "Slow service / food taste / table seating"}
                        className="w-full px-4 py-3 rounded-xl border border-border-color bg-background text-foreground text-sm focus:border-accent-gold focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="rep-suggest" className="text-xs font-bold uppercase tracking-wider text-foreground/70">
                        {isBn ? "আপনার কোনো পরামর্শ?" : "Any suggestion?"}
                      </label>
                      <textarea
                        id="rep-suggest"
                        rows={2}
                        value={suggestion}
                        onChange={(e) => setSuggestion(e.target.value)}
                        placeholder={isBn ? "উইকএন্ডে স্টাফ সংখ্যা বাড়ানো উচিত" : "Add more staff during weekends"}
                        className="w-full px-4 py-3 rounded-xl border border-border-color bg-background text-foreground text-sm focus:border-accent-gold focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-accent-gold text-black hover:bg-accent-gold-hover transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      <span>{isBn ? "হোয়াটসঅ্যাপে পাঠান" : "Submit Feedback via WhatsApp"}</span>
                    </button>
                  </motion.form>
                )}
              </div>
            ) : (
              // Submitted Screen Display
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-accent-gold/15 flex items-center justify-center mx-auto border border-accent-gold/30">
                  <ThumbsUp className="text-accent-gold" size={28} />
                </div>
                <div className="space-y-2">
                  <h5 className="text-xl font-extrabold text-foreground">
                    {rating >= 4 ? (isBn ? "ধন্যবাদ! গুগল পেজে রিডাইরেক্ট হচ্ছে..." : "Thank you! Redirecting...") : (isBn ? "মতামতের জন্য ধন্যবাদ!" : "Feedback Sent Successfully!")}
                  </h5>
                  <p className="text-xs sm:text-sm text-foreground/80 leading-normal">
                    {rating >= 4 
                      ? (isBn ? "গুগলে ফাইভ স্টার রেটিং দিয়ে আমাদের সাহায্য করার জন্য ধন্যবাদ!" : "You will be redirected to our Google Review page to submit your rating. We appreciate your support!")
                      : (isBn ? "আপনার সমস্যাটি সরাসরি আমাদের ম্যানেজারের কাছে হোয়াটসঅ্যাপে পাঠানো হয়েছে। আমরা শীঘ্র সমাধান করব।" : "Your suggestions have been formatted and sent directly to the cafe owner. We are sorry for any inconvenience.")}
                  </p>
                </div>
                {rating >= 4 && (
                  <button
                    onClick={() => window.open(RESTAURANT_CONFIG.googleReviewUrl, "_blank")}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-accent-gold hover:bg-accent-gold-hover text-black shadow-md"
                  >
                    <span>{isBn ? "এখনই রেট দিন" : "Redirect Manually"}</span>
                    <ExternalLink size={14} />
                  </button>
                )}
                <div>
                  <button
                    onClick={resetForm}
                    className="text-xs font-bold uppercase tracking-wider text-accent-gold border-b border-dashed border-accent-gold"
                  >
                    {isBn ? "আবার রিভিউ দিন" : "Submit Another Review"}
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Google Reviews Feed List */}
          <div className="lg:col-span-7 space-y-4">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-card-bg border border-border-color p-5 rounded-2xl text-left space-y-3 hover:border-accent-gold/20 transition-all duration-200"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="font-extrabold text-foreground text-sm sm:text-base">
                      {rev.author}
                    </h5>
                    <span className="text-[10px] sm:text-xs text-foreground/50">
                      {rev.date} via {rev.source}
                    </span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={12}
                        className={s <= rev.rating ? "fill-accent-gold text-accent-gold" : "text-foreground/10"}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal italic">
                  "{isBn ? rev.textBn : rev.text}"
                </p>
              </div>
            ))}

            <div className="pt-2 text-center">
              <a
                href={RESTAURANT_CONFIG.googleReviewUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-accent-gold border-b-2 border-accent-gold pb-0.5 hover:text-accent-gold-hover hover:border-accent-gold-hover transition-colors"
              >
                <span>{isBn ? "গুগলে সব রিভিউ পড়ুন" : "Read All Google Reviews"}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
