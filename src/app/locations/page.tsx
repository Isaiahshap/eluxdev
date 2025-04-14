import React from "react";
import { Metadata } from "next";
import { LocationsHero } from "@/components/sections/LocationsHero";
import { LocationsGrid } from "@/components/sections/LocationsGrid";

export const metadata: Metadata = {
  title: "Global Presence | Elite Luxury Digital Agency",
  description: "Explore our global presence in major luxury hubs. Expert web design and development services for prestigious clients worldwide.",
  keywords: "luxury website designs, luxurious websites, luxury websites design",
};

const locationData = [
  {
    region: "North America",
    locations: [
      {
        city: "New York",
        country: "United States",
        image: "/images/locations/new-york.jpg",
        href: "/locations/new-york",
      },
      {
        city: "Los Angeles",
        country: "United States",
        image: "/images/locations/los-angeles.jpg",
        href: "/locations/los-angeles",
      },
      {
        city: "Miami",
        country: "United States",
        image: "/images/locations/miami.jpg",
        href: "/locations/miami",
      },
      {
        city: "San Francisco",
        country: "United States",
        image: "/images/locations/san-francisco.jpg",
        href: "/locations/san-francisco",
      },
    ],
  },
  {
    region: "Europe",
    locations: [
      {
        city: "London",
        country: "United Kingdom",
        image: "/images/locations/london.jpg",
        href: "/locations/london",
      },
      {
        city: "Paris",
        country: "France",
        image: "/images/locations/paris.jpg",
        href: "/locations/paris",
      },
      {
        city: "Monaco",
        country: "Monaco",
        image: "/images/locations/monaco.jpg",
        href: "/locations/monaco",
      },
      {
        city: "Zurich",
        country: "Switzerland",
        image: "/images/locations/zurich.jpg",
        href: "/locations/zurich",
      },
    ],
  },
  {
    region: "Middle East",
    locations: [
      {
        city: "Dubai",
        country: "United Arab Emirates",
        image: "/images/locations/dubai.jpg",
        href: "/locations/dubai",
      },
      {
        city: "Abu Dhabi",
        country: "United Arab Emirates",
        image: "/images/locations/abu-dhabi.jpg",
        href: "/locations/abu-dhabi",
      },
      {
        city: "Istanbul",
        country: "Turkey",
        image: "/images/locations/istanbul.jpg",
        href: "/locations/istanbul",
      },
    ],
  },
  {
    region: "Asia Pacific",
    locations: [
      {
        city: "Tokyo",
        country: "Japan",
        image: "/images/locations/tokyo.jpg",
        href: "/locations/tokyo",
      },
      {
        city: "Hong Kong",
        country: "China",
        image: "/images/locations/hong-kong.jpg",
        href: "/locations/hong-kong",
      },
      {
        city: "Sydney",
        country: "Australia",
        image: "/images/locations/sydney.jpg",
        href: "/locations/sydney",
      },
    ],
  },
];

export default function LocationsPage() {
  return (
    <main className="min-h-screen">
      <LocationsHero />
      <LocationsGrid locationData={locationData} />
    </main>
  );
} 