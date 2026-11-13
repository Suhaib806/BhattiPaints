"use client";

import React from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/config/siteConfig";

export default function WhyBhattiPaints() {
  return (
    <section
      id="why-bhatti"
      aria-labelledby="why-heading"
      className="py-24 sm:py-32 lg:py-40 bg-[#F2EDE4] text-[#161514] border-t border-[#DDD6CC]"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Architectural Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-[#5C564F] mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C8283C]" />
              <span>Brand Strength · Four Pillars</span>
            </div>

            <h2
              id="why-heading"
              className="font-sans font-medium text-4xl sm:text-5xl lg:text-[4rem] leading-[1.02] tracking-[-0.03em] text-[#161514] mb-6"
            >
              Why Bhatti{" "}
              <span className="font-semibold text-[#C8283C]">Paints?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#5C564F] leading-relaxed max-w-md 3xl:max-w-xl mb-10">
              For over five decades, our name has stood for consistency, thoughtful colour,
              and a genuine commitment to the homeowners and professionals who build and
              beautify our spaces.
            </p>

            {/* Subtle Geometric Prism Bar */}
            <div className="flex h-1.5 w-48 overflow-hidden rounded-full">
              {SITE_CONFIG.logoSpectrum.map((c) => (
                <span key={c.hex} className="flex-1" style={{ backgroundColor: c.hex }} />
              ))}
            </div>
          </div>

          {/* Right Column: Oversized Numbered Editorial Pillars (01–04) */}
          <div className="lg:col-span-7 divide-y divide-[#D2C9BC] border-t border-b border-[#D2C9BC]">
            {SITE_CONFIG.whyPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="group py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-12 gap-6 items-baseline hover:bg-[#FAF8F5]/60 px-4 -mx-4 transition-colors duration-300"
              >
                {/* Oversized Editorial Serif Number */}
                <div className="sm:col-span-3 flex items-baseline gap-3">
                  <span
                    className="font-serif text-6xl sm:text-7xl leading-none tracking-tight transition-colors duration-300"
                    style={{ color: pillar.accent }}
                  >
                    {pillar.number}
                  </span>
                  <span className="font-mono text-xs text-[#5C564F]">/ 04</span>
                </div>

                {/* Pillar Content */}
                <div className="sm:col-span-9">
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#161514] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-lg font-medium text-[#161514]/90 mb-3">
                    {pillar.description}
                  </p>
                  <p className="text-sm sm:text-base text-[#5C564F] leading-relaxed max-w-xl 3xl:max-w-2xl">
                    {pillar.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

