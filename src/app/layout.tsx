import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Silva Lux Resort | Luxury Resort in Wayanad, Kerala",
    template: "%s | Silva Lux Resort",
  },
  description:
    "Silva Lux Resort — a luxury resort in Kenichira, Panamaram, Wayanad, Kerala. 14 well-appointed rooms, multi-cuisine restaurant, event spaces, and warm hospitality surrounded by lush greenery.",
  keywords: [
    "Silva Lux Resort",
    "Wayanad resort",
    "Kerala resort",
    "luxury resort Wayanad",
    "Kenichira resort",
    "Panamaram hotel",
    "resort in Wayanad",
    "Wayanad hotel",
    "Kerala hotel",
    "family resort Kerala",
    "Wayanad accommodation",
    "deluxe rooms Wayanad",
    "suite room Kerala",
    "multi-cuisine restaurant Wayanad",
    "conference hall Wayanad",
    "banquet hall Kerala",
  ],
  authors: [{ name: "Silva Lux Resort" }],
  creator: "Silva Lux Resort",
  publisher: "Silva Lux Resort",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Silva Lux Resort",
    title: "Silva Lux Resort | Luxury Resort in Wayanad, Kerala",
    description:
      "A serene getaway in Kenichira, Panamaram, Wayanad. 14 well-appointed rooms, multi-cuisine restaurant, and warm hospitality surrounded by lush greenery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silva Lux Resort | Luxury Resort in Wayanad, Kerala",
    description:
      "A serene getaway in Kenichira, Panamaram, Wayanad. 14 well-appointed rooms, multi-cuisine restaurant, and warm hospitality surrounded by lush greenery.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B3A2D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <JsonLd />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
