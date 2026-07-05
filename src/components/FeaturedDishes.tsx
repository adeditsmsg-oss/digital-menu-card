"use client";

import { motion as framerMotion } from "framer-motion";
import { Star, Flame, Sparkles, Heart } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/config/restaurant";

interface FeaturedDishesProps {
  isBn: boolean;
}

export default function FeaturedDishes({ isBn }: FeaturedDishesProps) {
  // Extract 4 signature items for featured display
  const featuredIds = ["sh1", "s7", "s2", "m1"];
  const dishes = MENU_ITEMS.filter((item) => featuredIds.includes(item.id));

  const getBadge = (id: string, isBn: boolean) => {
    switch (id) {
      case "sh1":
        return {
          text: isBn ? "সবচেয়ে বেশি অর্ডার" : "Most Ordered",
          icon: <Flame size={12} className="fill-current text-orange-500" />,
          color: "bg-orange-500/10 text-orange-500 border-orange-500/25",
        };
      case "s7":
        return {
          text: isBn ? "বেস্ট সেলার" : "Best Seller",
          icon: <Sparkles size={12} className="text-yellow-500" />,
          color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/25",
        };
      case "s2":
        return {
          text: isBn ? "সবার প্রিয়" : "Customer Favorite",
          icon: <Heart size={12} className="fill-current text-rose-500" />,
          color: "bg-rose-500/10 text-rose-500 border-rose-500/25",
        };
      default:
        return {
          text: isBn ? "সেরা রেটিং" : "Highest Rated",
          icon: <Star size={12} className="fill-current text-amber-500" />,
          color: "bg-amber-500/10 text-amber-500 border-amber-500/25",
        };
    }
  };

  return (
    <section id="featured" className="py-20 bg-background border-t border-border-color transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-accent-gold">
            {isBn ? "ক্যাফের সিগনেচার আইটেম" : "Top Picks for You"}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {isBn ? "আমাদের কাস্টমারদের সবচেয়ে পছন্দের খাবার" : "Customer Favourite Foods"}
          </h3>
          <p className="text-base text-foreground/70">
            {isBn ? (
              "আমাদের এই ডিশগুলো না খেলে মেদিনীপুরে আপনার আড্ডা কিন্তু অসম্পূর্ণ থেকে যাবে! দেখে নিন আমাদের টপ রেটেড খাবার।"
            ) : (
              "Your trip to Midnapore is incomplete without trying these iconic local sensations. Fresh, tasty, and served hot!"
            )}
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, idx) => {
            const badge = getBadge(dish.id, isBn);
            return (
              <framerMotion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative flex flex-col bg-card-bg border border-border-color rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-accent-gold/40 transition-all duration-300"
              >
                {/* Image Wrap */}
                <div className="relative aspect-square w-full overflow-hidden bg-zinc-200">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Floating Badge */}
                  <div className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider backdrop-blur-md ${badge.color}`}>
                    {badge.icon}
                    <span>{badge.text}</span>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between text-left space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="text-lg font-bold text-foreground group-hover:text-accent-gold transition-colors line-clamp-1">
                        {isBn ? dish.nameBn : dish.name}
                      </h4>
                      <span className="text-lg font-extrabold text-accent-gold font-sans">
                        ₹{dish.price}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-foreground/75 line-clamp-2">
                      {isBn ? dish.descriptionBn : dish.description}
                    </p>
                  </div>

                  <a
                    href="#reservation"
                    className="w-full text-center py-2.5 rounded-xl border border-accent-gold/30 group-hover:border-accent-gold bg-transparent group-hover:bg-accent-gold text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-black transition-all duration-300"
                  >
                    {isBn ? "অর্ডার / বুকিং" : "Order / Reserve"}
                  </a>
                </div>
              </framerMotion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
