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

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE & TEA
  {
    id: "c1",
    name: "Filter Coffee (Small)",
    nameBn: "ফিল্টার কফি (ছোট)",
    description: "Traditional hot filter coffee with a rich frothy milk texture.",
    descriptionBn: "পরম্পরাগত গরম ফিল্টার কফি, ক্রিমি ও ফেনা যুক্ত দুধের স্বাদ।",
    price: 30,
    category: "Coffee",
    image: "/images/haveli_hot_coffee_grass.jpg"
  },
  {
    id: "c2",
    name: "Filter Coffee (Large)",
    nameBn: "ফিল্টার কফি (বড়)",
    description: "A larger serving of our freshly brewed traditional filter coffee.",
    descriptionBn: "তাজা ফিল্টার কফির একটি বড় ও তৃপ্তিদায়ক কাপ।",
    price: 50,
    category: "Coffee",
    image: "/images/haveli_hot_coffee_grass.jpg"
  },
  {
    id: "c3",
    name: "Cold Coffee",
    nameBn: "কোল্ড কফি",
    description: "Classic creamy chilled coffee blended with premium vanilla cream.",
    descriptionBn: "ভ্যানিলা ক্রিমের সাথে ব্লেন্ড করা ক্লাসিক ক্রিমি ঠান্ডা কফি।",
    price: 70,
    category: "Coffee",
    image: "/images/haveli_top_coffee.jpg",
    isPopular: true,
    isBestSeller: true
  },
  {
    id: "t1",
    name: "Special Elaichi Tea",
    nameBn: "স্পেশাল এলাচ চা",
    description: "Strong milk tea infused with real cardamom pods.",
    descriptionBn: "আসল এলাচ দিয়ে তৈরি কড়া লিকারের দুধ চা।",
    price: 20,
    category: "Tea",
    image: "/images/haveli_hot_coffee_grass.jpg"
  },
  {
    id: "t2",
    name: "Darjeeling Green Tea",
    nameBn: "দার্জিলিং গ্রিন টি",
    description: "Light and refreshing premium green tea from Darjeeling hills.",
    descriptionBn: "দার্জিলিং পাহাড়ের হালকা এবং রিফ্রেশিং প্রিমিয়াম গ্রিন টি।",
    price: 25,
    category: "Tea",
    image: "/images/haveli_hot_coffee_grass.jpg"
  },

  // STARTERS / SNAKS
  {
    id: "s1",
    name: "French Fry",
    nameBn: "ফ্রেঞ্চ ফ্রাই",
    description: "Crispy salted golden potato fries cooked to perfection.",
    descriptionBn: "মুচমুচে সোনালী আলুর ফ্রাই, হালকা লবণে ভাজা।",
    price: 30,
    category: "Starters",
    image: "/images/haveli_cheese_fries.jpg"
  },
  {
    id: "s2",
    name: "French Fry with Cheese Sauce",
    nameBn: "চিজ সস ফ্রেঞ্চ ফ্রাই",
    description: "Golden crispy fries smothered in our signature creamy cheese sauce.",
    descriptionBn: "আমাদের সিগনেচার ক্রিমি চিজ সসে ভরপুর মুচমুচে ফ্রেঞ্চ ফ্রাই।",
    price: 40,
    category: "Starters",
    image: "/images/haveli_cheese_fries.jpg",
    isPopular: true
  },
  {
    id: "s3",
    name: "Schezwan Chilly Potato",
    nameBn: "সেজুয়ান চিলি পটেটো",
    description: "Spicy and tangy fried potatoes tossed in Schezwan chili paste.",
    descriptionBn: "সেজুয়ান চিলি পেস্টে রান্না করা ঝাল ও টক স্বাদের ভাজা আলু।",
    price: 50,
    category: "Starters",
    image: "/images/haveli_chicken_manchurian.jpg"
  },
  {
    id: "s4",
    name: "Crispy Chicken Wings (6 Pcs)",
    nameBn: "ক্রিস্পি চিকেন উইংস",
    description: "Crunchy batter-fried chicken wings served with hot garlic dip.",
    descriptionBn: "মুচমুচে ব্যাটার-ফ্রাইড চিকেন উইংস, হট গার্লিক ডিপের সাথে পরিবেশিত।",
    price: 120,
    category: "Starters",
    image: "/images/haveli_crispy_wings.jpg",
    isPopular: true
  },
  {
    id: "s5",
    name: "Hot Chilli Wings (6 Pcs)",
    nameBn: "হট চিলি উইংস",
    description: "Fiery spicy wings tossed in chef's hot red chili sauce.",
    descriptionBn: "শেফের তৈরি কড়া ঝাল লাল চিলি সসে টস করা দুর্দান্ত উইংস।",
    price: 140,
    category: "Starters",
    image: "/images/haveli_crispy_wings.jpg"
  },
  {
    id: "s6",
    name: "Chinese B.B.Q Fried Chicken",
    nameBn: "চাইনিজ বারবিকিউ ফ্রাইড চিকেন",
    description: "Crispy fried chicken glazed with smokey sweet Chinese BBQ sauce.",
    descriptionBn: "চাইনিজ মিষ্টি ও স্মোকি বারবিকিউ সসে কোটেড মুচমুচে ফ্রাইড চিকেন।",
    price: 90, // 4 Pcs
    priceDouble: 160, // 8 Pcs
    category: "Starters",
    image: "/images/haveli_chicken_lollipop.jpg",
    isBestSeller: true
  },
  {
    id: "s7",
    name: "Drums of Heaven",
    nameBn: "ড্রামস অফ হেভেন",
    description: "Classic chicken lollipops tossed in sweet and spicy Schezwan sauce.",
    descriptionBn: "মিষ্টি ও ঝাল সেজুয়ান সসে টস করা ক্লাসিক চিকেন ললিপপ।",
    price: 90, // 2 Pcs
    priceDouble: 160, // 4 Pcs
    category: "Starters",
    image: "/images/haveli_chicken_lollipop.jpg",
    isPopular: true,
    isHighestRated: true
  },
  {
    id: "s8",
    name: "Fish Finger",
    nameBn: "ফিশ ফিঙ্গার",
    description: "Crispy crumbed fish fillets served with mustard tartare dip.",
    descriptionBn: "বিস্কুটের গুঁড়ো জড়িয়ে ভাজা মুচমুচে ফিশ ফিলেট, কাসুন্দি ও মেয়োনেজের সাথে।",
    price: 70, // 4 Pcs
    priceDouble: 140, // 8 Pcs
    category: "Starters",
    image: "/images/haveli_fish_fingers.jpg",
    isPopular: true
  },
  {
    id: "s9",
    name: "Prawn Popcorn (10 Pcs)",
    nameBn: "প্রন পপকর্ন (১০টি)",
    description: "Tiny crunchy bite-sized prawn fritters, dynamic seasoning.",
    descriptionBn: "ছোট ছোট মুচমুচে চিংড়ির পপকর্ন, মশলাদার টপিংসের সাথে।",
    price: 80,
    category: "Starters",
    image: "/images/haveli_fish_fingers.jpg"
  },
  {
    id: "s10",
    name: "Chicken Popcorn",
    nameBn: "চিকেন পপকর্ন",
    description: "Crispy seasoned bite-sized chicken pops perfect for adda snacking.",
    descriptionBn: "আড্ডার জন্য একদম পারফেক্ট ঝাল ও মুচমুচে চিকেন পপকর্ন।",
    price: 60,
    category: "Starters",
    image: "/images/haveli_fish_fingers.jpg"
  },

  // BENGALI SPECIAL
  {
    id: "b1",
    name: "Luchi Alur Dum Combo",
    nameBn: "লুচি আলুর দম কম্বো",
    description: "4 pieces of fluffy golden luchis served with spicy, rich Alur Dum.",
    descriptionBn: "৪ পিস গরম ফুলকো লুচি সাথে মশলাদার ও সুস্বাদু আলুর দম।",
    price: 60,
    category: "Bengali Special",
    image: "/images/haveli_chicken_manchurian.jpg",
    isPopular: true
  },
  {
    id: "b2",
    name: "Bhetki Fish Fry (1 Pc)",
    nameBn: "ভেটকি ফিশ ফ্রাই",
    description: "Premium Kolkata Bhetki fillet marinated in green herbs, crumb-fried.",
    descriptionBn: "আসল ভেটকি ফিলেট ধনেপাতা ও মশলায় মেরিনেট করে মুচমুচে করে ভাজা।",
    price: 90,
    category: "Bengali Special",
    image: "/images/haveli_fish_fingers.jpg",
    isBestSeller: true
  },
  {
    id: "b3",
    name: "Kolkata Egg Roll",
    nameBn: "কলকাতা এগ রোল",
    description: "Flaky paratha loaded with eggs, onions, green chilies, and a squeeze of lime.",
    descriptionBn: "ডিম, পেঁয়াজ, কাঁচামরিচ ও লেবুর রস দিয়ে তৈরি কলকাতার ক্লাসিক এগ রোল।",
    price: 45,
    category: "Bengali Special",
    image: "/images/haveli_shawarma_drink.jpg"
  },
  {
    id: "b4",
    name: "Mishti Doi (Premium Cup)",
    nameBn: "মিষ্টি দই",
    description: "Traditional sweet caramel yogurt made in clay pots.",
    descriptionBn: "মাটির ভাঁড়ে জমানো মিষ্টি ও ক্রিমি ঐতিহ্যবাহী মিষ্টি দই।",
    price: 30,
    category: "Bengali Special",
    image: "/images/haveli_milkshake.jpg"
  },

  // CHINESE (RICE & NOODLES)
  {
    id: "ch1",
    name: "Chicken Noodles",
    nameBn: "চিকেন নুডলস",
    description: "Wok-tossed noodles with chicken shreds, fresh veggies, and soy sauce.",
    descriptionBn: "চিকেনের কুচি, তাজা সবজি এবং সয়া সস দিয়ে টস করা নুডলস।",
    price: 80,
    category: "Chinese",
    image: "/images/haveli_noodles.jpg",
    isPopular: true
  },
  {
    id: "ch2",
    name: "Schezwan Rice (Chicken)",
    nameBn: "সেজুয়ান রাইস (চিকেন)",
    description: "Spicy fried rice tossed in fiery Schezwan sauce with chicken pieces.",
    descriptionBn: "ঝাল সেজুয়ান সস ও চিকেনের টুকরো দিয়ে তৈরি মশলাদার ফ্রাইড রাইস।",
    price: 120,
    category: "Chinese",
    image: "/images/haveli_chicken_manchurian.jpg"
  },
  {
    id: "ch3",
    name: "Singapuri Noodles (Chicken)",
    nameBn: "সিঙ্গাপুরি নুডলস (চিকেন)",
    description: "Yellow curry-seasoned noodles with shredded chicken and bell peppers.",
    descriptionBn: "হালকা সিঙ্গাপুরি কারি ফ্লেভারের মশলাদার চিকেন নুডলস।",
    price: 120,
    category: "Chinese",
    image: "/images/haveli_noodles.jpg"
  },
  {
    id: "ch4",
    name: "Schezwan Noodles (Veg)",
    nameBn: "সেজুয়ান নুডলস (ভেজ)",
    description: "Wok-tossed spicy noodles loaded with fresh seasonal vegetables.",
    descriptionBn: "তাজা সবজি আর কড়া সেজুয়ান সসের সাথে টস করা স্পাইসি নুডলস।",
    price: 90,
    category: "Chinese",
    image: "/images/haveli_noodles.jpg"
  },

  // BIRYANI
  {
    id: "bi1",
    name: "Kolkata Chicken Biryani",
    nameBn: "কলকাতা চিকেন বিরিয়ানি",
    description: "Fragrant basmati rice cooked with tender chicken, boiled egg, and the iconic soft potato.",
    descriptionBn: "সুগন্ধি বাসমতি চাল, নরম চিকেন, সেদ্ধ ডিম এবং কলকাতার বিখ্যাত আলু দিয়ে তৈরি দমে রান্না বিরিয়ানি।",
    price: 160,
    category: "Biryani",
    image: "/images/haveli_chicken_manchurian.jpg",
    isPopular: true,
    isBestSeller: true
  },
  {
    id: "bi2",
    name: "Kolkata Mutton Biryani",
    nameBn: "কলকাতা মাটন বিরিয়ানি",
    description: "Rich and aromatic dum biryani with juicy mutton chunk, egg, and spiced potato.",
    descriptionBn: "নরম মাটন, ডিম এবং মশলাদার আলু দিয়ে তৈরি কলকাতার ট্র্যাডিশনাল মাটন বিরিয়ানি।",
    price: 220,
    category: "Biryani",
    image: "/images/haveli_chicken_manchurian.jpg",
    isHighestRated: true
  },

  // PIZZA & BURGER
  {
    id: "p1",
    name: "Double Cheese Margherita Pizza",
    nameBn: "ডাবল চিজ মার্গারিটা পিজ্জা",
    description: "Freshly baked thin-crust loaded with premium mozzarella cheese and classic tomato base.",
    descriptionBn: "ভরপুর মজারেলা চিজ এবং ক্লাসিক টমেটো সসের ফ্রেশ ইতালীয় স্বাদের পিজ্জা।",
    price: 140,
    category: "Pizza",
    image: "/images/haveli_cheese_fries.jpg"
  },
  {
    id: "p2",
    name: "Tandoori Chicken Tikka Pizza",
    nameBn: "তন্দুরি চিকেন টিক্কা পিজ্জা",
    description: "Fusion pizza topped with spicy tandoori chicken chunks, capsicum, and onions.",
    descriptionBn: "ঝাল তন্দুরি চিকেনের টুকরো, ক্যাপসিকাম ও পেঁয়াজ দিয়ে তৈরি ফিউশন পিজ্জা।",
    price: 190,
    category: "Pizza",
    image: "/images/haveli_cheese_fries.jpg",
    isPopular: true
  },
  {
    id: "bu1",
    name: "Veg Classic Burger",
    nameBn: "ভেজ ক্লাসিক বার্গার",
    description: "Crispy vegetable patty in soft buns with mayo, lettuce, and cheese slice.",
    descriptionBn: "মুচমুচে ভেজিটেবল প্যাটি, মেয়োনেজ ও চিজ স্লাইস দিয়ে তৈরি চমৎকার বার্গার।",
    price: 60,
    category: "Burger",
    image: "/images/haveli_cheese_fries.jpg"
  },
  {
    id: "bu2",
    name: "Haveli Double Cheese Chicken Burger",
    nameBn: "হাভেলি ডাবল চিজ চিকেন বার্গার",
    description: "Juicy chicken patty layered with double cheese, burger sauce, and fresh onions.",
    descriptionBn: "রসালো চিকেন প্যাটি, ডাবল চিজ এবং আমাদের স্পেশাল সস দিয়ে তৈরি সিগনেচার বার্গার।",
    price: 110,
    category: "Burger",
    image: "/images/haveli_cheese_fries.jpg",
    isPopular: true
  },

  // SHAWARMA (SIGNATURE)
  {
    id: "sh1",
    name: "Chicken Shawarma Roll",
    nameBn: "চিকেন শাওয়ার্মা রোল",
    description: "Slow-roasted marinated chicken shreds wrapped in fresh rumali pita with mayo, served with fries.",
    descriptionBn: "মেরিনেট করা চিকেনের কুচি মেয়োনেজ দিয়ে রুমালে মোড়ানো, সাথে ফ্রেঞ্চ ফ্রাই।",
    price: 45,
    category: "Rolls",
    image: "/images/haveli_shawarma_drink.jpg",
    isPopular: true,
    isBestSeller: true
  },
  {
    id: "sh2",
    name: "Shawarma with Schezwan Sauce",
    nameBn: "সেজুয়ান সস চিকেন শাওয়ার্মা",
    description: "Spicy roasted chicken shawarma roll infused with zesty hot Schezwan glaze.",
    descriptionBn: "ঝাল ও মুখরোচক সেজুয়ান সস দিয়ে তৈরি আমাদের স্পেশাল চিকেন শাওয়ার্মা রোল।",
    price: 55,
    category: "Rolls",
    image: "/images/haveli_shawarma_drink.jpg",
    isHighestRated: true
  },

  // MOCKTAILS & MILKSHAKES
  {
    id: "m1",
    name: "Haveli Fizz",
    nameBn: "হাভেলি ফিজ",
    description: "Our signature layered mocktail with soda, mint, and blue curacao syrup.",
    descriptionBn: "আমাদের সিগনেচার লেয়ার্ড মকটেল - সোডা, পুদিনা এবং ব্লু কিউরাসাও সিরাপ।",
    price: 80,
    category: "Mocktails",
    image: "/images/haveli_mocktail_cucumber.jpg",
    isPopular: true
  },
  {
    id: "m2",
    name: "Red Cooler",
    nameBn: "রেড কুলার",
    description: "A cooling watermelon and rose infusion topped with chilled club soda.",
    descriptionBn: "তরমুজ এবং গোলাপের ফ্লেভারে তৈরি একটি ঠান্ডা রিফ্রেশিং মকটেল।",
    price: 70,
    category: "Mocktails",
    image: "/images/haveli_shawarma_drink.jpg"
  },
  {
    id: "m3",
    name: "Litchi Sparkler",
    nameBn: "লিচু স্পার্কলার",
    description: "Sweet and tangy lychee juice splash with lime and carbonated fizz.",
    descriptionBn: "মিষ্টি ও টক লিচুর জুসের সাথে লেবুর রস ও সোডা ওয়াটার।",
    price: 70,
    category: "Mocktails",
    image: "/images/haveli_mocktail_cucumber.jpg"
  },
  {
    id: "ms1",
    name: "Brownie Coffee Shake",
    nameBn: "ব্রাউনি কফি শেক",
    description: "Thick creamy shake with rich coffee, vanilla cream, and crushed chocolate brownie.",
    descriptionBn: "চকলেট ব্রাউনি, কফি এবং ভ্যানিলা ক্রিমের ঘন ও লোভনীয় লাক্সারি মিল্কশেক।",
    price: 130,
    category: "Milkshakes",
    image: "/images/haveli_milkshake.jpg",
    isPopular: true,
    isHighestRated: true
  },
  {
    id: "ms2",
    name: "Chocolate Milkshake",
    nameBn: "চকলেট মিল্কশেক",
    description: "Thick milk shake infused with rich Belgian chocolate syrup and chocolate chips.",
    descriptionBn: "বেলজিয়ান চকলেট ও চকলেট চিপস দিয়ে তৈরি অত্যন্ত ঘন চকলেট শেক।",
    price: 70,
    category: "Milkshakes",
    image: "/images/haveli_milkshake.jpg"
  },

  // DESSERTS
  {
    id: "d1",
    name: "Hot Chocolate Brownie with Ice Cream",
    nameBn: "হট চকলেট ব্রাউনি সাথে আইসক্রিম",
    description: "Warm fudge brownie served with a scoop of vanilla ice cream and hot chocolate drizzle.",
    descriptionBn: "গরম ফাজ ব্রাউনির সাথে এক স্কুপ ভ্যানিলা আইসক্রিম ও গরম চকলেটের প্রлеপ।",
    price: 110,
    category: "Desserts",
    image: "/images/haveli_milkshake.jpg",
    isPopular: true
  }
];
