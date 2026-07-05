import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: RESTAURANT_CONFIG.seo.metaTitle,
  description: RESTAURANT_CONFIG.seo.metaDescription,
  keywords: RESTAURANT_CONFIG.seo.keywords.join(", "),
  openGraph: {
    title: RESTAURANT_CONFIG.seo.metaTitle,
    description: RESTAURANT_CONFIG.seo.metaDescription,
    url: "https://havelicafemi.com",
    siteName: RESTAURANT_CONFIG.businessName,
    images: [
      {
        url: "https://havelicafemi.com/images/haveli_exterior.jpg",
        width: 800,
        height: 600,
        alt: RESTAURANT_CONFIG.businessName,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
