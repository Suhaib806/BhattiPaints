"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const LOGO_ACCENT_BAR = [
  "#B5267F",
  "#C8283C",
  "#F08A1C",
  "#F2E40F",
  "#3FAE49",
  "#3CB8B0",
  "#1E73BE",
];

export default function LegacySection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-2.5%", "2.5%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="legacy-heading"
      className="relative bg-[#FAF8F5] text-[#161514] py-24 sm:py-32 lg:py-36 border-b border-[#E2DBD0] overflow-hidden"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* LEFT SIDE: Eyebrow, Large Headline, Authentic Copy, Single CTA, and Unified 1972 Heritage Element */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Small Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                className="inline-flex items-center gap-3 mb-6"
              >
                <span className="w-6 h-[2px] bg-[#B5267F]" aria-hidden="true" />
                <span className="text-xs  tracking-[0.22em] text-[#B5267F] font-bold">
                  Our Story
                </span>
              </motion.div>

              {/* Large Headline */}
              <h2
                id="legacy-heading"
                className="font-sans font-medium text-[3rem] sm:text-[4rem] lg:text-[4.5rem] xl:text-[4.9rem] leading-[1.02] tracking-[-0.035em] text-[#161514] mb-7"
              >
                <span className="block overflow-hidden pb-1">
                  <motion.span
                    initial={{ y: "105%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
                    className="block"
                  >
                    A Legacy Built
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <motion.span
                    initial={{ y: "105%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.85,
                      delay: 0.1,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="block text-[#5C564F] font-normal"
                  >
                    on{" "}
                    <span className="text-[#161514] font-medium">Colour.</span>
                  </motion.span>
                </span>
              </h2>

              {/* Short, Authentic Company Introduction */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: 0.2 }}
                className="text-lg sm:text-[1.18rem] text-[#4A453F] leading-[1.7] mb-9 max-w-md 3xl:max-w-xl"
              >
                Since 1972, Bhatti Paints has been part of the journey of bringing
                colour and character to spaces. Built on experience and a commitment to
                quality, our story continues with every wall transformed.
              </motion.p>

              {/* One Elegant CTA */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.75, delay: 0.28 }}
              >
                <a
                  href="#story"
                  className="group inline-flex items-center gap-3 text-base font-semibold text-[#161514] pb-1.5 border-b-2 border-[#161514] hover:text-[#B5267F] hover:border-[#B5267F] transition-colors duration-300"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>

            {/* Unified 1972 Heritage Treatment */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.19, 1, 0.22, 1] }}
              className="mt-14 lg:mt-20 pt-10 border-t border-[#E2DBD0]"
            >
              <div
                className="font-sans font-semibold text-[5.75rem] sm:text-[7.25rem] xl:text-[8.5rem] leading-[0.86] tracking-[-0.055em] text-[#161514] select-none"
                aria-label="1972"
              >
                1972
              </div>

              {/* Restrained Multi-Segment Bar Inspired by the Bhatti Paints Logo */}
              <div
                className="flex h-1.5 w-44 sm:w-52 mt-5 mb-4 overflow-hidden"
                aria-hidden="true"
              >
                {LOGO_ACCENT_BAR.map((hex) => (
                  <span
                    key={hex}
                    className="flex-1 h-full"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>

              <p className="text-xs  tracking-[0.22em] text-[#5C564F] font-semibold">
                Established in Bahawalpur, Pakistan
              </p>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Cohesive Architectural Interior + Integrated Paint Application Photography */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6 items-stretch h-full">
              {/* Dominant High-Quality Architectural Interior Photograph (8 Columns) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
                className="sm:col-span-8 relative overflow-hidden bg-[#EAE3D7] w-full h-[380px] sm:h-auto sm:min-h-[540px]"
              >
                <motion.img
                  style={{ y: imageY }}
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
                  alt="Contemporary living room with warm painted walls"
                  decoding="async"
                  className="
                    absolute -top-[3%] left-0 w-full h-[106%] object-cover object-center
                  "
                />
              </motion.div>

              {/* Naturally Integrated Close-Up of Real Paint Application + Subtle Physical Paint Samples (4 Columns) */}
              <div className="sm:col-span-4 flex flex-col justify-between gap-5 sm:gap-6">
                {/* Close-Up Photograph of Real Brushwork & Paint Texture */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.15,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                  className="relative overflow-hidden bg-[#161514] w-full h-[260px] sm:h-auto sm:flex-1 sm:min-h-[240px]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=85"
                    alt="Close-up of paint brush applying rich colour to a wall surface"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>

                {/* Subtle Physical Paint Swatch Card Element */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.75, delay: 0.3 }}
                  className="bg-[#F2EDE4] p-5 border border-[#E2DBD0]"
                >
                  <div
                    className="grid grid-cols-4 gap-2 mb-3.5"
                    aria-label="Illustrative wall paint tones"
                  >
                    <span className="h-14 bg-[#E8D9C4] border border-black/5 block" />
                    <span className="h-14 bg-[#C46247] border border-black/5 block" />
                    <span className="h-14 bg-[#7E9481] border border-black/5 block" />
                    <span className="h-14 bg-[#2B3A55] border border-black/5 block" />
                  </div>
                  <p className="text-xs text-[#5C564F] leading-relaxed">
                    Thoughtfully formulated finishes for interior walls, exterior
                    facades, and architectural surfaces.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
