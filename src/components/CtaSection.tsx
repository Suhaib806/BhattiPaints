"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative py-28 sm:py-36 lg:py-44 overflow-hidden bg-[#161514] text-white"
    >
      {/* Full-Width Architectural Interior Photograph + Rich Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt="Contemporary architectural interior with richly painted walls"
          loading="lazy"
          className="w-full h-full object-cover object-center"
        />
        {/* Base dark tint overlay */}
        <div className="absolute inset-0 bg-[#121110]/60" />
        {/* Directional editorial gradient overlay for crisp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/95 via-[#121110]/80 to-[#121110]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/85 via-transparent to-[#121110]/40" />
      </div>

      <div className="relative z-10 site-container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85 }}
          className="max-w-3xl 3xl:max-w-5xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 font-mono text-xs uppercase tracking-[0.2em] text-[#F08A1C] mb-6">
            Begin Your Colour Journey
          </span>

          <h2
            id="cta-heading"
            className="font-sans font-medium text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.02] tracking-[-0.03em] text-white mb-6"
          >
            Ready to Bring Your{" "}
            <span className="font-normal text-[#F2EDE4]">Walls to Life?</span>
          </h2>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl 3xl:max-w-2xl mb-10">
            Explore our paint solutions and find the colours that make your spaces feel
            like yours.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#161514] font-semibold text-base hover:bg-[#F08A1C] transition-all duration-300 shadow-lg"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-white font-semibold text-base hover:bg-white hover:text-[#161514] transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

