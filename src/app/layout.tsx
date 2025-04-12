import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/shared/PageTransition";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ELUX.DEV | Luxury Web Design & Development",
  description: "Elite digital experiences for luxury brands and high-net-worth individuals. Meticulously crafted websites by ELUX.DEV.",
  keywords: "luxury web design, high-end web development, elite digital experiences, premium websites",
  authors: [{ name: "ELUX.DEV" }],
  creator: "ELUX.DEV",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elux.dev",
    title: "ELUX.DEV | Luxury Web Design & Development",
    description: "Elite digital experiences for luxury brands and high-net-worth individuals. Meticulously crafted websites by ELUX.DEV.",
    siteName: "ELUX.DEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELUX.DEV | Luxury Web Design & Development",
    description: "Elite digital experiences for luxury brands and high-net-worth individuals. Meticulously crafted websites by ELUX.DEV.",
    creator: "@eluxdev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${inter.variable} bg-black text-white antialiased`}>
        <Navbar />
        <main className="pt-20 md:pt-24">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
