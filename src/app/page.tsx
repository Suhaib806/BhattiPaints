"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LegacySection from "@/components/LegacySection";
import ProductCategories from "@/components/ProductCategories";
import ColourInspiration from "@/components/ColourInspiration";
import InteriorExteriorShowcase from "@/components/InteriorExteriorShowcase";
import WhyBhattiPaints from "@/components/WhyBhattiPaints";
import HeritageStory from "@/components/HeritageStory";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import PaintCalculatorModal from "@/components/PaintCalculatorModal";

export default function HomePage() {
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#161514]">
      <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />
      <main className="flex-1">
        <Hero />
        <LegacySection />
        <ProductCategories />
        <ColourInspiration />
        <InteriorExteriorShowcase />
        <WhyBhattiPaints />
        <HeritageStory />
        <CtaSection />
      </main>
      <Footer />
      <PaintCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
      />
    </div>
  );
}

