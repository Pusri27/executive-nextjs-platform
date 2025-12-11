import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";
import { clsx } from "clsx";
import SmoothScroll from "@/app/(site)/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina | Strategic Executive Consulting",
  description: "Empowering global enterprises with visionary strategy and transformative growth. Lumina is the partner of choice for forward-thinking leaders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(inter.variable, playfair.variable, "scroll-smooth")}>
      <body className="antialiased bg-navy-900 text-slate-50 selection:bg-gold-500/30 selection:text-gold-200">
        <SmoothScroll />
        <div className="bg-noise" />
        {children}
      </body>
    </html>
  );
}
