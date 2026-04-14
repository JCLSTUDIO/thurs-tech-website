import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rajdhani = Rajdhani({ 
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"], 
  variable: "--font-rajdhani" 
});

export const metadata: Metadata = {
  title: "ThursTech Nigeria Ltd | Premium Air Conditioning Solutions",
  description: "23+ years of excellence in AC sales, installation & maintenance. RC 1577031. Serving Nigeria & international clients with residential and industrial HVAC solutions. Call +2348034060091.",
  keywords: "air conditioning, HVAC, AC installation, Nigeria, ThursTech, Sagamu, Ogun State",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${rajdhani.variable} font-sans antialiased bg-cream-50`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}