import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aarambh Escapes | Discover India's Hidden Gems",
  description: "Curated travel experiences across India with handpicked destinations, expert guides, and hassle-free bookings. Plan your next adventure with Aarambh Escapes.",
  keywords: ["travel", "India", "tours", "packages", "Ladakh", "Kerala", "Rajasthan", "vacation", "holiday"],
  authors: [{ name: "Aarambh Escapes" }],
  openGraph: {
    title: "Aarambh Escapes | Discover India's Hidden Gems",
    description: "Curated travel experiences across India with handpicked destinations, expert guides, and hassle-free bookings.",
    url: "https://aarambhescapes.com",
    siteName: "Aarambh Escapes",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Aarambh Escapes - Travel India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarambh Escapes | Discover India's Hidden Gems",
    description: "Curated travel experiences across India with handpicked destinations, expert guides, and hassle-free bookings.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
