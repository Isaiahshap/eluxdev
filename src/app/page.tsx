import { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import PortfolioSection from "@/components/sections/home/PortfolioSection";
import ContactSection from "@/components/sections/home/ContactSection";

export const metadata: Metadata = {
  title: "ELUX.DEV | Luxury Website & Web Design Studio",
  description: "ELUX.DEV creates exceptional luxury websites and digital experiences for discerning clients. Boutique web design studio specializing in elite digital platforms.",
  keywords: "luxury website, luxury web design, luxury websites, high-end web development, bespoke digital experiences, premium website development",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
