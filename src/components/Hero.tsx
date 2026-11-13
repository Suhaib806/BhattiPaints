"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, Layers } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

export default function Hero() {
  const [activeMoodIndex, setActiveMoodIndex] = useState(0);
  const activeMood = SITE_CONFIG.heroMoods[activeMoodIndex];

  return (
    <section
      id="home"
      aria-label="Hero"
      className="relative min-h-screen w-full overflow-hidden bg-[#161514] text-[#FAF8F5] flex flex-col justify-between pt-32 pb-10 lg:pt-36 lg:pb-14"
    >
      {/* Full-Viewport Architectural Interior Photograph with Clip/Mask Entrance */}
      <motion.div
        initial={{ clipPath: "inset(6% 4% 6% 4%)", scale: 1.08 }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
        transition={{ duration: 1.4, ease: [0.19, 1, 0.22, 1] }}
        className="absolute inset-0 z-0"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeMood.id}
            src={activeMood.image}
            alt={activeMood.roomLabel}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="w-full h-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Subtle wall pigment wash + architectural vignette for flawless editorial legibility */}
        <div
          className="absolute inset-0 transition-colors duration-700 mix-blend-multiply"
          style={{ backgroundColor: activeMood.wallOverlay }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/90 via-[#121110]/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/90 via-transparent to-black/35" />
      </motion.div>

      {/* Main Asymmetric Editorial Grid */}
      <div className="relative z-10 site-container my-auto py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left Column: Heritage Label, Editorial Headline, Copy, CTAs */}
          <div className="lg:col-span-8 max-w-3xl 3xl:max-w-5xl 4xl:max-w-6xl">
            {/* Small Heritage Label + Subtle Colour-Inspired Prism Detail */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-7"
            >
              {/* Mini geometric prism inspired by the Bhatti Paints 'B' mark */}
              <span className="flex items-center -space-x-1" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C8283C]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F08A1C]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3FAE49]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E73BE]" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-white/95 font-medium">
                TRUSTED SINCE 1972 · BAHAWALPUR
              </span>
            </motion.div>

            {/* Staggered Editorial Headline Reveal */}
            <h1 className="font-sans font-medium text-[2rem]  sm:text-5xl lg:text-[3.85rem] xl:text-[5.0rem] leading-[1.02] tracking-[-0.035em] text-white mb-7">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.95, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
                  className="block"
                >
                  Every Wall Has a Story.
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.95, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
                  className="block"
                >
                  <span className="font-normal text-[#F2EDE4]">Make Yours</span>{" "}
                  <span
                    className="font-semibold bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(95deg, #FFFFFF 0%, #F5E6D3 55%, #F08A1C 100%)",
                    }}
                  >
                    Colourful.
                  </span>
                </motion.span>
              </span>
            </h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="text-lg sm:text-xl text-white/85 max-w-xl 3xl:max-w-2xl 4xl:max-w-3xl leading-relaxed font-normal mb-9"
            >
              {SITE_CONFIG.company.heroSupportingText}
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#colour-inspiration"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#161514] font-semibold text-base tracking-wide hover:bg-[#F08A1C] hover:text-[#fff] transition-all duration-300 shadow-lg"
              >
                <span>Explore Our Colours</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm text-white font-semibold text-base tracking-wide hover:bg-white/15 hover:border-white transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-[#F08A1C]" />
                <span>Discover Bhatti Paints</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Benjamin Moore-inspired Interactive Architectural Swatch Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.95 }}
            className="lg:col-span-4 flex lg:justify-end"
          >
            <div className="w-full max-w-sm 3xl:max-w-md 4xl:max-w-lg rounded-2xl bg-[#FAF8F5]/95 backdrop-blur-md text-[#161514] p-5 sm:p-6 shadow-2xl border border-white/40">
              {/* <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#5C564F] mb-3">
                <span className="inline-flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#C8283C]" />
                  <span>Featured Room Shade</span>
                </span>
                <span>{activeMood.code}</span>
              </div> */}

              {/* Large Tactile Paint Chip */}
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white border border-[#DDD6CC] mb-4">
                <div
                  className="w-16 h-16 rounded-lg shadow-inner border border-black/10 shrink-0 transition-colors duration-500"
                  style={{ backgroundColor: activeMood.hex }}
                />
                <div>
                  <h2 className="font-serif text-2xl text-[#161514] leading-tight">
                    {activeMood.name}
                  </h2>
                  <p className="text-xs text-[#5C564F] mt-0.5">{activeMood.roomLabel}</p>
                  <span className="inline-block font-mono text-[11px] text-[#5C564F]/80 mt-1">
                    {activeMood.hex} · Illustrative Inspiration
                  </span>
                </div>
              </div>

              {/* Switch Hero Mood Swatches */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs font-medium text-[#5C564F]">
                  Preview room mood:
                </span>
                <div className="flex items-center gap-2">
                  {SITE_CONFIG.heroMoods.map((mood, idx) => (
                    <button
                      key={mood.id}
                      type="button"
                      onClick={() => setActiveMoodIndex(idx)}
                      aria-label={`Preview ${mood.name} room mood`}
                      aria-pressed={activeMoodIndex === idx}
                      title={`${mood.name} (${mood.code})`}
                      className={`w-7 h-7 rounded-full transition-all duration-200 cursor-pointer ${activeMoodIndex === idx
                        ? "ring-2 ring-offset-2 ring-[#161514] scale-110"
                        : "opacity-80 hover:opacity-100 hover:scale-105"
                        }`}
                      style={{ backgroundColor: mood.hex }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Architectural Bar & Logo Prism Ribbon */}
      {/* <div className="relative z-10 site-container">
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/75">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-mono uppercase tracking-[0.18em] text-white/90">
              EST. 1972 · BAHAWALPUR, PUNJAB
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span>Interior · Exterior · Decorative · Protective · Primers</span>
          </div>
          <a
            href="#colour-inspiration"
            className="inline-flex items-center gap-2 font-medium text-white hover:text-[#F08A1C] transition-colors"
          >
            <span>Open Interactive Room Visualizer</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div> */}

      {/* Subtle Bottom Pigment Spectrum Line Inspired by Bhatti Paints Logo */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 flex z-20" aria-hidden="true">
        {SITE_CONFIG.logoSpectrum.map((item) => (
          <div
            key={item.hex}
            className="flex-1 h-full"
            style={{ backgroundColor: item.hex }}
          />
        ))}
      </div>
    </section>
  );
}

