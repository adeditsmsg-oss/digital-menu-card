"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, Flame, Sparkles, X, Plus, Minus, Search, 
  ShoppingCart, MessageSquare, Compass, AlertCircle
} from "lucide-react";
import { MENU_ITEMS, MenuItem, RESTAURANT_CONFIG } from "@/config/restaurant";

interface DigitalMenuProps {
  isBn: boolean;
}

interface CartItem {
  item: MenuItem;
  quantity: number;
}

// Category design mapping
const CATEGORY_MAP: { [key: string]: { label: string; labelBn: string; color: string; icon: string } } = {
  All: { label: "All Items", labelBn: "সব খাবার", color: "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400", icon: "🍔" },
  SHAWARMA: { label: "Shawarma", labelBn: "শাওয়ার্মা", color: "bg-orange-500/10 border-orange-500/30 text-orange-600 dark:text-orange-400", icon: "🌯" },
  "KABAB - NON-VEG": { label: "Kabab (Non-Veg)", labelBn: "চিকেন কাবাব", color: "bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400", icon: "🍗" },
  "KABAB - VEG": { label: "Kabab (Veg)", labelBn: "পনির ও আলু কাবাব", color: "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400", icon: "🍢" },
  "GRAVY - NON-VEG": { label: "Gravy (Non-Veg)", labelBn: "মাংসের তরকারি", color: "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400", icon: "🍲" },
  "GRAVY - VEG": { label: "Gravy (Veg)", labelBn: "ভেজ তরকারি", color: "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400", icon: "🥣" },
  BREAD: { label: "Indian Bread", labelBn: "রুটি ও নান", color: "bg-yellow-600/10 border-yellow-600/30 text-yellow-700 dark:text-yellow-400", icon: "🫓" },
  SNACKS: { label: "Snacks & Starters", labelBn: "মুখরোচক স্ন্যাকস", color: "bg-purple-500/10 border-purple-500/30 text-purple-600 dark:text-purple-400", icon: "🍟" },
  MOCKTAIL: { label: "Mocktails", labelBn: "রিফ্রেশিং মকটেল", color: "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400", icon: "🍸" },
  JUICE: { label: "Fresh Juice / Soda", labelBn: "জুস ও সোডা", color: "bg-teal-500/10 border-teal-500/30 text-teal-600 dark:text-teal-400", icon: "🥤" },
  "MILK SHAKE": { label: "Milk Shakes", labelBn: "মিল্কশেক", color: "bg-pink-500/10 border-pink-500/30 text-pink-600 dark:text-pink-400", icon: "🥤" },
  LASSI: { label: "Lassi", labelBn: "লাচ্ছি", color: "bg-indigo-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-400", icon: "🥛" },
  COFFEE: { label: "Premium Coffee", labelBn: "কফি কর্নার", color: "bg-amber-900/10 border-amber-900/30 text-amber-800 dark:text-amber-300", icon: "☕" },
  "ICE-CREAM": { label: "Ice Creams", labelBn: "ঠান্ডা আইসক্রিম", color: "bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-600 dark:text-fuchsia-400", icon: "🍦" },
  SOUP: { label: "Soups", labelBn: "গরম সুপ", color: "bg-cyan-500/10 border-cyan-500/30 text-cyan-600 dark:text-cyan-400", icon: "🍜" },
  SALAD: { label: "Salads", labelBn: "স্বাস্থ্যকর সালাদ", color: "bg-lime-500/10 border-lime-500/30 text-lime-600 dark:text-lime-400", icon: "🥗" }
};

// Helper function to check if item is Veg
const isItemVeg = (item: MenuItem) => {
  const name = item.name.toLowerCase();
  const cat = item.category.toLowerCase();
  if (cat.includes("non-veg") || cat.includes("shawarma")) return false;
  
  const nonVegKeywords = [
    "chicken", "mutton", "fish", "egg", "wings", "tangri", 
    "resmi", "kasha", "curry", "lolipop", "popcorn", "fingers", 
    "prawn", "bhetki", "kabab", "drums"
  ];
  
  if (cat.includes("veg")) return true;
  if (nonVegKeywords.some(keyword => name.includes(keyword))) return false;
  
  return true;
};

export default function DigitalMenu({ isBn }: DigitalMenuProps) {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [vegFilter, setVegFilter] = useState<"all" | "veg" | "non-veg">("all");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [tableNumber, setTableNumber] = useState("");

  // Load cart from LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("haveli_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save cart to LocalStorage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("haveli_cart", JSON.stringify(newCart));
  };

  const addToCart = (item: MenuItem) => {
    const existing = cart.find(ci => ci.item.id === item.id);
    if (existing) {
      saveCart(cart.map(ci => ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci));
    } else {
      saveCart([...cart, { item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: MenuItem) => {
    const existing = cart.find(ci => ci.item.id === item.id);
    if (!existing) return;
    if (existing.quantity === 1) {
      saveCart(cart.filter(ci => ci.item.id !== item.id));
    } else {
      saveCart(cart.map(ci => ci.item.id === item.id ? { ...ci, quantity: ci.quantity - 1 } : ci));
    }
  };

  const getCartQuantity = (itemId: string) => {
    return cart.find(ci => ci.item.id === itemId)?.quantity || 0;
  };

  const getCartTotal = () => {
    return cart.reduce((acc, ci) => acc + (ci.item.price * ci.quantity), 0);
  };

  const getCartTotalItems = () => {
    return cart.reduce((acc, ci) => acc + ci.quantity, 0);
  };

  const checkoutWhatsApp = () => {
    if (cart.length === 0) return;
    
    let text = `*H A V E L I   C A F E   O R D E R*\n`;
    text += `--------------------------------------\n`;
    text += `*Type:* ${tableNumber ? `Table / Cabin Order (Table: ${tableNumber})` : "Takeaway / Dine-in"}\n`;
    text += `*Date/Time:* ${new Date().toLocaleString()}\n`;
    text += `--------------------------------------\n`;
    
    cart.forEach(ci => {
      text += `• ${ci.quantity} x ${ci.item.name} (₹${ci.item.price} each) → *₹${ci.item.price * ci.quantity}*\n`;
    });
    
    text += `--------------------------------------\n`;
    text += `*Total Amount:* *₹${getCartTotal()}*\n\n`;
    text += `Order generated via Haveli Digital Menu. Please prepare the order.`;
    
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${RESTAURANT_CONFIG.whatsappNumber}&text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  // Get all unique categories from the actual menu items
  const categoriesList = ["All", ...Array.from(new Set(MENU_ITEMS.map(item => item.category)))];

  const getFilteredItems = () => {
    return MENU_ITEMS.filter(item => {
      // 1. Tab filter
      const matchesTab = activeTab === "All" || item.category === activeTab;
      
      // 2. Search query
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.category.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            (item.descriptionBn && item.descriptionBn.includes(searchQuery));
      
      // 3. Veg / Non-veg
      const isVeg = isItemVeg(item);
      const matchesVeg = vegFilter === "all" || 
                         (vegFilter === "veg" && isVeg) || 
                         (vegFilter === "non-veg" && !isVeg);
                         
      return matchesTab && matchesSearch && matchesVeg;
    });
  };

  const filteredItems = getFilteredItems();

  return (
    <section id="menu" className="py-20 bg-background border-t border-border-color transition-colors duration-300 relative">
      {/* Glow decorations for dark mode */}
      <div className="absolute top-10 right-0 w-80 h-80 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-85 h-85 rounded-full bg-accent-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-accent-gold flex items-center justify-center gap-1.5">
            <Sparkles size={14} className="fill-current animate-pulse" />
            <span>{isBn ? "ডিজিটাল মেনু কার্ড" : "Interactive Digital Menu"}</span>
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground font-sans">
            {isBn ? "হাভেলি স্পেশাল মেনু" : "Crafted For Your Taste Buds"}
          </h3>
          <p className="text-sm sm:text-base text-foreground/70">
            {isBn ? (
              "আমাদের তাজা তৈরি সুস্বাদু খাবারের তালিকা থেকে অর্ডার করুন। সরাসরি হোয়াটসঅ্যাপের মাধ্যমে অর্ডার প্লেস করতে এড-টু-কার্ট ব্যবহার করুন!"
            ) : (
              "Choose from our rich catalog of freshly prepared delicacies. Add items to your active cart and place your order directly via WhatsApp!"
            )}
          </p>
        </div>

        {/* Search and Veg Toggles */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40" size={18} />
            <input
              type="text"
              placeholder={isBn ? "খাবার খুঁজুন..." : "Search menu items..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-2xl bg-card-bg border border-border-color focus:border-accent-gold text-foreground placeholder-foreground/40 font-semibold focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-foreground/5 text-foreground/50 transition-colors"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Veg / Non-Veg Filters */}
          <div className="flex bg-card-bg border border-border-color rounded-2xl p-1 w-full md:w-auto shrink-0 justify-around">
            <button
              onClick={() => setVegFilter("all")}
              className={`flex-1 md:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase transition-all duration-300 ${
                vegFilter === "all"
                  ? "bg-accent-gold text-black shadow-sm"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {isBn ? "সব খাবার" : "All"}
            </button>
            <button
              onClick={() => setVegFilter("veg")}
              className={`flex-1 md:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase flex items-center justify-center gap-1.5 transition-all duration-300 ${
                vegFilter === "veg"
                  ? "bg-green-600 text-white shadow-sm"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-white" />
              <span>{isBn ? "ভেজ" : "Veg"}</span>
            </button>
            <button
              onClick={() => setVegFilter("non-veg")}
              className={`flex-1 md:flex-none px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase flex items-center justify-center gap-1.5 transition-all duration-300 ${
                vegFilter === "non-veg"
                  ? "bg-red-600 text-white shadow-sm"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <span className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[9px] border-b-red-500 inline-block" />
              <span>{isBn ? "নন-ভেজ" : "Non-Veg"}</span>
            </button>
          </div>
        </div>

        {/* Categories Tab Cards Selector */}
        <div className="relative mb-12">
          {/* Scrollable Container */}
          <div className="flex gap-4 overflow-x-auto pb-4 pt-1 px-2 scrollbar-none snap-x snap-mandatory">
            {categoriesList.map((catKey) => {
              const catInfo = CATEGORY_MAP[catKey] || { label: catKey, labelBn: catKey, color: "bg-zinc-500/10 border-zinc-500/30 text-zinc-600", icon: "🍽️" };
              const isActive = activeTab === catKey;
              
              return (
                <button
                  key={catKey}
                  onClick={() => setActiveTab(catKey)}
                  className={`snap-start shrink-0 flex flex-col items-center justify-between p-4 w-28 h-28 rounded-[1.5rem] border transition-all duration-300 relative select-none ${
                    isActive
                      ? "bg-accent-gold border-accent-gold text-black shadow-lg shadow-accent-gold/15 scale-103 -translate-y-1"
                      : `${catInfo.color} hover:scale-102 hover:-translate-y-0.5 hover:border-accent-gold/20 bg-card-bg`
                  }`}
                >
                  <span className="text-3xl filter drop-shadow-sm">{catInfo.icon}</span>
                  <div className="text-center space-y-0.5">
                    <p className={`text-[10px] font-extrabold uppercase tracking-wider line-clamp-1 ${isActive ? "text-black" : "text-foreground"}`}>
                      {isBn ? catInfo.labelBn : catInfo.label}
                    </p>
                  </div>
                  
                  {/* Subtle active status indicator dot */}
                  {isActive && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-black border border-accent-gold" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-card-bg border border-border-color rounded-3xl max-w-lg mx-auto p-8 space-y-4">
            <AlertCircle size={48} className="text-accent-gold mx-auto" />
            <h4 className="text-lg font-bold text-foreground">
              {isBn ? "কোনো খাবার খুঁজে পাওয়া যায়নি" : "No Items Match Your Filters"}
            </h4>
            <p className="text-sm text-foreground/60">
              {isBn ? "অনুগ্রহ করে আপনার সার্চ বা ফিল্টার পরিবর্তন করে পুনরায় চেষ্টা করুন।" : "Try clearing your search query or choosing another category filter."}
            </p>
            <button
              onClick={() => {
                setActiveTab("All");
                setSearchQuery("");
                setVegFilter("all");
              }}
              className="px-6 py-2.5 rounded-full bg-accent-gold text-black font-bold text-xs uppercase"
            >
              {isBn ? "ফিল্টার রিসেট করুন" : "Reset Filters"}
            </button>
          </div>
        )}

        {/* Menu Items Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isVeg = isItemVeg(item);
              const qty = getCartQuantity(item.id);
              
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="group relative flex flex-col bg-card-bg border border-border-color rounded-3xl overflow-hidden hover:shadow-xl hover:border-accent-gold/20 transition-all duration-300"
                >
                  {/* Image Showcase */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-zinc-900/5 dark:bg-white/5 border-b border-border-color">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-102 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback image if drive fails to load
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop";
                      }}
                    />
                    
                    {/* Badges Overlay */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {item.isBestSeller && (
                        <div className="bg-yellow-500 text-black px-2.5 py-1 rounded-xl text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <Sparkles size={10} className="fill-current" />
                          <span>{isBn ? "বেস্ট সেলার" : "Best Seller"}</span>
                        </div>
                      )}
                      {item.isPopular && !item.isBestSeller && (
                        <div className="bg-accent-gold text-black px-2.5 py-1 rounded-xl text-[9px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                          <Flame size={10} className="fill-current" />
                          <span>{isBn ? "জনপ্রিয়" : "Popular"}</span>
                        </div>
                      )}
                    </div>

                    {/* Veg / Non-Veg indicator badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-xl text-[9px] font-bold tracking-wider flex items-center gap-1.5 shadow-md">
                      <span className={`w-2.5 h-2.5 rounded-full border ${isVeg ? "bg-green-500 border-white" : "bg-red-500 border-white"}`} />
                      <span className="text-white text-[9px] font-extrabold uppercase">
                        {isVeg ? (isBn ? "ভেজ" : "VEG") : (isBn ? "নন-ভেজ" : "NON-VEG")}
                      </span>
                    </div>

                    {/* Category Label at bottom overlay */}
                    <div className="absolute bottom-3 left-4 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-[9px] font-bold text-accent-gold/90 uppercase tracking-widest">
                      {item.category}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4 text-left">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="font-extrabold text-foreground group-hover:text-accent-gold transition-colors text-base sm:text-lg line-clamp-1 leading-snug">
                          {item.name}
                        </h4>
                        <span className="font-black text-accent-gold font-sans text-base sm:text-lg shrink-0">
                          ₹{item.price}
                        </span>
                      </div>
                      
                      {/* Bengali Description */}
                      <p className="text-xs sm:text-sm text-foreground/80 line-clamp-2 leading-relaxed">
                        {item.descriptionBn}
                      </p>
                      
                      {/* English translated description */}
                      {item.description && (
                        <p className="text-[11px] text-foreground/50 line-clamp-1 italic">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Quantity Selector / Add Button */}
                    <div className="pt-2 border-t border-border-color/40">
                      {qty > 0 ? (
                        <div className="flex items-center justify-between bg-accent-gold/10 border border-accent-gold/20 rounded-2xl p-1.5">
                          <button
                            onClick={() => removeFromCart(item)}
                            className="w-9 h-9 rounded-xl bg-accent-gold text-black flex items-center justify-center hover:bg-accent-gold/90 transition-all font-bold"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="font-black text-foreground text-sm font-mono px-3">
                            {qty} {isBn ? "টি" : ""}
                          </span>
                          <button
                            onClick={() => addToCart(item)}
                            className="w-9 h-9 rounded-xl bg-accent-gold text-black flex items-center justify-center hover:bg-accent-gold/90 transition-all font-bold"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(item)}
                          className="w-full py-3 rounded-2xl border border-accent-gold/30 hover:border-accent-gold bg-accent-gold/5 hover:bg-accent-gold hover:text-black text-accent-gold font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
                        >
                          <Plus size={14} />
                          <span>{isBn ? "ওয়েটার ডাকুন" : "Call the Waiter"}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Floating Cart Button */}
      {getCartTotalItems() > 0 && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-6 py-4 rounded-full bg-accent-gold text-black hover:bg-accent-gold/90 shadow-2xl transition-all duration-300 font-extrabold hover:scale-105"
        >
          <ShoppingCart size={18} className="animate-pulse" />
          <span className="text-xs uppercase tracking-widest">
            {isBn ? `কার্ট (${getCartTotalItems()}) • ₹${getCartTotal()}` : `Cart (${getCartTotalItems()}) • ₹${getCartTotal()}`}
          </span>
        </motion.button>
      )}

      {/* Slide-out Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Cart Panel Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-md bg-card-bg border-l border-border-color shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-6 border-b border-border-color flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart size={20} className="text-accent-gold" />
                  <h3 className="font-extrabold text-lg text-foreground uppercase tracking-wider">
                    {isBn ? "আপনার কার্ট" : "Your Active Order"}
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-grow overflow-y-auto p-6 space-y-4">
                {cart.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <ShoppingCart size={48} className="text-foreground/20 mx-auto" />
                    <p className="text-foreground/50 text-sm font-semibold">
                      {isBn ? "আপনার কার্ট খালি আছে।" : "Your cart is currently empty."}
                    </p>
                  </div>
                ) : (
                  cart.map((ci) => (
                    <div 
                      key={ci.item.id} 
                      className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-foreground/5 border border-border-color/30"
                    >
                      <div className="flex-grow text-left space-y-1">
                        <h4 className="font-bold text-foreground text-sm line-clamp-1">
                          {ci.item.name}
                        </h4>
                        <p className="text-xs font-bold text-accent-gold font-sans">
                          ₹{ci.item.price} x {ci.quantity} = ₹{ci.item.price * ci.quantity}
                        </p>
                      </div>

                      {/* +/- quantity controls */}
                      <div className="flex items-center gap-2 flex-shrink-0 bg-background border border-border-color/50 rounded-xl p-1">
                        <button
                          onClick={() => removeFromCart(ci.item)}
                          className="w-7 h-7 rounded-lg bg-card-bg text-foreground flex items-center justify-center hover:bg-foreground/5 transition-colors font-bold text-xs"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-bold font-mono text-xs px-2 text-foreground">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => addToCart(ci.item)}
                          className="w-7 h-7 rounded-lg bg-card-bg text-foreground flex items-center justify-center hover:bg-foreground/5 transition-colors font-bold text-xs"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer / Table input & Checkout */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-border-color space-y-4 bg-background/50 backdrop-blur-md">
                  {/* Table/Cabin Number input */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-black uppercase tracking-wider text-foreground/60">
                      {isBn ? "টেবিল / কেবিন নম্বর (ঐচ্ছিক)" : "Table / Cabin Number (Optional)"}
                    </label>
                    <input
                      type="text"
                      placeholder={isBn ? "যেমন: ৪" : "e.g. Table 3, Cabin B"}
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-card-bg border border-border-color focus:border-accent-gold text-foreground placeholder-foreground/30 font-semibold focus:outline-none transition-colors text-sm"
                    />
                  </div>

                  {/* Summary */}
                  <div className="flex items-center justify-between font-black text-foreground text-sm uppercase tracking-wider pt-2">
                    <span>{isBn ? "সর্বমোট বিল" : "Grand Total"}</span>
                    <span className="text-accent-gold text-lg">₹{getCartTotal()}</span>
                  </div>

                  {/* WhatsApp button */}
                  <button
                    onClick={checkoutWhatsApp}
                    className="w-full py-4 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <MessageSquare size={16} />
                    <span>{isBn ? "হোয়াটসঅ্যাপে অর্ডার দিন" : "Order via WhatsApp"}</span>
                  </button>

                  <p className="text-[10px] text-center text-foreground/40 leading-relaxed font-medium">
                    {isBn ? (
                      "*হোয়াটসঅ্যাপে ক্লিক করার পর অর্ডার সামারি তৈরি হয়ে যাবে, মেসেজটি সেন্ড করে দিন।"
                    ) : (
                      "*Clicking sends order message to Haveli Cafe kitchen staff to confirm."
                    )}
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

