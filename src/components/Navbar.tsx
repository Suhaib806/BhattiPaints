"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Calculator, Sparkles, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/config/siteConfig";

interface NavbarProps {
  onOpenCalculator: () => void;
}

export default function Navbar({ onOpenCalculator }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_1px_0_0_#DDD6CC] text-[#161514]"
            : "bg-gradient-to-b from-black/65 via-black/30 to-transparent text-white"
        }`}
      >
        {/* Benjamin Moore-inspired Utility Micro-Bar */}
        <div
          className={`border-b transition-colors duration-500 text-xs tracking-wider uppercase ${
            scrolled
              ? "border-[#DDD6CC]/70 bg-[#F2EDE4]/80 text-[#5C564F]"
              : "border-white/15 bg-black/25 text-white/85"
          }`}
        >
          <div className="site-container h-9 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 font-medium">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#F08A1C]" />
                <span>Trusted Since {SITE_CONFIG.company.established}</span>
              </span>
              <span className="opacity-40">·</span>
              <span className="hidden sm:inline">{SITE_CONFIG.company.location}</span>
            </div>

            <div className="flex items-center gap-5">
              <a
                href="#colour-inspiration"
                className="hidden md:inline-flex items-center gap-1.5 hover:opacity-100 opacity-85 transition-opacity"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#F08A1C]" />
                <span>Colour a Room</span>
              </a>
              <button
                type="button"
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-1.5 hover:opacity-100 opacity-85 transition-opacity cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-[#3CB8B0]" />
                <span>Paint Estimator</span>
              </button>
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1 font-semibold hover:underline"
              >
                <span>Dealer &amp; Trade Inquiry</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Row */}
        <div className="site-container h-20 lg:h-24 flex items-center justify-between gap-6">
          {/* Official Bhatti Paints Logo — Preserved Proportions */}
          <a
            href="#home"
            aria-label="Bhatti Paints (Pvt.) Ltd. — Home"
            className="relative group inline-flex items-center focus:outline-none"
          >
            <div
              className={`transition-all duration-500 rounded-sm overflow-hidden flex items-center ${
                scrolled
                  ? "bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-black/5"
                  : "bg-white px-3 py-2 shadow-lg"
              }`}
            >
              <img
                src="/bhatti-logo.jpg"
                alt="Bhatti Paints (Pvt.) Ltd. — Since 1972"
                className="h-10 sm:h-12 lg:h-[52px] w-auto object-contain block"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-8"
          >
            {SITE_CONFIG.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-2 text-[15px] font-medium tracking-wide transition-colors duration-300 group ${
                  scrolled
                    ? "text-[#161514] hover:text-[#C8283C]"
                    : "text-white/95 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #C8283C, #F08A1C, #3FAE49, #1E73BE)",
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Right CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <a
              href="#products"
              className={`hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                scrolled
                  ? "bg-[#161514] text-[#FAF8F5] hover:bg-[#C8283C] hover:text-white"
                  : "bg-white text-[#161514] hover:bg-[#F2EDE4]"
              }`}
            >
              <span>Explore Our Products</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`xl:hidden inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-semibold transition-colors ${
                scrolled
                  ? "border-[#161514]/25 text-[#161514] bg-[#FAF8F5]"
                  : "border-white/40 text-white bg-black/30 backdrop-blur-sm"
              }`}
            >
              {mobileMenuOpen ? (
                <>
                  <X className="w-4 h-4" />
                  <span>Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4" />
                  <span>Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Editorial Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-4%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-4%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#161514] text-[#FAF8F5] pt-32 pb-10 px-6 sm:px-12 flex flex-col justify-between overflow-y-auto"
          >
            {/* Subtle top pigment bar */}
            <div className="flex h-1 w-full mb-8 rounded-full overflow-hidden">
              {SITE_CONFIG.logoSpectrum.map((c) => (
                <span key={c.hex} className="flex-1" style={{ backgroundColor: c.hex }} />
              ))}
            </div>

            <nav aria-label="Mobile Navigation" className="flex flex-col space-y-3">
              {SITE_CONFIG.navigation.map((item, idx) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.35 }}
                  className="group flex items-baseline justify-between py-3 border-b border-white/10 font-serif text-4xl sm:text-5xl text-[#FAF8F5] hover:text-[#F08A1C] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-white/40 group-hover:text-[#F08A1C]">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="mt-10 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-1">
                  Heritage &amp; Craft
                </p>
                <p className="text-sm text-white/80">
                  {SITE_CONFIG.company.name} · Established {SITE_CONFIG.company.established},{" "}
                  {SITE_CONFIG.company.city}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#products"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#161514] font-semibold text-sm"
                >
                  <span>Explore Our Products</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCalculator();
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Paint Estimator</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

