"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, MessageSquare, Package } from "lucide-react";
import {
  SITE_CONFIG,
  CatalogueProduct,
  CustomerSolution,
} from "@/config/siteConfig";

/**
 * Studio-Lit 3D-Shaded Paint Container Mockup
 * Models authentic Pakistani paint packaging forms (inspired by Brighto Paints container proportions):
 * - "plastic-drum": Tall tapered 16L / 14.56L plastic emulsion drum with ribbed lid & bail handle
 * - "gallon-bucket": Medium 4L / 3.64L plastic gallon pail with coloured snap lid
 * - "metal-tin": Cylindrical 3.64L / 0.91L tinplate enamel can with recessed metallic lid
 * - "texture-tub": Wide-mouth 24KG / 6KG heavy-duty acrylic texture tub
 *
 * Automatically replaced by `product.officialProductImageUrl` whenever an official
 * Bhatti Paints studio product photograph is configured in `siteConfig.ts`.
 */
function PaintContainerStudioVisual({
  product,
  selectedSize,
}: {
  product: CatalogueProduct;
  selectedSize: string;
}) {
  // If official Bhatti Paints studio photography is configured, render it directly
  if (product.officialProductImageUrl) {
    return (
      <img
        src={product.officialProductImageUrl}
        alt={`${product.name} (${selectedSize}) paint container`}
        loading="lazy"
        className="w-48 sm:w-56 h-56 object-contain drop-shadow-[0_24px_28px_rgba(22,21,20,0.22)] transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  // Slight scale variation based on selected pack size (Quarter / Gallon / Drum)
  const sizeIndex = product.availableSizes.indexOf(selectedSize);
  const totalSizes = product.availableSizes.length;
  const scaleFactor =
    totalSizes <= 1
      ? 1
      : 0.88 + (Math.max(0, sizeIndex) / (totalSizes - 1)) * 0.14;

  const uid = product.id;
  const isMetal = product.containerStyle === "metal-tin";
  const isTub = product.containerStyle === "texture-tub";
  const isGallon = product.containerStyle === "gallon-bucket";

  return (
    <div
      className="relative flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.04]"
      style={{ transform: `scale(${scaleFactor.toFixed(3)})` }}
    >
      <svg
        viewBox="0 0 300 340"
        className="w-52 sm:w-60 h-auto select-none overflow-visible"
        role="img"
        aria-label={`${product.name} ${selectedSize} prototype paint container`}
      >
        <defs>
          {/* Studio Cylinder Body Lighting (Warm White Moulded Plastic or Brushed Tin) */}
          <linearGradient id={`bodyGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={isMetal ? "#D0CCC4" : "#E2DDD5"} />
            <stop offset="18%" stopColor={isMetal ? "#F4F2EE" : "#FCFBF9"} />
            <stop offset="45%" stopColor="#FFFFFF" />
            <stop offset="76%" stopColor={isMetal ? "#E5E1D9" : "#EFECE6"} />
            <stop offset="93%" stopColor={isMetal ? "#BEB8AE" : "#D5CFC6"} />
            <stop offset="100%" stopColor={isMetal ? "#A6A096" : "#C2BBB0"} />
          </linearGradient>

          {/* Dynamic Product Colour Band Gradient */}
          <linearGradient id={`bandGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={product.secondaryBandColor} />
            <stop offset="28%" stopColor={product.bandColor} />
            <stop offset="65%" stopColor={product.bandColor} />
            <stop offset="100%" stopColor={product.secondaryBandColor} />
          </linearGradient>

          {/* Lid Rim 3D Shading */}
          <linearGradient id={`lidGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={product.secondaryBandColor} />
            <stop offset="30%" stopColor={product.lidColor} />
            <stop offset="70%" stopColor={product.lidColor} />
            <stop offset="100%" stopColor={product.secondaryBandColor} />
          </linearGradient>

          {/* Metallic Chrome Lid for Enamel / Aluminium Tins */}
          <linearGradient id={`chromeGrad-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9E9A92" />
            <stop offset="25%" stopColor="#ECEAE4" />
            <stop offset="52%" stopColor="#FFFFFF" />
            <stop offset="80%" stopColor="#C9C5BC" />
            <stop offset="100%" stopColor="#8A867E" />
          </linearGradient>

          {/* Bhatti Paints Logo Prism Strip */}
          <linearGradient id={`prism-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B5267F" />
            <stop offset="18%" stopColor="#C8283C" />
            <stop offset="36%" stopColor="#F08A1C" />
            <stop offset="54%" stopColor="#F2E40F" />
            <stop offset="72%" stopColor="#3FAE49" />
            <stop offset="88%" stopColor="#3CB8B0" />
            <stop offset="100%" stopColor="#1E73BE" />
          </linearGradient>

          {/* Specular Studio Vertical Highlight */}
          <linearGradient id={`shine-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="32%" stopColor="rgba(255,255,255,0.38)" />
            <stop offset="48%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.12)" />
          </linearGradient>
        </defs>

        {/* Studio Floor Contact Shadow */}
        <ellipse
          cx="150"
          cy="308"
          rx={isTub ? "106" : isMetal ? "84" : "92"}
          ry="15"
          fill="rgba(22, 21, 20, 0.20)"
        />
        <ellipse
          cx="150"
          cy="306"
          rx={isTub ? "86" : isMetal ? "68" : "74"}
          ry="9"
          fill="rgba(22, 21, 20, 0.26)"
        />

        {/* Wire / Plastic Bail Handle */}
        <path
          d={
            isTub
              ? "M 42 118 C 32 235, 268 235, 258 118"
              : "M 50 105 C 40 218, 260 218, 250 105"
          }
          fill="none"
          stroke="#8C867E"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* Black Ergonomic Grip on Bail Handle */}
        <rect
          x="124"
          y={isTub ? "198" : "184"}
          width="52"
          height="11"
          rx="5.5"
          fill="#262423"
        />

        {/* ============================================================
            CONTAINER BODY SILHOUETTE (Tapered Bucket vs Cylindrical Tin)
           ============================================================ */}
        {isMetal ? (
          /* Cylindrical Metal Enamel Tin */
          <g>
            {/* Main Metal Can Cylinder */}
            <path
              d="M 62 72 L 238 72 L 238 292 C 238 304, 62 304, 62 292 Z"
              fill={`url(#bodyGrad-${uid})`}
            />
            {/* Bottom Rolled Metal Seam */}
            <ellipse
              cx="150"
              cy="294"
              rx="89"
              ry="12"
              fill={`url(#chromeGrad-${uid})`}
            />
            {/* Upper Label Wrap */}
            <rect x="62" y="84" width="176" height="198" fill={`url(#bodyGrad-${uid})`} />

            {/* Dynamic Colour Wave / Band Inspired by Real Paint Tins */}
            <path
              d="M 62 178 Q 150 162, 238 178 L 238 268 Q 150 278, 62 268 Z"
              fill={`url(#bandGrad-${uid})`}
            />
            {/* Prism Accent Ribbon */}
            <path
              d="M 62 174 Q 150 158, 238 174 L 238 180 Q 150 164, 62 180 Z"
              fill={`url(#prism-${uid})`}
            />

            {/* Top Recessed Chrome Lid */}
            <ellipse
              cx="150"
              cy="72"
              rx="90"
              ry="15"
              fill={`url(#chromeGrad-${uid})`}
            />
            <ellipse
              cx="150"
              cy="70"
              rx="82"
              ry="11"
              fill="#D8D4CC"
              stroke="#9E9A92"
              strokeWidth="1.5"
            />
            <ellipse
              cx="150"
              cy="71"
              rx="66"
              ry="8"
              fill={`url(#chromeGrad-${uid})`}
              stroke="#ABA69E"
              strokeWidth="1"
            />
            {/* Metal Handle Ears */}
            <rect x="54" y="88" width="9" height="18" rx="3" fill="#9E9A92" />
            <rect x="237" y="88" width="9" height="18" rx="3" fill="#9E9A92" />
          </g>
        ) : (
          /* Tapered Moulded Plastic Drum / Gallon / Texture Tub */
          <g>
            {/* Tapered Bucket Body */}
            <path
              d={
                isTub
                  ? "M 44 92 L 256 92 L 240 292 C 240 306, 60 306, 60 292 Z"
                  : isGallon
                    ? "M 56 80 L 244 80 L 230 292 C 230 304, 70 304, 70 292 Z"
                    : "M 50 64 L 250 64 L 232 294 C 232 307, 68 307, 68 294 Z"
              }
              fill={`url(#bodyGrad-${uid})`}
            />

            {/* Curved Colour Packaging Band */}
            <path
              d={
                isTub
                  ? "M 52 184 Q 150 168, 248 184 L 241 278 Q 150 290, 59 278 Z"
                  : isGallon
                    ? "M 62 178 Q 150 162, 238 178 L 231 276 Q 150 288, 69 276 Z"
                    : "M 58 172 Q 150 154, 242 172 L 233 278 Q 150 291, 67 278 Z"
              }
              fill={`url(#bandGrad-${uid})`}
            />

            {/* Bhatti Prism Spectrum Strip Above Colour Band */}
            <path
              d={
                isTub
                  ? "M 51 178 Q 150 162, 249 178 L 248 185 Q 150 169, 52 185 Z"
                  : isGallon
                    ? "M 61 172 Q 150 156, 239 172 L 238 179 Q 150 163, 62 179 Z"
                    : "M 57 166 Q 150 148, 243 166 L 242 173 Q 150 155, 58 173 Z"
              }
              fill={`url(#prism-${uid})`}
            />

            {/* Upper Bucket Reinforcement Collar Ring */}
            <path
              d={
                isTub
                  ? "M 41 92 C 41 104, 259 104, 259 92 L 257 104 C 257 115, 43 115, 43 104 Z"
                  : isGallon
                    ? "M 53 80 C 53 92, 247 92, 247 80 L 245 92 C 245 102, 55 102, 55 92 Z"
                    : "M 47 64 C 47 76, 253 76, 253 64 L 251 77 C 251 88, 49 88, 49 77 Z"
              }
              fill="rgba(0,0,0,0.08)"
            />

            {/* Coloured Moulded Ribbed Lid */}
            <ellipse
              cx="150"
              cy={isTub ? "88" : isGallon ? "76" : "60"}
              rx={isTub ? "110" : isGallon ? "98" : "104"}
              ry="14"
              fill={
                product.containerStyle === "plastic-drum"
                  ? `url(#lidGrad-${uid})`
                  : "#EAE5DC"
              }
            />
            <rect
              x={isTub ? "40" : isGallon ? "52" : "46"}
              y={isTub ? "76" : isGallon ? "64" : "46"}
              width={isTub ? "220" : isGallon ? "196" : "208"}
              height="13"
              rx="4"
              fill={`url(#lidGrad-${uid})`}
            />
            <ellipse
              cx="150"
              cy={isTub ? "76" : isGallon ? "64" : "46"}
              rx={isTub ? "110" : isGallon ? "98" : "104"}
              ry="13"
              fill={`url(#lidGrad-${uid})`}
            />
            {/* Inner Lid Top Surface */}
            <ellipse
              cx="150"
              cy={isTub ? "75" : isGallon ? "63" : "45"}
              rx={isTub ? "96" : isGallon ? "85" : "90"}
              ry="9"
              fill="rgba(255,255,255,0.22)"
            />
          </g>
        )}

        {/* ============================================================
            BRANDING & PRODUCT TYPOGRAPHY ON CONTAINER FACE
           ============================================================ */}
        {/* Multi-colour Geometric Emblem Mark */}
        <g transform={`translate(133, ${isTub ? 105 : isGallon ? 95 : 85})`}>
          <polygon points="0,12 9,0 18,12" fill="#C8283C" />
          <polygon points="9,0 18,12 27,0" fill="#F08A1C" />
          <polygon points="18,12 27,0 34,12" fill="#3FAE49" />
          <polygon points="9,12 18,22 27,12" fill="#1E73BE" />
        </g>

        {/* Brand Name */}
        <text
          x="150"
          y={isTub ? "138" : isGallon ? "130" : "122"}
          textAnchor="middle"
          fill="#161514"
          fontFamily="Moderat, Plus Jakarta Sans, sans-serif"
          fontWeight="700"
          fontSize="16.5"
          letterSpacing="2.2"
        >
          BHATTI PAINTS
        </text>

        {/* Heritage Sub-label */}
        <text
          x="150"
          y={isTub ? "151" : isGallon ? "143" : "136"}
          textAnchor="middle"
          fill="#5C564F"
          fontFamily="Moderat, Plus Jakarta Sans, sans-serif"
          fontWeight="600"
          fontSize="7.5"
          letterSpacing="2.4"
        >
          BAHAWALPUR · EST. 1972
        </text>

        {/* Product Name on Coloured Band */}
        <text
          x="150"
          y={isTub ? "220" : isGallon ? "214" : "212"}
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Moderat, Plus Jakarta Sans, sans-serif"
          fontWeight="700"
          fontSize={product.name.length > 14 ? "18" : "21"}
          letterSpacing="-0.4"
        >
          {product.name}
        </text>

        {/* Product Series Subtitle on Coloured Band */}
        <text
          x="150"
          y={isTub ? "238" : isGallon ? "232" : "231"}
          textAnchor="middle"
          fill="rgba(255,255,255,0.88)"
          fontFamily="Moderat, Plus Jakarta Sans, sans-serif"
          fontWeight="500"
          fontSize="9.5"
          letterSpacing="0.8"
        >
          {product.seriesLabel.toUpperCase()}
        </text>

        {/* Live Selected Pack Size Badge on Container */}
        <rect
          x="112"
          y={isTub ? "248" : isGallon ? "243" : "243"}
          width="76"
          height="20"
          rx="10"
          fill="rgba(22, 21, 20, 0.35)"
        />
        <text
          x="150"
          y={isTub ? "261.5" : isGallon ? "256.5" : "256.5"}
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Moderat Mono, monospace"
          fontWeight="700"
          fontSize="10"
          letterSpacing="1"
        >
          NET {selectedSize.toUpperCase()}
        </text>

        {/* Specular Cylinder Lighting Overlay */}
        <rect
          x="65"
          y="75"
          width="170"
          height="210"
          fill={`url(#shine-${uid})`}
          pointerEvents="none"
          style={{ mixBlendMode: "soft-light" }}
        />
      </svg>
    </div>
  );
}

const FILTER_TABS = [
  { id: "all", label: "All Products", dotColor: "#C8283C" },
  { id: "interior-wall-paints", label: "Interior Wall Paints", dotColor: "#B5267F" },
  { id: "exterior-wall-paints", label: "Exterior Wall Paints", dotColor: "#F08A1C" },
  { id: "decorative-paints", label: "Decorative & Texture", dotColor: "#3FAE49" },
  { id: "protective-coatings", label: "Enamels & Protective", dotColor: "#1E73BE" },
  { id: "primers-undercoats", label: "Primers & Undercoats", dotColor: "#3CB8B0" },
] as const;

export default function ProductCategories() {
  const products = SITE_CONFIG.catalogueProducts;
  const solutions = SITE_CONFIG.professionals;

  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Track selected container size per product ID
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>(
    () =>
      Object.fromEntries(products.map((p) => [p.id, p.defaultSize]))
  );

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.categoryId === activeCategory);

  const whatsappHref = SITE_CONFIG.contact.whatsapp
    ? `https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/\D/g, "")}`
    : "#contact";

  const handleSelectSize = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <>
      {/* =====================================================================
          SECTION 1: PRODUCT DISCOVERY — PAINT CONTAINER CATALOGUE
          Main Heading: "Find the Perfect Finish."
          Supporting Text: "Explore paint solutions designed to bring colour,
          character, and lasting beauty to every surface."
         ===================================================================== */}
      <section
        id="products"
        aria-labelledby="products-heading"
        className="py-24 sm:py-32 lg:py-36 bg-[#F2EDE4] text-[#161514] border-b border-[#DDD6CC]"
      >
        <div className="site-container">
          {/* Editorial Section Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-10 mb-10 border-b border-[#D8D0C5]">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="w-6 h-[2px] bg-[#1E73BE]" aria-hidden="true" />
                <span className="text-xs uppercase tracking-[0.22em] text-[#1E73BE] font-semibold">
                  PRODUCT CATALOGUE, ARCHITECTURAL &amp; DECORATIVE PAINTS
                </span>
              </div>
              <h2
                id="products-heading"
                className="font-sans font-medium text-[2.75rem] sm:text-5xl lg:text-[4.25rem] leading-[1.03] tracking-[-0.035em] text-[#161514]"
              >
                Find the Perfect Finish.
              </h2>
            </div>

            <div className="lg:col-span-5 lg:pl-6">
              <p className="text-base sm:text-lg text-[#4A453F] leading-[1.68]">
                Explore paint solutions designed to bring colour, character, and
                lasting beauty to every surface.
              </p>
            </div>
          </div>

          {/* Category Filter Bar + Prototype Reference Notice */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 mb-12">
            {/* Category Filter Buttons */}
            <div
              role="tablist"
              aria-label="Filter paint products by category"
              className="flex flex-wrap items-center gap-2.5"
            >
              {FILTER_TABS.map((tab) => {
                const isActive = activeCategory === tab.id;
                const count =
                  tab.id === "all"
                    ? products.length
                    : products.filter((p) => p.categoryId === tab.id).length;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`shrink-0 inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border ${isActive
                      ? "bg-[#161514] text-[#FAF8F5] border-[#161514] shadow-md"
                      : "bg-[#FAF8F5] text-[#161514] border-[#DDD6CC] hover:border-[#161514] hover:bg-white"
                      }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-black/15 shrink-0"
                      style={{ backgroundColor: tab.dotColor }}
                      aria-hidden="true"
                    />
                    <span>{tab.label}</span>
                    <span
                      className={`font-mono text-[11px] px-2 py-0.5 rounded-full ${isActive
                        ? "bg-white/15 text-white"
                        : "bg-[#EAE3D7] text-[#5C564F]"
                        }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Clear Prototype Packaging Attribution Notice */}
            {/* <div className="inline-flex items-center gap-2.5 px-3.5 py-2 bg-[#FAF8F5] border border-[#DDD6CC] text-xs text-[#5C564F]">
              <Package className="w-4 h-4 text-[#B5267F] shrink-0" />
              <span>
                Neutral prototype container mockups — ready for official Bhatti
                Paints pack photography in{" "}
                <code className="font-mono text-[#161514]">siteConfig.ts</code>
              </span>
            </div> */}
          </div>

          {/* =================================================================
              PAINT CONTAINER PRODUCT CATALOGUE GRID
              Large paint bucket visuals at center stage on studio pedestals
             ================================================================= */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 gap-7 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product: CatalogueProduct) => {
                const currentSize =
                  selectedSizes[product.id] || product.defaultSize;

                return (
                  <motion.article
                    layout
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    className="group bg-[#FAF8F5] border border-[#DDD6CC] hover:border-[#161514] rounded-xl transition-colors duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div>
                      {/* Top Colour Band Accent */}
                      {/* <div
                        className="h-1.5 w-full"
                        style={{ backgroundColor: product.bandColor }}
                        aria-hidden="true"
                      /> */}

                      {/* Studio Pedestal Stage — Paint Container Is the Hero */}
                      <div
                        className="relative pt-8 pb-6 px-6 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[320px] border-b border-[#E6DFD3]  overflow-hidden"
                        style={{
                          background: `radial-gradient(circle at 50% 42%, #FFFFFF 0%, #F5F1E9 65%, #EAE3D7 100%)`,
                        }}
                      >
                        {/* Top Metadata Row Inside Stage */}
                        <div className="w-full flex items-center justify-between gap-2 mb-2 z-10">
                          {/* <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#5C564F] font-semibold">
                            {product.code}
                          </span> */}
                          <span
                            className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.16em] font-semibold text-white"
                            style={{ backgroundColor: product.bandColor }}
                          >
                            {product.categoryLabel}
                          </span>
                        </div>

                        {/* Centerpiece Paint Bucket / Tin Container */}
                        <div className="my-2 z-10">
                          <PaintContainerStudioVisual
                            product={product}
                            selectedSize={currentSize}
                          />
                        </div>

                        {/* Bottom Prototype / Pack Type Tag */}
                        {/* <div className="w-full flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.16em] text-[#5C564F] mt-1 z-10">
                          <span>
                            {product.officialProductImageUrl
                              ? "Official Pack"
                              : "Prototype Mockup"}
                          </span>
                          <span className="text-[#161514] font-semibold">
                            Selected: {currentSize}
                          </span>
                        </div> */}
                      </div>

                      {/* Product Specifications & Details */}
                      <div className="p-6 sm:p-7">
                        {/* Finish Type Pill */}
                        {/* <div className="inline-flex items-center gap-2 mb-2.5">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: product.bandColor }}
                          />
                          <span className="text-xs  tracking-[0.16em] font-semibold text-[#]">
                            Finish: {product.finishType}
                          </span>
                        </div> */}

                        {/* Product Name & Subtitle */}
                        <h3 className="font-sans font-semibold text-2xl sm:text-[1.65rem] text-[#161514] tracking-[-0.02em] leading-tight mb-1">
                          {product.name}
                        </h3>
                        <p className="text-xs font-medium  mb-3.5">
                          {product.seriesLabel}
                        </p>

                        <p className="text-sm text-[#4A453F] leading-relaxed mb-5">
                          {product.description}
                        </p>

                        {/* Interactive Container Sizes Selector */}
                        <div className="pt-4 border-t border-[#E6DFD3] mb-4">
                          <span className="block text-[11px] font-mono uppercase tracking-[0.18em] text-[#111] font-semibold mb-2">
                            Available Container Sizes:
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {product.availableSizes.map((size) => {
                              const isSelected = currentSize === size;
                              return (
                                <button
                                  key={size}
                                  type="button"
                                  onClick={() =>
                                    handleSelectSize(product.id, size)
                                  }
                                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold border transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5 ${isSelected
                                    ? "bg-[#161514] text-[#FAF8F5] border-[#161514] shadow-sm"
                                    : "bg-[#F2EDE4] text-[#161514] border-[#DDD6CC] hover:border-[#161514]"
                                    }`}
                                >
                                  {isSelected && (
                                    <Check className="w-3 h-3 shrink-0" />
                                  )}
                                  <span>{size}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Recommended Surfaces */}
                        <div className="text-xs text-[#5C564F] bg-[#F5F1E9] px-4 py-3 rounded-xl border border-[#E6DFD3]">
                          <strong className="text-[#161514] uppercase tracking-wider font-mono text-[10px] block mb-0.5">
                            Recommended Surfaces:
                          </strong>
                          {product.surfaces}
                        </div>
                      </div>
                    </div>

                    {/* Product Enquiry CTA Footer */}
                    <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-[#E6DFD3] flex items-center justify-between gap-3">
                      <a
                        href="#contact"
                        className="group/btn inline-flex items-center justify-between w-full px-6 py-3.5 rounded-full bg-[#161514] text-[#FAF8F5] text-sm font-semibold hover:bg-[#F08A1C] transition-colors duration-300"
                      >
                        <span>
                          Inquire About {product.name} ({currentSize})
                        </span>
                        <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: SOLUTIONS FOR EVERY PROJECT & PROFESSIONAL
          Purpose: "Which Bhatti Paints solution is relevant to my needs?"
          Visually distinct editorial ledger composition (Not a card grid)
         ===================================================================== */}
      {/* <section
    id="solutions"
    aria-labelledby="solutions-heading"
    className="py-24 sm:py-32 lg:py-36 bg-[#FAF8F5] text-[#161514] border-b border-[#E2DBD0]"
  >
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-14">
     
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 mb-12 lg:mb-16 border-b border-[#161514]/15">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-6 h-[2px] bg-[#C8283C]" aria-hidden="true" />
            <span className="text-xs uppercase tracking-[0.22em] text-[#C8283C] font-semibold">
              CUSTOMER SOLUTIONS — TAILORED BY AUDIENCE
            </span>
          </div>
          <h2
            id="solutions-heading"
            className="font-sans font-medium text-[2.5rem] sm:text-5xl lg:text-[4rem] leading-[1.04] tracking-[-0.035em] text-[#161514]"
          >
            Solutions for Every Project &amp; Professional.
          </h2>
        </div>

        <div className="lg:col-span-5">
          <p className="text-base sm:text-lg text-[#4A453F] leading-[1.68]">
            Whether you&apos;re transforming your home, designing a space, or
            managing a construction project, discover the right paint
            solutions for your needs.
          </p>
        </div>
      </div>

   
      <div className="divide-y divide-[#DDD6CC] border-t border-b border-[#DDD6CC]">
        {solutions.map((item: CustomerSolution, idx: number) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              delay: idx * 0.07,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="group py-8 sm:py-10 lg:py-12 transition-colors duration-300 hover:bg-[#F4F0E8]/70 px-0 sm:px-4 -mx-0 sm:-mx-4"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              <div className="lg:col-span-4 flex items-start gap-5">
                <div className="shrink-0 pt-1">
                  <span className="block font-sans font-semibold text-3xl sm:text-4xl text-[#161514] leading-none tracking-tight">
                    {item.number}.
                  </span>
                  <span
                    className="block w-8 h-1 mt-2.5 transition-all duration-300 group-hover:w-12"
                    style={{ backgroundColor: item.accent }}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-[0.2em] text-[#5C564F] font-semibold mb-1.5">
                    {item.audienceLabel}
                  </span>
                  <h3 className="font-sans font-medium text-2xl sm:text-3xl text-[#161514] tracking-[-0.02em]">
                    {item.role}
                  </h3>
                </div>
              </div>

              
              <div className="lg:col-span-2">
                <div className="aspect-[16/10] sm:aspect-[4/3] w-full max-w-[240px] overflow-hidden bg-[#EAE3D7] border border-[#DDD6CC]">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

             
              <div className="lg:col-span-4">
                <p className="text-base sm:text-lg text-[#161514] leading-relaxed mb-2">
                  {item.description}
                </p>
                <p className="text-xs uppercase tracking-[0.16em] text-[#5C564F] font-medium">
                  Next Step: {item.journeyNote}
                </p>
              </div>

             
              <div className="lg:col-span-2 lg:text-right">
                <a
                  href={item.href}
                  className="inline-flex items-center justify-between lg:justify-end gap-3 w-full lg:w-auto px-5 py-3.5 lg:px-0 lg:py-2 bg-[#161514] lg:bg-transparent text-[#FAF8F5] lg:text-[#161514] text-sm font-semibold lg:border-b-2 lg:border-[#161514] group-hover:border-[#C8283C] group-hover:text-[#C8283C] transition-colors duration-300"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      
      <div className="mt-12 lg:mt-16 p-7 sm:p-10 bg-[#F2EDE4] border border-[#DDD6CC] flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#161514] font-semibold mb-2">
            <span className="w-2 h-2 bg-[#3FAE49]" aria-hidden="true" />
            <span>Direct Product &amp; Project Guidance</span>
          </div>
          <h3 className="font-sans font-medium text-xl sm:text-2xl text-[#161514] mb-1.5">
            Need help selecting the right paint product or pack size?
          </h3>
          <p className="text-sm sm:text-base text-[#4A453F] leading-relaxed">
            Connect with Bhatti Paints in Bahawalpur to discuss product
            availability, shade cards, or bulk project requirements.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3.5 shrink-0">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#161514] text-[#FAF8F5] text-sm font-semibold hover:bg-[#B5267F] transition-colors"
          >
            <span>Contact Bhatti Paints</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={whatsappHref}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FAF8F5] border border-[#161514]/25 text-[#161514] text-sm font-semibold hover:border-[#161514] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#3FAE49]" />
            <span>
              {SITE_CONFIG.contact.whatsapp
                ? "WhatsApp Enquiry"
                : "WhatsApp / Project Enquiry"}
            </span>
          </a>
        </div>
      </div>
    </div>
  </section> */}
    </>
  );
}
