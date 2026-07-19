import type { Metadata } from "next";
import { Space_Grotesk, Inter, Caveat } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SGA Motors | Premium Tata Motors Dealership | Tamil Nadu",
  description: "Experience Next-Gen mobility with SGA Motors, South India's trusted Tata Motors dealer. Explore Tata EVs, SUVs, book test drives, compare models, and calculate finance options online.",
  keywords: [
    "SGA Motors", 
    "Tata Motors Dealership", 
    "Tata EV Coimbatore", 
    "Book Tata Test Drive", 
    "Curvv EV", 
    "Harrier EV", 
    "Nexon EV", 
    "Sierra EV", 
    "Safari", 
    "Tata Showroom Coimbatore", 
    "Namakkal", 
    "Salem", 
    "Ooty", 
    "Udumalpet"
  ],
  authors: [{ name: "SGA Motors" }],
  openGraph: {
    title: "SGA Motors | Premium Tata Motors Dealership | Tamil Nadu",
    description: "Experience Next-Gen mobility with SGA Motors. Explore Tata EVs, SUVs, calculate finance, and book a VIP test drive.",
    siteName: "SGA Motors",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SGA Motors | Premium Tata Motors Dealership | Tamil Nadu",
    description: "Experience Next-Gen mobility with SGA Motors. Explore Tata EVs, SUVs, calculate finance, and book a VIP test drive.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable} scroll-smooth`}>
      <body className="antialiased bg-white text-deep-charcoal min-h-screen">
        {children}
      </body>
    </html>
  );
}
