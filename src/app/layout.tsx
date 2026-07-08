import type { Metadata } from "next";
import "./globals.css";
import { RESTAURANT_CONFIG } from "@/config/restaurant";

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
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
