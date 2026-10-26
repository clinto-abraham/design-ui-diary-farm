"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Layers,
  Sparkles,
  TrendingUp,
  Milk,
  Shield,
  Activity,
  CheckCircle,
} from "lucide-react";

export default function Design20Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#e8edf2] text-[#2d3748] font-sans antialiased selection:bg-[#4f46e5] selection:text-white">
      {/* Neumorphic Header */}
      <header className="sticky top-0 z-40 bg-[#e8edf2]/90 backdrop-blur border-b border-[#d1d9e2]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#e8edf2] shadow-[4px_4px_8px_#c8d0da,-4px_-4px_8px_#ffffff] flex items-center justify-center text-indigo-600 font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="font-extrabold text-[#1a202c] block text-base tracking-tight">
                HIRA TACTILE SOFT-UI
              </span>
              <span className="text-[10px] text-indigo-600 uppercase font-semibold">
                Neumorphic Compounding // 20
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl bg-[#e8edf2] shadow-[3px_3px_6px_#c8d0da,-3px_-3px_6px_#ffffff] text-[#4a5568] hover:text-[#1a202c] transition hidden sm:inline-block"
            >
              All 20 Themes
            </Link>
            <a
              href="#neumorphic-calc"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold shadow-[4px_4px_10px_#a3b1c6,-4px_-4px_10px_#ffffff] hover:bg-indigo-500 transition"
            >
              Reserve ₹2L Package
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl bg-[#e8edf2] shadow-[10px_10px_20px_#c8d0da,-10px_-10px_20px_#ffffff] p-8 sm:p-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8edf2] shadow-[inset_2px_2px_4px_#c8d0da,inset_-2px_-2px_4px_#ffffff] text-indigo-600 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> Tactile 10-Year Compounding Engine
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-[#1a202c] tracking-tight leading-tight">
            Soft Aesthetics. <br />
            <span className="text-indigo-600">Rock-Solid 44x Herd Compounding.</span>
          </h1>

          <p className="text-[#4a5568] text-base sm:text-lg leading-relaxed max-w-2xl">
            A tactile, human-centered vision for dairy farm investments. An initial commitment of ₹2,00,000 acquires 1 lactating Murrah buffalo and 1 female calf. Through artificial insemination, your herd reliably scales to 88 animals generating ₹82.32 Lacs annual milk turnover at Year 10.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 text-xs font-semibold">
            <div className="p-4 rounded-2xl bg-[#e8edf2] shadow-[inset_3px_3px_6px_#c8d0da,inset_-3px_-3px_6px_#ffffff]">
              <span className="text-[#718096] uppercase text-[10px] block">Entry Pack</span>
              <span className="text-xl font-bold text-[#1a202c] mt-1 block">₹2,00,000</span>
              <span className="text-indigo-600">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#e8edf2] shadow-[inset_3px_3px_6px_#c8d0da,inset_-3px_-3px_6px_#ffffff]">
              <span className="text-[#718096] uppercase text-[10px] block">Decade Herd</span>
              <span className="text-xl font-bold text-emerald-600 mt-1 block">88 Buffaloes</span>
              <span className="text-[#718096]">Sex-Sorted AI</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#e8edf2] shadow-[inset_3px_3px_6px_#c8d0da,inset_-3px_-3px_6px_#ffffff]">
              <span className="text-[#718096] uppercase text-[10px] block">Yr 10 Milk Sales</span>
              <span className="text-xl font-bold text-indigo-600 mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#718096]">Annual Run-Rate</span>
            </div>
          </div>
        </div>

        {/* Neumorphic Interactive Horizon */}
        <section id="neumorphic-calc" className="rounded-3xl bg-[#e8edf2] shadow-[10px_10px_20px_#c8d0da,-10px_-10px_20px_#ffffff] p-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#d1d9e2] pb-4">
            <div>
              <span className="text-xs uppercase font-bold text-indigo-600 tracking-wider">
                TACTILE HORIZON CONTROLLER
              </span>
              <h2 className="text-2xl font-bold text-[#1a202c] mt-0.5">
                Inspect Compounding by Year
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {projections.map((p) => {
                const isSelected = p.year === selectedYear;
                return (
                  <button
                    key={p.year}
                    onClick={() => setSelectedYear(p.year)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition ${
                      isSelected
                        ? "bg-[#e8edf2] shadow-[inset_3px_3px_6px_#c8d0da,inset_-3px_-3px_6px_#ffffff] text-indigo-600"
                        : "bg-[#e8edf2] shadow-[3px_3px_6px_#c8d0da,-3px_-3px_6px_#ffffff] text-[#4a5568] hover:text-[#1a202c]"
                    }`}
                  >
                    Y{p.year}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Inset Screen Display */}
          <div className="grid sm:grid-cols-4 gap-4 text-xs font-semibold">
            <div className="p-5 rounded-2xl bg-[#e8edf2] shadow-[inset_4px_4px_8px_#c8d0da,inset_-4px_-4px_8px_#ffffff]">
              <span className="text-[#718096] uppercase text-[10px] block">TOTAL HERD COUNT</span>
              <span className="text-3xl font-extrabold text-[#1a202c] block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-indigo-600 text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#e8edf2] shadow-[inset_4px_4px_8px_#c8d0da,inset_-4px_-4px_8px_#ffffff]">
              <span className="text-[#718096] uppercase text-[10px] block">DAILY MILK YIELD</span>
              <span className="text-3xl font-extrabold text-emerald-600 block mt-1">{active.dailyMilkProductionLiters} L / day</span>
              <span className="text-[#718096] text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-[#e8edf2] shadow-[inset_4px_4px_8px_#c8d0da,inset_-4px_-4px_8px_#ffffff]">
              <span className="text-[#718096] uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-extrabold text-indigo-600 block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#718096] text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-5 rounded-2xl bg-[#e8edf2] shadow-[inset_4px_4px_8px_#c8d0da,inset_-4px_-4px_8px_#ffffff]">
              <span className="text-[#718096] uppercase text-[10px] block">TOTAL WEALTH MATRIX</span>
              <span className="text-3xl font-extrabold text-[#1a202c] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#718096] text-[11px] block mt-1">Livestock Assets + Milk Net</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#e8edf2] shadow-[inset_2px_2px_4px_#c8d0da,inset_-2px_-2px_4px_#ffffff] text-xs text-[#4a5568]">
            <strong className="text-indigo-600">Year {active.year} Milestone:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-20" />
    </div>
  );
}
