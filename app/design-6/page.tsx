"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Flame,
  Zap,
  TrendingUp,
  DollarSign,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Milk,
} from "lucide-react";

export default function Design6Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#fef08a] text-black font-sans antialiased selection:bg-black selection:text-[#fef08a] p-4 sm:p-8">
      {/* Neo Brutalist Nav */}
      <header className="max-w-6xl mx-auto border-4 border-black bg-white shadow-[6px_6px_0px_#000] p-4 flex flex-wrap items-center justify-between gap-4 mb-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-black text-[#fef08a] font-black text-xl flex items-center justify-center border-2 border-black">
            H
          </div>
          <span className="font-black text-xl tracking-tighter uppercase">
            HIRA BUFFALO VENTURES // NEO-06
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="px-3 py-1.5 border-2 border-black bg-[#fef08a] font-bold text-xs uppercase shadow-[2px_2px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition"
          >
            All 10 Designs
          </Link>
          <a
            href="#brutal-calc"
            className="px-4 py-2 border-2 border-black bg-[#4ade80] font-black text-xs uppercase shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 transition"
          >
            CLAIM ₹2L HERD PACK &rarr;
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto space-y-8">
        <div className="border-4 border-black bg-white shadow-[8px_8px_0px_#000] p-6 sm:p-12 space-y-6">
          <div className="inline-block px-3 py-1 bg-[#fb923c] border-2 border-black font-black text-xs uppercase shadow-[2px_2px_0px_#000]">
            ⚡ FORGET BITCOIN. MILK IS LIQUID GOLD.
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95]">
            INVEST ₹2 LACS. <br />
            WALK AWAY WITH <span className="bg-[#4ade80] px-2 border-2 border-black">88 BUFFALOES</span> IN 10 YEARS!
          </h1>
          <p className="text-base sm:text-xl font-bold text-neutral-800 max-w-2xl leading-snug">
            1 Mother Buffalo + 1 Baby Calf. Every year: 1 new calf via sex-sorted AI. Every 3 years: calves become mothers. Compounding isn’t just for math geeks—it lives in the barn!
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <div className="border-2 border-black bg-[#fef08a] p-4 shadow-[4px_4px_0px_#000] min-w-[160px]">
              <span className="block text-xs font-black uppercase">Capital In</span>
              <span className="text-2xl font-black">₹2,00,000</span>
            </div>
            <div className="border-2 border-black bg-[#67e8f9] p-4 shadow-[4px_4px_0px_#000] min-w-[160px]">
              <span className="block text-xs font-black uppercase">Year 10 Herd</span>
              <span className="text-2xl font-black">88 Animals</span>
            </div>
            <div className="border-2 border-black bg-[#4ade80] p-4 shadow-[4px_4px_0px_#000] min-w-[160px]">
              <span className="block text-xs font-black uppercase">Y10 Milk Run-Rate</span>
              <span className="text-2xl font-black">₹82.32L / Year</span>
            </div>
          </div>
        </div>

        {/* 3 Chunky Feature Boxes */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border-4 border-black bg-[#67e8f9] shadow-[6px_6px_0px_#000] p-6 space-y-3">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-lg border-2 border-black">
              🥛
            </div>
            <h3 className="text-xl font-black uppercase">14L DAILY A2 MILK</h3>
            <p className="font-bold text-xs leading-relaxed">
              Real cash in your pocket every single sunrise. Sold at ₹70/L to verified organic milk buyers.
            </p>
          </div>

          <div className="border-4 border-black bg-[#f472b6] shadow-[6px_6px_0px_#000] p-6 space-y-3">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-lg border-2 border-black">
              🧬
            </div>
            <h3 className="text-xl font-black uppercase">SEX-SORTED AI TECH</h3>
            <p className="font-bold text-xs leading-relaxed">
              95%+ female calf guarantee. No useless male calves wasting fodder. Pure exponential biological growth!
            </p>
          </div>

          <div className="border-4 border-black bg-[#4ade80] shadow-[6px_6px_0px_#000] p-6 space-y-3">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black text-lg border-2 border-black">
              📈
            </div>
            <h3 className="text-xl font-black uppercase">3-YEAR COMPOUND CYCLE</h3>
            <p className="font-bold text-xs leading-relaxed">
              Every born calf takes exactly 3 years to reach maturity, start lactating, and bear her own calves!
            </p>
          </div>
        </div>

        {/* Interactive Year Selector */}
        <div id="brutal-calc" className="border-4 border-black bg-white shadow-[8px_8px_0px_#000] p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 border-black pb-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider bg-black text-white px-2 py-0.5">
                INTERACTIVE HERD SCANNER
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase mt-1">
                SEE YOUR HERD MULTIPLY (YEAR 1 TO 10)
              </h2>
            </div>
            <div className="text-sm font-black bg-[#fef08a] px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
              SELECTING: YEAR {selectedYear}
            </div>
          </div>

          {/* Stepper Buttons */}
          <div className="flex flex-wrap gap-2">
            {projections.map((p) => (
              <button
                key={p.year}
                onClick={() => setSelectedYear(p.year)}
                className={`px-4 py-2 border-2 border-black font-black text-xs transition uppercase ${
                  p.year === selectedYear
                    ? "bg-[#4ade80] shadow-[4px_4px_0px_#000] translate-x-[-2px] translate-y-[-2px]"
                    : "bg-white hover:bg-neutral-100 shadow-[2px_2px_0px_#000]"
                }`}
              >
                Year {p.year}
              </button>
            ))}
          </div>

          {/* Big Output Box */}
          <div className="border-4 border-black bg-[#fef08a] p-6 shadow-[6px_6px_0px_#000] grid sm:grid-cols-4 gap-4">
            <div>
              <span className="text-xs font-black uppercase block">Total Herd Size</span>
              <span className="text-3xl font-black block mt-1">{active.totalHerdSize} Buffaloes</span>
              <span className="text-[11px] font-bold text-neutral-700">
                {active.matureBuffaloes} Milking / {active.growingHeifers + active.calvesBornThisYear} Calves
              </span>
            </div>

            <div>
              <span className="text-xs font-black uppercase block">Milk Run-Rate</span>
              <span className="text-3xl font-black block mt-1 text-[#047857]">
                {formatINR(active.grossMilkingRevenueINR)}
              </span>
              <span className="text-[11px] font-bold text-neutral-700">
                {active.dailyMilkProductionLiters} L / day
              </span>
            </div>

            <div>
              <span className="text-xs font-black uppercase block">Herd Asset Value</span>
              <span className="text-3xl font-black block mt-1">
                {formatINR(active.herdAssetValueINR)}
              </span>
              <span className="text-[11px] font-bold text-neutral-700">
                Liquid Livestock Equity
              </span>
            </div>

            <div>
              <span className="text-xs font-black uppercase block">Total Wealth Created</span>
              <span className="text-3xl font-black block mt-1 text-[#b91c1c]">
                {formatINR(active.totalCumulativeWealthINR)}
              </span>
              <span className="text-[11px] font-bold text-neutral-700">
                Net Profit + Assets
              </span>
            </div>
          </div>

          <div className="p-4 border-2 border-black bg-white font-bold text-sm">
            🔥 <strong>YEAR {active.year} MILESTONE:</strong> {active.milestoneDescription}
          </div>
        </div>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-6" />
    </div>
  );
}
