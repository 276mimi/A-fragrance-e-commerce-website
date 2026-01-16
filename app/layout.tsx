import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // 1. Put imports back
import "./globals.css";
import ScrollToTop from "./components/Scrolltop";
import { CartProvider } from './components/CartContext'; // Import the provider
import CartSidebar from "./components/CartSidebar";

// 2. Redefine the font variables
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "MQ's Fragrance",
  description: "Luxury Scents and Oils",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased bg-black">
        <CartProvider>
          {/* 1. Content goes inside the provider */}
          {children}

          {/* 2. Global UI elements also go inside */}
          <ScrollToTop />
          <CartSidebar /> 
          
        </CartProvider> {/* 3. This MUST have a slash / to close it */}
      </body>
    </html>
  );
}