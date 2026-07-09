export interface MenuItem {
  id: string;
  name: string;
  nameBn: string;
  description: string;
  descriptionBn: string;
  price: number;
  priceDouble?: number;
  category: string;
  image: string;
  isPopular?: boolean;
  isBestSeller?: boolean;
  isHighestRated?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  textBn: string;
  source: string;
}

export interface FAQItem {
  question: string;
  questionBn: string;
  answer: string;
  answerBn: string;
}

export const RESTAURANT_CONFIG = {
  businessName: "Haveli Cafe",
  businessNameBn: "হাভেলি ক্যাফে",
  category: "Premium Casual Dining Cafe & Restaurant",
  categoryBn: "প্রিমিয়াম ক্যাজুয়াল ডাইনিং ক্যাফে এবং রেস্তোরাঁ",
  address: "Ashok Nagar, Dharma, Midnapore Railway Station Road, Midnapore, West Bengal - 721101",
  addressBn: "অশোক নগর, ধর্মা, মেদিনীপুর রেলওয়ে স্টেশন রোড, মেদিনীপুর, পশ্চিমবঙ্গ - ৭২১১০১",
  phone: "+91 82484 81654",
  phoneDisplay: "+91 82484 81654",
  whatsappNumber: "+918248481654", // Formatting without spaces or + for API compatibility
  googleReviewUrl: "https://g.page/r/Cea6W6RavqOPEAE/review", // Configurable
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Haveli+Cafe+Midnapore",
  openingHours: "11:00 AM – 11:00 PM (Everyday)",
  openingHoursBn: "সকাল ১১:০০ টা - রাত ১১:০০ টা (প্রতিদিন)",
  googleRating: 4.8,
  reviewsCount: 496,
  priceRange: "₹300 - ₹500 for two",
  priceRangeBn: "দু'জনের জন্য ₹৩০০ - ₹৫০০",
  email: "info@havelicafemi.com",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
  },
  seo: {
    metaTitle: "Haveli Cafe Midnapore | Premium Dining & Instagram-Worthy Cafe in Medinipur",
    metaTitleBn: "হাভেলি ক্যাফে মেদিনীপুর | প্রিমিয়াম ডাইনিং এবং ইনস্টাগ্রাম-যোগ্য ক্যাফে",
    metaDescription: "Welcome to Haveli Cafe, the best cafe in Midnapore (Medinipur) near Railway Station Road. Try our famous Chicken Shawarma, Drums of Heaven, Filter Coffee, and Bengali special desserts. Couple and student-friendly vibe.",
    metaDescriptionBn: "মেদিনীপুর রেলওয়ে স্টেশন রোডের কাছে হাভেলি ক্যাফেতে আপনাকে স্বাগত। আমাদের বিখ্যাত চিকেন শাওয়ার্মা, ড্রামস অফ হেভেন, ফিল্টার কফি এবং স্পেশাল ডেজার্ট ট্রাই করুন। দম্পতি এবং শিক্ষার্থীদের জন্য দারুণ পরিবেশ।",
    keywords: [
      "Haveli Cafe Midnapore",
      "best cafe in Midnapore",
      "restaurants in Medinipur",
      "bengali food Medinipur",
      "shawarma in Midnapore",
      "best coffee in Medinipur",
      "couple friendly cafe Midnapore",
      "family restaurant Dharma Midnapore"
    ]
  }
};

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Arijit Dutta",
    rating: 5,
    date: "2 weeks ago",
    text: "Darun ambiance! Midnapore e erom pocket-friendly cafe khub kom ache. Shawarma wrap ta must try, and cold coffee was really rich and creamy. Staff der behavior khub bhalo. Will visit again soon!",
    textBn: "দারুণ পরিবেশ! মেদিনীপুরে এরকম পকেট-ফ্রেন্ডলি ক্যাফে খুব কম আছে। শাওয়ার্মা র‍্যাপটা অবশ্যই ট্রাই করবেন, আর কোল্ড কফিটা ছিল খুব রিচ এবং ক্রিমি। স্টাফদের ব্যবহার খুব ভালো। আবার আসবো!",
    source: "Google Maps"
  },
  {
    id: "r2",
    author: "Sneha Sen",
    rating: 5,
    date: "1 month ago",
    text: "Perfect place for couple dates or friends hangout. Interior decor ta khub Instagram-worthy. We loved the vintage camera mural! Food is delicious, especially the Drums of Heaven.",
    textBn: "দম্পতিদের ডেট বা বন্ধুদের আড্ডার জন্য পারফেক্ট জায়গা। ইন্টেরিয়র ডেকোরেশনটা খুব ইনস্টাগ্রাম-যোগ্য। আমরা ওই ভিন্টেজ ক্যামেরা আঁকা দেওয়ালটা খুব পছন্দ করেছি! খাবার খুবই সুস্বাদু, বিশেষ করে ড্রামস অফ হেভেন।",
    source: "Google Maps"
  },
  {
    id: "r3",
    author: "Debashis Roy",
    rating: 5,
    date: "3 weeks ago",
    text: "Family dining er jonno Dharma area te best restaurant. Amra weekend e gechilaam, bhir chilo but seating layout setup ta besh comfortable. Non-veg Chinese platter was superb. Highly recommended!",
    textBn: "ফ্যামিলি ডাইনিংয়ের জন্য ধর্মা এলাকায় সেরা রেস্তোরাঁ। আমরা উইকএন্ডে গিয়েছিলাম, ভিড় ছিল কিন্তু বসার ব্যবস্থা খুবই আরামদায়ক। নন-ভেজ চাইনিজ প্ল্যাটার দুর্দান্ত ছিল। হাইলি রেকমেন্ডেড!",
    source: "Google Maps"
  },
  {
    id: "r4",
    author: "Rahul Banerjee",
    rating: 4,
    date: "2 months ago",
    text: "Haveli Cafe has become our regular college adda spot! Chai and French Fries are absolute love. Pocket friendly prices and great music. Medinipur e erom cafe khub dorkar chilo.",
    textBn: "হাভেলি ক্যাফে আমাদের রেগুলার কলেজ আড্ডার জায়গা হয়ে উঠেছে! চা আর ফ্রেঞ্চ ফ্রাই জাস্ট অসাধারণ। পকেট ফ্রেন্ডলি দাম এবং দুর্দান্ত মিউজিক। মেদিনীপুরে এরকম একটা ক্যাফের খুব দরকার ছিল।",
    source: "Google Maps"
  },
  {
    id: "r5",
    author: "Priyanka Pal",
    rating: 5,
    date: "1 month ago",
    text: "Loved the coffee! Mural painted walls are so beautiful, took so many selfies. Staff are polite and helpful. Pocket friendly rate e premium feel.",
    textBn: "কফিটা জাস্ট দারুণ লেগেছে! দেওয়ালে আঁকা ছবিগুলো খুব সুন্দর, অনেক সেলফি তুলেছি। স্টাফরা খুব বিনয়ী এবং সাহায্যকারী। পকেট ফ্রেন্ডলি রেটে একদম প্রিমিয়াম ফিল দেয়।",
    source: "Google Maps"
  },
  {
    id: "r6",
    author: "Sayan Mukherjee",
    rating: 5,
    date: "5 days ago",
    text: "Authentic Chinese and continental items. Medinipur Station Road er kachei, location perfect. Tandoori chicken and special tea outstanding chilo. Service clean and behavior khub bhalo.",
    textBn: "অথেন্টিক চাইনিজ এবং কন্টিনেন্টাল খাবার। মেদিনীপুর স্টেশন রোডের কাছেই, লোকেশনটা একদম পারফেক্ট। তন্দুরি চিকেন আর স্পেশাল চা দারুণ লেগেছে। সার্ভিস অনেক পরিষ্কার এবং ব্যবহার খুব ভালো।",
    source: "Google Maps"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is Haveli Cafe couple and family-friendly?",
    questionBn: "হাভেলি ক্যাফে কি কাপল এবং ফ্যামিলি ফ্রেন্ডলি?",
    answer: "Yes, absolutely! We pride ourselves on offering a safe, cozy, and private atmosphere for couples and a comfortable, spacious environment for families to dine in.",
    answerBn: "হ্যাঁ, একেবারেই! আমরা দম্পতিদের জন্য একটি নিরাপদ ও রোমান্টিক পরিবেশ এবং পরিবারের জন্য আরামদায়ক ও প্রশস্ত ডাইনিং ব্যবস্থা প্রদান করতে পেরে গর্বিত।"
  },
  {
    question: "Do you host birthday parties and celebrations?",
    questionBn: "আপনারা কি জন্মদিন এবং বিভিন্ন অনুষ্ঠানের বুকিং নেন?",
    answer: "Yes, we have custom setups for birthday parties, college celebrations, and small get-togethers. Contact us in advance on WhatsApp to book your slots.",
    answerBn: "হ্যাঁ, জন্মদিন, কলেজের সেলিব্রেশন বা ছোট আড্ডার জন্য আমাদের কাস্টম ডেকোরেশন ও বুকিংয়ের ব্যবস্থা আছে। আগে থেকে বুক করতে আমাদের হোয়াটসঅ্যাপ করুন।"
  },
  {
    question: "Is parking available at the cafe?",
    questionBn: "ক্যাফেতে কি পার্কিংয়ের সুবিধা আছে?",
    answer: "Yes, street parking is available for two-wheelers and four-wheelers directly near the entrance along Midnapore Station Road.",
    answerBn: "হ্যাঁ, মেদিনীপুর স্টেশন রোডের পাশে আমাদের প্রবেশদ্বারের ঠিক সামনেই বাইক এবং গাড়ির পার্কিংয়ের সুবিধা রয়েছে।"
  },
  {
    question: "What are your signature dishes?",
    questionBn: "আপনাদের স্পেশাল ডিশ কোনগুলো?",
    answer: "Our crowd favorites are the Chicken Shawarma, Drums of Heaven, Cheese Sauce French Fries, Haveli Fizz mocktail, and our premium Cold Coffee.",
    answerBn: "আমাদের জনপ্রিয় ডিশগুলোর মধ্যে রয়েছে চিকেন শাওয়ার্মা, ড্রামস অফ হেভেন, চিজ সস ফ্রেঞ্চ ফ্রাই, হাভেলি ফিজ মকটেল এবং আমাদের প্রিমিয়াম কোল্ড কফি।"
  }
];

import { MENU_ITEMS as PARSED_MENU_ITEMS } from './menu_items';
export const MENU_ITEMS: MenuItem[] = PARSED_MENU_ITEMS;


export const getAssetUrl = (path: string): string => {
  return `/haveli-cafe-website${path}`;
};

export const MENU_SCANS = [
  "/images/menu_scan_1.jpg",
  "/images/menu_scan_2.png",
  "/images/menu_scan_3.png",
  "/images/menu_scan_4.png"
];
