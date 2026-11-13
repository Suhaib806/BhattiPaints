"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calculator, Info } from "lucide-react";

interface PaintCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaintCalculatorModal({
  isOpen,
  onClose,
}: PaintCalculatorModalProps) {
  const [wallWidth, setWallWidth] = useState(14);
  const [wallHeight, setWallHeight] = useState(10);
  const [wallsCount, setWallsCount] = useState(4);
  const [coats, setCoats] = useState(2);

  // Illustrative architectural surface area calculation (in sq. ft.)
  const totalAreaSqFt = wallWidth * wallHeight * wallsCount;
  // Standard illustrative planning guide (~120 sq. ft. per litre per coat; verify with product TDS)
  const estimatedLitres = Math.max(
    1,
    Math.ceil((totalAreaSqFt * coats) / 120)
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="calc-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-lg rounded-2xl bg-[#FAF8F5] text-[#161514] border border-[#DDD6CC] shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-5 bg-[#161514] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-5 h-5 text-[#F08A1C]" />
                <h3 id="calc-modal-title" className="font-serif text-2xl">
                  Room Surface &amp; Paint Estimator
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close Paint Estimator"
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#5C564F] mb-1.5">
                    Avg. Wall Width (ft)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={200}
                    value={wallWidth}
                    onChange={(e) => setWallWidth(Number(e.target.value) || 0)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD6CC] bg-white text-[#161514] font-semibold"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#5C564F] mb-1.5">
                    Wall Height (ft)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={wallHeight}
                    onChange={(e) => setWallHeight(Number(e.target.value) || 0)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD6CC] bg-white text-[#161514] font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#5C564F] mb-1.5">
                    Number of Walls
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={wallsCount}
                    onChange={(e) => setWallsCount(Number(e.target.value) || 1)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD6CC] bg-white text-[#161514] font-semibold"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#5C564F] mb-1.5">
                    Number of Coats
                  </label>
                  <select
                    value={coats}
                    onChange={(e) => setCoats(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#DDD6CC] bg-white text-[#161514] font-semibold"
                  >
                    <option value={1}>1 Coat (Refresh)</option>
                    <option value={2}>2 Coats (Recommended)</option>
                    <option value={3}>3 Coats (High Change)</option>
                  </select>
                </div>
              </div>

              {/* Result Box */}
              <div className="p-5 rounded-xl bg-[#F2EDE4] border border-[#DDD6CC] flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#5C564F]">
                    Total Paintable Area
                  </span>
                  <p className="font-serif text-3xl text-[#161514]">
                    {totalAreaSqFt.toLocaleString()} sq. ft.
                  </p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B5267F]">
                    Illustrative Guide ({coats} Coats)
                  </span>
                  <p className="font-serif text-3xl text-[#161514]">
                    ~{estimatedLitres} Litres
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 text-xs text-[#5C564F] bg-white p-3.5 rounded-lg border border-[#DDD6CC]">
                <Info className="w-4 h-4 text-[#F08A1C] shrink-0 mt-0.5" />
                <p>
                  This planning estimate is illustrative only. Actual coverage depends on
                  surface porosity, texture, and specific product selection. Consult a
                  Bhatti Paints representative for project specifications.
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-[#DDD6CC] text-sm font-semibold"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#161514] text-white text-sm font-semibold hover:bg-[#C8283C] transition-colors"
                >
                  Inquire With Dimensions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

