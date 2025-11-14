"use client";

import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import StarHighlightsSection from "@/components/StarHighlightsSection";
import FooterSection from "@/components/FooterSection";
import StarclinchSquadSection from "@/components/StarclinchSquadSection";
import StarclinchHighlights from "@/components/StarclinchHighlights";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-[#0b0014] text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-purple-600 opacity-30 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-pink-500 opacity-20 blur-3xl" />

      <HeroSection />
      <GallerySection />
      <StarclinchHighlights />
      <StarclinchSquadSection />
      <StarHighlightsSection />
      <FooterSection />
    </main>
  );
}
