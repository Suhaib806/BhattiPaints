"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Expand,
  X,
} from "lucide-react";
import {
  SITE_CONFIG,
  ShowcaseSpace,
  GalleryFilterCategory,
} from "@/config/siteConfig";

const GALLERY_FILTERS: Array<{
  id: "All" | GalleryFilterCategory;
  label: string;
  dotColor: string;
}> = [
  { id: "All", label: "All", dotColor: "#C8283C" },
  { id: "Interior", label: "Interior", dotColor: "#B5267F" },
  { id: "Exterior", label: "Exterior", dotColor: "#F08A1C" },
  { id: "Textures", label: "Textures", dotColor: "#3FAE49" },
  { id: "Colour Inspiration", label: "Colour Inspiration", dotColor: "#1E73BE" },
];

export default function InteriorExteriorShowcase() {
  const allItems = SITE_CONFIG.showcaseSpaces;
  const [activeFilter, setActiveFilter] = useState<
    "All" | GalleryFilterCategory
  >("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? allItems
      : allItems.filter((item) => item.filterCategory === activeFilter);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || filteredItems.length === 0) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || filteredItems.length === 0) return null;
      return (prev + 1) % filteredItems.length;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const activeLightboxItem: ShowcaseSpace | null =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  const getAspectClass = (aspect: ShowcaseSpace["aspect"]) => {
    switch (aspect) {
      case "tall":
        return "aspect-[4/5]";
      case "square":
        return "aspect-square sm:aspect-[5/4]";
      case "detail":
        return "aspect-[4/3]";
      case "wide":
      default:
        return "aspect-[16/10]";
    }
  };

  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="py-24 sm:py-32 lg:py-36 bg-[#FAF8F5] text-[#161514] border-b border-[#E2DBD0] overflow-hidden"
    >
      <div className="site-container">
        {/* =================================================================
            EDITORIAL HEADER
           ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-10 mb-10 border-b border-[#DDD6CC]">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="w-6 h-[2px] bg-[#B5267F]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.22em] text-[#B5267F] font-semibold">
                PAINT &amp; COLOUR INSPIRATION GALLERY
              </span>
            </div>
            <h2
              id="showcase-heading"
              className="font-sans font-medium text-[2.75rem] sm:text-5xl lg:text-[4.25rem] leading-[1.03] tracking-[-0.035em] text-[#161514]"
            >
              Colour Your World.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-[#4A453F] leading-[1.68]">
              Discover colours, textures and finishes that bring walls to life.
              Explore inspiration for every space, from subtle elegance to bold
              expression.
            </p>
          </div>
        </div>

        {/* =================================================================
            FILTER BAR & CONTENT PILLAR LEGEND
           ================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 mb-12 lg:mb-16">
          {/* Interactive Category Filters */}
          <div
            role="tablist"
            aria-label="Filter paint gallery by category"
            className="flex flex-wrap items-center gap-2.5"
          >
            {GALLERY_FILTERS.map((tab) => {
              const isSelected = activeFilter === tab.id;
              const count =
                tab.id === "All"
                  ? allItems.length
                  : allItems.filter((i) => i.filterCategory === tab.id).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setActiveFilter(tab.id);
                    setLightboxIndex(null);
                  }}
                  className={`shrink-0 inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-[#161514] text-[#FAF8F5] border-[#161514] shadow-md"
                      : "bg-[#F2EDE4] text-[#161514] border-[#DDD6CC] hover:border-[#161514] hover:bg-white"
                  }`}
                >
                  <span
                    className="w-3 h-3 rounded-full border border-black/15 shrink-0"
                    style={{ backgroundColor: tab.dotColor }}
                    aria-hidden="true"
                  />
                  <span>{tab.label}</span>
                  <span
                    className={`font-mono text-[11px] px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/15 text-white"
                        : "bg-[#FAF8F5] text-[#5C564F]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Paint Swatch Spectrum Indicator */}
          <div className="flex items-center gap-3 text-xs text-[#5C564F]">
            <div className="flex h-2.5 w-24 overflow-hidden" aria-hidden="true">
              <span className="flex-1 bg-[#B5267F]" />
              <span className="flex-1 bg-[#C8283C]" />
              <span className="flex-1 bg-[#F08A1C]" />
              <span className="flex-1 bg-[#F2E40F]" />
              <span className="flex-1 bg-[#3FAE49]" />
              <span className="flex-1 bg-[#3CB8B0]" />
              <span className="flex-1 bg-[#1E73BE]" />
            </div>
            <span>Click any study to inspect surface &amp; colour detail</span>
          </div>
        </div>

        {/* =================================================================
            ASYMMETRIC EDITORIAL MASONRY-STYLE GALLERY GRID
           ================================================================= */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item: ShowcaseSpace, index: number) => {
              const spanClass =
                activeFilter === "All" ? item.colSpan : "lg:col-span-6";

              return (
                <motion.figure
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 4) * 0.06,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className={`${spanClass} group bg-[#F2EDE4] border border-[#DDD6CC] hover:border-[#161514] transition-colors duration-300 overflow-hidden`}
                >
                  {/* Top Colour Strip Showing the Study's Paint Swatches */}
                  <div className="flex h-2 w-full" aria-hidden="true">
                    {item.paletteSwatches.map((hex, sIdx) => (
                      <span
                        key={`${item.id}-sw-${sIdx}`}
                        className="flex-1 h-full"
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>

                  {/* Interactive Image Container */}
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    aria-label={`Open larger view of ${item.caption}`}
                    className={`relative block w-full ${getAspectClass(
                      item.aspect
                    )} overflow-hidden bg-[#161514] text-left cursor-pointer focus:outline-none`}
                  >
                    <img
                      src={item.image}
                      alt={item.caption}
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* Subtle Editorial Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161514]/85 via-[#161514]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                      <div className="flex items-center justify-between w-full">
                        <span
                          className="px-3 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-white font-semibold"
                          style={{ backgroundColor: item.accentHex }}
                        >
                          {item.pillarLabel}
                        </span>
                        <span className="w-9 h-9 bg-[#FAF8F5] text-[#161514] flex items-center justify-center">
                          <Expand className="w-4 h-4" />
                        </span>
                      </div>

                      <div className="text-[#FAF8F5]">
                        <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/75 mb-1">
                          {item.finishNote}
                        </p>
                        <p className="font-sans font-medium text-xl sm:text-2xl text-white">
                          {item.caption}
                        </p>
                      </div>
                    </div>

                    {/* Persistent Corner Pillar Badge */}
                    <div className="absolute top-4 left-4 bg-[#FAF8F5]/95 text-[#161514] px-3 py-1 border border-[#DDD6CC] text-[11px] font-mono uppercase tracking-[0.16em] font-semibold group-hover:opacity-0 transition-opacity duration-200">
                      {item.pillarLabel}
                    </div>
                  </button>

                  {/* Editorial Caption & Paint Swatch Footer */}
                  <figcaption className="p-6 sm:p-7 bg-[#FAF8F5] border-t border-[#DDD6CC]">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#5C564F] font-semibold">
                        {item.finishNote}
                      </span>

                      {/* Physical Swatch Chips */}
                      <div
                        className="flex items-center gap-1.5"
                        aria-label="Illustrative colour palette"
                      >
                        {item.paletteSwatches.map((hex, sIdx) => (
                          <span
                            key={`${item.id}-chip-${sIdx}`}
                            className="w-4 h-4 border border-black/15 inline-block"
                            style={{ backgroundColor: hex }}
                            title={`Illustrative tone ${hex}`}
                          />
                        ))}
                      </div>
                    </div>

                    <h3 className="font-sans font-semibold text-xl sm:text-2xl text-[#161514] tracking-[-0.02em] mb-2">
                      {item.caption}
                    </h3>

                    <p className="text-sm text-[#4A453F] leading-relaxed">
                      {item.description}
                    </p>
                  </figcaption>
                </motion.figure>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Illustrative Caption Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#DDD6CC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#5C564F]">
          <p>
            Illustrative paint captions, surface textures, and colour pairings
            are presented for creative inspiration and are not verified Bhatti
            Paints product names or technical specifications.
          </p>
          <a
            href="#products"
            className="font-semibold text-[#161514] hover:text-[#B5267F] transition-colors shrink-0"
          >
            Explore Paint Product Catalogue →
          </a>
        </div>
      </div>

      {/* ===================================================================
          INTERACTIVE LIGHTBOX MODAL
         =================================================================== */}
      <AnimatePresence>
        {activeLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeLightboxItem.caption}
            className="fixed inset-0 z-50 bg-[#161514]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl 3xl:max-w-7xl w-full bg-[#FAF8F5] text-[#161514] border border-[#DDD6CC] overflow-hidden shadow-2xl"
            >
              {/* Top Palette Bar */}
              <div className="flex h-2 w-full" aria-hidden="true">
                {activeLightboxItem.paletteSwatches.map((hex, idx) => (
                  <span
                    key={`lb-bar-${idx}`}
                    className="flex-1 h-full"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>

              {/* Lightbox Header */}
              <div className="px-6 py-4 border-b border-[#DDD6CC] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.18em] text-white font-semibold"
                    style={{ backgroundColor: activeLightboxItem.accentHex }}
                  >
                    {activeLightboxItem.pillarLabel}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#5C564F]">
                    {activeLightboxItem.filterCategory}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={closeLightbox}
                  aria-label="Close gallery lightbox"
                  className="p-2 rounded-full bg-[#F2EDE4] text-[#161514] hover:bg-[#161514] hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Lightbox Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-8 bg-[#161514] relative max-h-[65vh] overflow-hidden flex items-center justify-center">
                  <img
                    src={activeLightboxItem.image}
                    alt={activeLightboxItem.caption}
                    className="w-full h-full max-h-[65vh] object-cover"
                  />
                </div>

                <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF8F5]">
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-[0.18em] text-[#5C564F] font-semibold mb-2">
                      {activeLightboxItem.finishNote}
                    </span>
                    <h3 className="font-sans font-semibold text-2xl sm:text-3xl text-[#161514] tracking-[-0.02em] mb-4">
                      {activeLightboxItem.caption}
                    </h3>
                    <p className="text-sm sm:text-base text-[#4A453F] leading-relaxed mb-6">
                      {activeLightboxItem.description}
                    </p>

                    <div className="border-t border-[#E2DBD0] pt-5 mb-6">
                      <span className="block text-xs font-mono uppercase tracking-[0.18em] text-[#5C564F] font-semibold mb-3">
                        Illustrative Colour Harmonies:
                      </span>
                      <div className="flex items-center gap-2.5">
                        {activeLightboxItem.paletteSwatches.map((hex, i) => (
                          <div
                            key={`lb-sw-${i}`}
                            className="flex-1 border border-[#DDD6CC] bg-white p-1.5"
                          >
                            <div
                              className="h-10 w-full border border-black/10"
                              style={{ backgroundColor: hex }}
                            />
                            <span className="block font-mono text-[10px] text-[#5C564F] mt-1 text-center">
                              {hex}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Lightbox Navigation Controls */}
                  <div className="pt-4 border-t border-[#E2DBD0] flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={showPrev}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F2EDE4] text-[#161514] text-xs font-semibold uppercase tracking-wider hover:bg-[#161514] hover:text-white transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>
                    <span className="font-mono text-xs text-[#5C564F]">
                      {(lightboxIndex ?? 0) + 1} / {filteredItems.length}
                    </span>
                    <button
                      type="button"
                      onClick={showNext}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F2EDE4] text-[#161514] text-xs font-semibold uppercase tracking-wider hover:bg-[#161514] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
