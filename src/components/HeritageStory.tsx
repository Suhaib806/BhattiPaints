"use client";

import React from "react";
import { motion } from "framer-motion";
import { Camera, MapPin } from "lucide-react";

export default function HeritageStory() {
  return (
    <section
      id="story"
      aria-labelledby="heritage-heading"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF8F5] text-[#161514] overflow-hidden"
    >
      <div className="site-container">
        {/* Top Meta Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10 mb-16 border-b border-[#DDD6CC]">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-[#5C564F]">
            <MapPin className="w-3.5 h-3.5 text-[#B5267F]" />
            <span>Our Heritage · Bahawalpur, Pakistan</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#5C564F]">
            1972 — Present
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-6"
          >
            <div className="font-serif text-7xl sm:text-8xl lg:text-9xl text-[#E6DFD3] leading-none select-none mb-2">
              1972
            </div>

            <h2
              id="heritage-heading"
              className="font-sans font-medium text-4xl sm:text-5xl lg:text-[3.9rem] leading-[1.03] tracking-[-0.03em] text-[#161514] mb-7"
            >
              Over Five Decades{" "}
              <span className="block font-normal text-[#B5267F] mt-1">
                of Colour.
              </span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#5C564F] leading-relaxed max-w-xl 3xl:max-w-2xl">
              <p className="text-[#161514] font-medium text-lg sm:text-xl">
                Established in 1972 in the historic city of Bahawalpur, Bhatti Paints (Pvt.)
                Ltd. began with a clear purpose: to bring dependable paint solutions and
                expressive colour to the homes and commercial spaces of our community.
              </p>
              <p>
                Across generations, painting a home in Pakistan has always marked moments of
                renewal—welcoming family, celebrating milestones, and caring for the spaces
                where life unfolds. Our heritage is built on those personal relationships
                with homeowners, master painters, contractors, and architects.
              </p>
              <p className="text-sm bg-[#F2EDE4] p-4 rounded-xl border-l-4 border-[#F08A1C] text-[#5C564F]">
                <strong className="text-[#161514] block mb-0.5 font-mono text-xs uppercase tracking-wider">
                  Editorial Note (Editable Founder &amp; Milestone Story):
                </strong>
                Add verified founder names, early shopfront history, and company milestones
                in <code className="font-mono text-xs">src/config/siteConfig.ts</code> when
                ready for publication.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Archival Photography Frame + Modern Paint Craftsmanship */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
            {/* Archival Photograph Placeholder Frame */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85 }}
              className="sm:col-span-7 bg-[#F2EDE4] p-4 sm:p-6 border border-[#D5CBBF] shadow-lg"
            >
              <div className="aspect-[4/5] border border-dashed border-[#9E9589] bg-[#E8E1D5] flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                {/* Subtle sepia archival grain texture */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(22,21,20,0.04) 10px, rgba(22,21,20,0.04) 20px)",
                  }}
                />
                <Camera className="w-8 h-8 text-[#5C564F] mb-3 relative z-10" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#B5267F] font-semibold mb-2 relative z-10">
                  Archival Plate · Est. 1972
                </span>
                <p className="font-serif text-2xl text-[#161514] mb-2 relative z-10">
                  Original Bahawalpur Shopfront or Founder Portrait
                </p>
                <p className="text-xs text-[#5C564F] max-w-xs leading-relaxed relative z-10">
                  Reserved for an authentic historical photograph from the Bhatti Paints
                  company archive.
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[#5C564F]">
                <span>ARCHIVE REF · BP-1972</span>
                <span>BAHAWALPUR</span>
              </div>
            </motion.div>

            {/* Modern Paint Craftsmanship Counterpart */}
            <motion.figure
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="sm:col-span-5"
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#161514] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=900&q=85"
                  alt="Modern paint application and colour craftsmanship"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-[#5C564F]">
                <strong className="text-[#161514] block font-mono uppercase tracking-wider">
                  Present Day
                </strong>
                Continuing the craft for contemporary homes and architecture.
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}

