"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Eye, Info, Palette, Sparkles } from "lucide-react";
import { SITE_CONFIG, PaintSwatch } from "@/config/siteConfig";

type RoomSceneKey = "living" | "bedroom" | "dining" | "exterior";

const ROOM_SCENES: {
  key: RoomSceneKey;
  label: string;
  lightingNote: string;
}[] = [
  {
    key: "living",
    label: "Living Room",
    lightingNote: "Natural West-Facing Daylight",
  },
  {
    key: "bedroom",
    label: "Master Bedroom",
    lightingNote: "Soft Morning Diffused Light",
  },
  {
    key: "dining",
    label: "Dining & Gallery",
    lightingNote: "Warm Architectural Evening Glow",
  },
  {
    key: "exterior",
    label: "Villa Exterior",
    lightingNote: "Direct Sun & Courtyard Shadow",
  },
];

/**
 * High-Craft Architectural SVG + Lighting Room Stage
 * Renders realistic perspective walls, window light falloff, architectural mouldings,
 * and furnishings that dynamically respond to the selected main wall & trim colours.
 */
function ArchitecturalRoomStage({
  scene,
  wallHex,
  trimHex,
  accentHex,
}: {
  scene: RoomSceneKey;
  wallHex: string;
  trimHex: string;
  accentHex: string;
}) {
  if (scene === "living") {
    return (
      <svg
        viewBox="0 0 960 620"
        className="w-full h-full block select-none"
        role="img"
        aria-label="Interactive Contemporary Living Room Colour Preview"
      >
        <defs>
          <linearGradient id="wallLightLiving" x1="0" y1="0" x2="1" y2="0.4">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.22" />
          </linearGradient>
          <linearGradient id="leftWallShade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="floorWood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6D533D" />
            <stop offset="100%" stopColor="#463324" />
          </linearGradient>
          <filter id="softShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="12" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* Ceiling */}
        <polygon points="0,0 960,0 880,48 110,48" fill={trimHex} />
        <polygon points="0,0 960,0 880,48 110,48" fill="#000000" opacity="0.05" />

        {/* Back Main Feature Wall */}
        <rect
          x="110"
          y="48"
          width="770"
          height="422"
          fill={wallHex}
          className="transition-colors duration-500"
        />
        <rect x="110" y="48" width="770" height="422" fill="url(#wallLightLiving)" />

        {/* Left Return Wall in Perspective */}
        <polygon
          points="0,0 110,48 110,470 0,550"
          fill={wallHex}
          className="transition-colors duration-500"
        />
        <polygon points="0,0 110,48 110,470 0,550" fill="url(#leftWallShade)" />

        {/* Right Return Wall in Perspective */}
        <polygon
          points="880,48 960,0 960,550 880,470"
          fill={wallHex}
          className="transition-colors duration-500"
        />
        <polygon points="880,48 960,0 960,550 880,470" fill="#000000" opacity="0.28" />

        {/* Architectural Wainscoting / Panel Moulding on Back Wall */}
        <g stroke={trimHex} strokeOpacity="0.35" strokeWidth="2" fill="none">
          <rect x="148" y="84" width="210" height="240" />
          <rect x="394" y="84" width="260" height="240" />
          <rect x="690" y="84" width="150" height="240" />
        </g>

        {/* Sunlit Diagonal Window Cast Light */}
        <polygon
          points="110,48 390,48 520,470 110,470"
          fill="#FFFDF8"
          opacity="0.11"
        />

        {/* Baseboard / Skirting Trim */}
        <rect x="110" y="448" width="770" height="22" fill={trimHex} />
        <polygon points="0,522 110,448 110,470 0,550" fill={trimHex} />
        <polygon points="0,522 110,448 110,470 0,550" fill="#000000" opacity="0.12" />

        {/* Hardwood Timber Floor */}
        <polygon points="110,470 880,470 960,550 960,620 0,620 0,550" fill="url(#floorWood)" />
        {/* Woven Area Rug */}
        <polygon
          points="160,505 810,505 890,605 80,605"
          fill={trimHex}
          opacity="0.92"
        />
        <polygon
          points="180,515 790,515 860,595 110,595"
          fill="none"
          stroke={accentHex}
          strokeWidth="3"
          opacity="0.45"
        />

        {/* Tall Architectural Casement Window on Left */}
        <g filter="url(#softShadow)">
          <rect x="158" y="96" width="160" height="260" fill={trimHex} rx="2" />
          <rect x="170" y="108" width="136" height="236" fill="#E6EEF2" />
          {/* Courtyard sky & foliage outside window */}
          <rect x="170" y="108" width="136" height="150" fill="#D5E5EE" />
          <circle cx="270" cy="240" r="55" fill="#7D947B" opacity="0.6" />
          <circle cx="205" cy="265" r="45" fill="#5A7259" opacity="0.65" />
          {/* Window Mullions */}
          <line x1="238" y1="108" x2="238" y2="344" stroke={trimHex} strokeWidth="6" />
          <line x1="170" y1="226" x2="306" y2="226" stroke={trimHex} strokeWidth="6" />
        </g>

        {/* Framed Contemporary Artwork Above Sofa */}
        <g filter="url(#softShadow)">
          <rect x="444" y="102" width="164" height="204" fill="#181615" rx="2" />
          <rect x="456" y="114" width="140" height="180" fill="#FAF8F5" />
          {/* Minimalist geometric art echoing logo & accent */}
          <circle cx="526" cy="186" r="42" fill={accentHex} opacity="0.9" />
          <path d="M476 264 Q526 210 576 264 Z" fill="#181615" />
          <rect x="476" y="258" width="100" height="18" fill={wallHex} />
        </g>

        {/* Contemporary Architectural Sofa */}
        <g filter="url(#softShadow)">
          {/* Sofa Backrest */}
          <rect x="270" y="348" width="430" height="100" rx="18" fill="#EAE4DA" />
          {/* Sofa Seat Base */}
          <rect x="250" y="410" width="470" height="84" rx="14" fill="#DFD8CC" />
          {/* Left & Right Armrests */}
          <rect x="242" y="378" width="46" height="116" rx="14" fill="#E4DDD2" />
          <rect x="682" y="378" width="46" height="116" rx="14" fill="#D6CFC3" />
          {/* Sofa Legs */}
          <rect x="268" y="494" width="10" height="22" fill="#2A2421" />
          <rect x="692" y="494" width="10" height="22" fill="#2A2421" />
          {/* Accent Throw Pillows */}
          <rect
            x="298"
            y="366"
            width="68"
            height="58"
            rx="10"
            fill={accentHex}
            className="transition-colors duration-500"
          />
          <rect
            x="352"
            y="376"
            width="62"
            height="50"
            rx="10"
            fill={wallHex}
            stroke="#00000022"
            className="transition-colors duration-500"
          />
          <rect
            x="598"
            y="368"
            width="66"
            height="56"
            rx="10"
            fill={accentHex}
            opacity="0.85"
            className="transition-colors duration-500"
          />
        </g>

        {/* Sculptural Brass & Travertine Floor Lamp on Right */}
        <g>
          <rect x="774" y="230" width="5" height="270" fill="#B89758" />
          <ellipse cx="776" cy="500" rx="28" ry="8" fill="#2A2421" />
          <path d="M736 234 L816 234 L798 180 L754 180 Z" fill="#FAF6EE" filter="url(#softShadow)" />
        </g>

        {/* Low Walnut Coffee Table */}
        <g filter="url(#softShadow)">
          <rect x="370" y="510" width="240" height="16" rx="4" fill="#3D2B1F" />
          <rect x="395" y="526" width="14" height="36" fill="#2A1D15" />
          <rect x="570" y="526" width="14" height="36" fill="#2A1D15" />
          {/* Ceramic Vessel on Table */}
          <ellipse cx="455" cy="500" rx="16" ry="12" fill={accentHex} />
          <rect x="485" y="502" width="54" height="8" fill="#FAF8F5" />
        </g>
      </svg>
    );
  }

  if (scene === "bedroom") {
    return (
      <svg
        viewBox="0 0 960 620"
        className="w-full h-full block select-none"
        role="img"
        aria-label="Interactive Master Bedroom Colour Preview"
      >
        <defs>
          <linearGradient id="bedWallGrad" x1="1" y1="0" x2="0" y2="0.6">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
            <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {/* Ceiling */}
        <rect x="0" y="0" width="960" height="44" fill={trimHex} />
        {/* Main Bedroom Wall */}
        <rect
          x="0"
          y="44"
          width="960"
          height="426"
          fill={wallHex}
          className="transition-colors duration-500"
        />
        <rect x="0" y="44" width="960" height="426" fill="url(#bedWallGrad)" />

        {/* Architectural Fluted/Panel Headboard Wall Detail */}
        <g stroke={trimHex} strokeOpacity="0.3" strokeWidth="2" fill="none">
          <rect x="70" y="80" width="540" height="340" />
          <line x1="250" y1="80" x2="250" y2="420" />
          <line x1="430" y1="80" x2="430" y2="420" />
        </g>

        {/* Skirting Board */}
        <rect x="0" y="450" width="960" height="20" fill={trimHex} />
        {/* Floor */}
        <rect x="0" y="470" width="960" height="150" fill="#5D4735" />
        {/* Plush Bedroom Carpet */}
        <polygon points="40,500 720,500 780,620 0,620" fill={trimHex} opacity="0.9" />

        {/* Right Tall Window with Sheer Drapery */}
        <rect x="680" y="80" width="210" height="360" fill={trimHex} />
        <rect x="694" y="94" width="182" height="332" fill="#E4EEF2" />
        <line x1="785" y1="94" x2="785" y2="426" stroke={trimHex} strokeWidth="6" />
        <line x1="694" y1="250" x2="876" y2="250" stroke={trimHex} strokeWidth="6" />

        {/* Upholstered Architectural Bed */}
        <rect x="130" y="250" width="420" height="160" rx="12" fill="#3B322C" />
        {/* Crisp Linen Bedding */}
        <rect x="150" y="340" width="380" height="120" rx="14" fill="#FAF8F5" />
        {/* Accent Duvet Fold */}
        <rect
          x="150"
          y="395"
          width="380"
          height="75"
          rx="10"
          fill={accentHex}
          className="transition-colors duration-500"
        />
        {/* Pillows */}
        <rect x="180" y="305" width="140" height="52" rx="10" fill={trimHex} />
        <rect x="360" y="305" width="140" height="52" rx="10" fill={trimHex} />
        <rect
          x="285"
          y="322"
          width="110"
          height="42"
          rx="8"
          fill={wallHex}
          stroke="#00000022"
        />
        {/* Bed Frame Base */}
        <rect x="135" y="460" width="410" height="35" rx="6" fill="#2C241F" />
        {/* Nightstands */}
        <rect x="55" y="395" width="62" height="90" rx="4" fill="#3B2B20" />
        <rect x="565" y="395" width="62" height="90" rx="4" fill="#3B2B20" />
        {/* Warm Pendant Light */}
        <line x1="86" y1="44" x2="86" y2="310" stroke="#B89758" strokeWidth="3" />
        <circle cx="86" cy="322" r="18" fill="#FFF7E4" />
      </svg>
    );
  }

  if (scene === "dining") {
    return (
      <svg
        viewBox="0 0 960 620"
        className="w-full h-full block select-none"
        role="img"
        aria-label="Interactive Dining Studio & Archway Colour Preview"
      >
        {/* Back Archway Wall (Trim/Secondary) */}
        <rect x="0" y="0" width="960" height="475" fill={wallHex} className="transition-colors duration-500" />
        {/* Left & Right Shadow Gradient */}
        <rect x="0" y="0" width="220" height="475" fill="#000000" opacity="0.12" />

        {/* Architectural Arched Niche in Center */}
        <path
          d="M 310 475 L 310 210 A 170 170 0 0 1 650 210 L 650 475 Z"
          fill={accentHex}
          opacity="0.88"
          className="transition-colors duration-500"
        />
        <path
          d="M 310 475 L 310 210 A 170 170 0 0 1 650 210 L 650 475"
          fill="none"
          stroke={trimHex}
          strokeWidth="10"
        />

        {/* Dado Rail & Lower Wainscoting */}
        <rect x="0" y="340" width="310" height="135" fill={trimHex} opacity="0.92" />
        <rect x="650" y="340" width="310" height="135" fill={trimHex} opacity="0.92" />
        <rect x="0" y="334" width="310" height="8" fill={trimHex} />
        <rect x="650" y="334" width="310" height="8" fill={trimHex} />

        {/* Floor */}
        <rect x="0" y="475" width="960" height="145" fill="#4B382A" />

        {/* Sculptural Pendant Chandelier */}
        <line x1="480" y1="0" x2="480" y2="175" stroke="#161514" strokeWidth="4" />
        <path d="M 410 205 A 70 40 0 0 1 550 205 Z" fill={trimHex} />
        <circle cx="480" cy="208" r="14" fill="#F9D976" />

        {/* Dining Table & Chairs */}
        <rect x="250" y="405" width="460" height="18" rx="6" fill="#2E2018" />
        <rect x="320" y="423" width="22" height="125" fill="#241811" />
        <rect x="618" y="423" width="22" height="125" fill="#241811" />
        {/* Artisan Vase on Table */}
        <path d="M465 345 L495 345 L505 405 L455 405 Z" fill={trimHex} />
        <circle cx="468" cy="330" r="18" fill="#5D7B5E" />
        <circle cx="494" cy="336" r="14" fill={wallHex} />
      </svg>
    );
  }

  // Exterior Villa Scene
  return (
    <svg
      viewBox="0 0 960 620"
      className="w-full h-full block select-none"
      role="img"
      aria-label="Interactive Modern Pakistani Villa Exterior Colour Preview"
    >
      <defs>
        <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B8D2E6" />
          <stop offset="100%" stopColor="#E9EEF2" />
        </linearGradient>
      </defs>
      {/* Sky */}
      <rect width="960" height="460" fill="url(#skyGrad)" />
      {/* Courtyard Ground & Lawn */}
      <rect y="460" width="960" height="160" fill="#CFC8BC" />
      <rect y="510" width="960" height="110" fill="#7D8C69" />
      <polygon points="340,460 620,460 720,620 240,620" fill="#DED7CB" />

      {/* Upper Architectural Volume (Trim / Secondary Shade) */}
      <rect x="180" y="95" width="600" height="165" fill={trimHex} />
      <rect x="520" y="95" width="260" height="165" fill="#000000" opacity="0.08" />

      {/* Main Lower & Projecting Facade Volume (Selected Wall Colour) */}
      <rect
        x="120"
        y="235"
        width="720"
        height="230"
        fill={wallHex}
        className="transition-colors duration-500"
      />
      {/* Architectural Cantilever Shadow */}
      <polygon points="120,235 840,235 840,258 120,248" fill="#000000" opacity="0.22" />
      {/* Right Wing Recess */}
      <rect
        x="610"
        y="235"
        width="230"
        height="230"
        fill="#000000"
        opacity="0.14"
      />

      {/* Architectural Roof Coping & Trim */}
      <rect x="170" y="83" width="620" height="14" fill={trimHex} />
      <rect x="110" y="222" width="740" height="15" fill={trimHex} />

      {/* Tall Glazed Windows */}
      <rect x="230" y="122" width="190" height="90" fill="#2A3948" stroke={trimHex} strokeWidth="6" />
      <rect x="550" y="122" width="160" height="90" fill="#2A3948" stroke={trimHex} strokeWidth="6" />
      <rect x="180" y="280" width="180" height="140" fill="#2A3948" stroke={trimHex} strokeWidth="8" />
      <line x1="270" y1="280" x2="270" y2="420" stroke={trimHex} strokeWidth="5" />

      {/* Statement Entrance Door in Accent Colour */}
      <rect
        x="435"
        y="285"
        width="95"
        height="180"
        fill={accentHex}
        stroke={trimHex}
        strokeWidth="6"
        className="transition-colors duration-500"
      />
      <rect x="512" y="365" width="4" height="28" fill="#D4AF37" />

      {/* Architectural Timber Louvers */}
      <g fill="#5A3E2B">
        <rect x="650" y="275" width="12" height="150" />
        <rect x="672" y="275" width="12" height="150" />
        <rect x="694" y="275" width="12" height="150" />
        <rect x="716" y="275" width="12" height="150" />
        <rect x="738" y="275" width="12" height="150" />
      </g>
    </svg>
  );
}

export default function ColourInspiration() {
  const [activeGroupIdx, setActiveGroupIdx] = useState(0);
  const [selectedSwatch, setSelectedSwatch] = useState<PaintSwatch>(
    SITE_CONFIG.palettes[0].swatches[0]
  );
  const [activeScene, setActiveScene] = useState<RoomSceneKey>("living");

  const activeGroup = SITE_CONFIG.palettes[activeGroupIdx];

  const handleGroupChange = (idx: number) => {
    setActiveGroupIdx(idx);
    setSelectedSwatch(SITE_CONFIG.palettes[idx].swatches[0]);
  };

  return (
    <section
      id="colour-inspiration"
      aria-labelledby="colour-inspiration-heading"
      className="py-24 sm:py-32 lg:py-40 bg-[#161514] text-[#FAF8F5] relative overflow-hidden"
    >
      {/* Ambient background glow matching active swatch */}
      <div
        className="pointer-events-none absolute -top-48 right-0 w-[560px] h-[560px] rounded-full blur-[150px] opacity-20 transition-colors duration-700"
        style={{ backgroundColor: selectedSwatch.hex }}
        aria-hidden="true"
      />

      <div className="site-container relative z-10">
        {/* Section Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 mb-12 border-b border-white/15">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.22em] text-[#F08A1C] mb-4">
              <Palette className="w-4 h-4" />
              <span>Signature Experience · Interactive Colour Studio</span>
            </div>
            <h2
              id="colour-inspiration-heading"
              className="font-sans font-medium text-4xl sm:text-5xl lg:text-[4.1rem] leading-[1.02] tracking-[-0.03em] text-white"
            >
              Colour Your{" "}
              <span
                className="font-semibold transition-colors duration-500"
                style={{ color: selectedSwatch.hex }}
              >
                World.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base sm:text-lg text-white/75 leading-relaxed">
              Select a curated colour family below and click or hover any swatch to
              transform the architectural room preview and explore complementary pairings.
            </p>
          </div>
        </div>

        {/* 6 Palette Family Tabs */}
        <div
          role="tablist"
          aria-label="Curated Paint Colour Families"
          className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {SITE_CONFIG.palettes.map((group, idx) => {
            const isSelected = activeGroupIdx === idx;
            return (
              <button
                key={group.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => handleGroupChange(idx)}
                className={`shrink-0 inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#FAF8F5] text-[#161514] shadow-lg"
                    : "bg-white/5 text-white/80 border border-white/15 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-black/20"
                  style={{ backgroundColor: group.swatches[0].hex }}
                />
                <span>{group.name}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left 7 Columns: Live Architectural Room Visualizer Stage */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#0E0D0C] shadow-2xl">
              {/* Top Stage Bar: Scene Switcher */}
              <div className="px-4 sm:px-6 py-3.5 bg-[#1E1C1A] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white/70">
                  <Eye className="w-3.5 h-3.5 text-[#F08A1C]" />
                  <span>Live Room Visualizer</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {ROOM_SCENES.map((sc) => (
                    <button
                      key={sc.key}
                      type="button"
                      onClick={() => setActiveScene(sc.key)}
                      aria-pressed={activeScene === sc.key}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                        activeScene === sc.key
                          ? "bg-white text-[#161514] font-semibold"
                          : "text-white/70 hover:text-white bg-white/5"
                      }`}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Room Canvas */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <ArchitecturalRoomStage
                  scene={activeScene}
                  wallHex={selectedSwatch.hex}
                  trimHex={selectedSwatch.trimPairing.hex}
                  accentHex={selectedSwatch.accentPairing.hex}
                />

                {/* Floating Shade Chip Tag on Stage */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#161514]/90 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3.5 shadow-xl">
                  <span
                    className="w-10 h-10 rounded-lg border border-white/20 shrink-0 transition-colors duration-500"
                    style={{ backgroundColor: selectedSwatch.hex }}
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[#F08A1C]">
                        {selectedSwatch.code}
                      </span>
                      <span className="text-white/30">·</span>
                      <span className="text-xs text-white/70">
                        {selectedSwatch.family}
                      </span>
                    </div>
                    <p className="font-serif text-xl text-white leading-tight">
                      {selectedSwatch.name}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Stage Harmony Bar: Main Wall + Trim + Accent */}
              <div className="p-4 sm:p-6 bg-[#1B1918] border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-lg border border-white/20 shrink-0"
                    style={{ backgroundColor: selectedSwatch.hex }}
                  />
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-white/50">
                      Main Wall
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {selectedSwatch.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-lg border border-white/20 shrink-0"
                    style={{ backgroundColor: selectedSwatch.trimPairing.hex }}
                  />
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-white/50">
                      Recommended Trim ({selectedSwatch.trimPairing.code})
                    </span>
                    <span className="text-sm font-medium text-white/90">
                      {selectedSwatch.trimPairing.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className="w-9 h-9 rounded-lg border border-white/20 shrink-0"
                    style={{ backgroundColor: selectedSwatch.accentPairing.hex }}
                  />
                  <div>
                    <span className="block font-mono text-[10px] uppercase tracking-widest text-white/50">
                      Complementary Accent ({selectedSwatch.accentPairing.code})
                    </span>
                    <span className="text-sm font-medium text-white/90">
                      {selectedSwatch.accentPairing.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right 5 Columns: Swatch Explorer & Specimen Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Active Family Description */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#F08A1C]">
                  Palette Collection 0{activeGroupIdx + 1}
                </span>
                <span className="font-mono text-xs text-white/50">
                  {activeGroup.swatches.length} Curated Shades
                </span>
              </div>
              <h3 className="font-serif text-3xl text-white mb-2">
                {activeGroup.name}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {activeGroup.description}
              </p>

              {/* 6 Large Tactile Paint Swatch Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activeGroup.swatches.map((swatch) => {
                  const isActive = selectedSwatch.code === swatch.code;
                  return (
                    <button
                      key={swatch.code}
                      type="button"
                      onClick={() => setSelectedSwatch(swatch)}
                      onMouseEnter={() => setSelectedSwatch(swatch)}
                      aria-pressed={isActive}
                      className={`group text-left rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "border-white ring-2 ring-white/40 scale-[1.02]"
                          : "border-white/15 hover:border-white/50"
                      }`}
                    >
                      <div
                        className="h-20 w-full relative flex items-start justify-end p-2"
                        style={{ backgroundColor: swatch.hex }}
                      >
                        {isActive && (
                          <span className="w-6 h-6 rounded-full bg-[#161514]/80 text-white flex items-center justify-center">
                            <Check className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                      <div className="p-2.5 bg-[#1E1C1A]">
                        <span className="block font-mono text-[10px] text-white/55">
                          {swatch.code}
                        </span>
                        <span className="block text-xs font-semibold text-white truncate">
                          {swatch.name}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Shade Specimen Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSwatch.code}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="bg-[#FAF8F5] text-[#161514] rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-start justify-between gap-4 pb-4 mb-4 border-b border-[#DDD6CC]">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#5C564F]">
                      Shade Specimen · {selectedSwatch.code}
                    </span>
                    <h4 className="font-serif text-3xl text-[#161514] mt-0.5">
                      {selectedSwatch.name}
                    </h4>
                  </div>
                  <div
                    className="w-14 h-14 rounded-xl border border-black/15 shadow-inner shrink-0"
                    style={{ backgroundColor: selectedSwatch.hex }}
                  />
                </div>

                <dl className="grid grid-cols-2 gap-4 text-xs mb-6">
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-[#5C564F]">
                      Undertone Character
                    </dt>
                    <dd className="font-semibold text-[#161514] text-sm mt-0.5">
                      {selectedSwatch.undertone}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-[#5C564F]">
                      Ideal Spaces
                    </dt>
                    <dd className="font-semibold text-[#161514] text-sm mt-0.5">
                      {selectedSwatch.recommendedRoom}
                    </dd>
                  </div>
                </dl>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#161514] text-white text-xs sm:text-sm font-semibold hover:bg-[#C8283C] transition-colors"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Explore Colour Inspiration</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <span className="font-mono text-[11px] text-[#5C564F]">
                    HEX {selectedSwatch.hex}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mandatory Illustrative Disclaimer */}
            <div className="flex items-start gap-2.5 text-xs text-white/60 leading-relaxed bg-white/5 rounded-xl p-4 border border-white/10">
              <Info className="w-4 h-4 text-[#F08A1C] shrink-0 mt-0.5" />
              <p>
                <strong className="text-white/85">Important Note:</strong> Illustrative
                colour previews and room visualizations are for design inspiration only
                and are not guaranteed physical paint colour matches. Screen calibration
                and lighting vary—always verify with an official Bhatti Paints physical
                shade card before application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

