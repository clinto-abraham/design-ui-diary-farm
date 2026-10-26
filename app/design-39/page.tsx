"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Heart,
  Crown,
  Sparkles,
  Gift,
  Award,
} from "lucide-react";

export default function Design39Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#240612] text-[#ffe4e6] font-serif antialiased selection:bg-[#fbbf24] selection:text-black">
      {/* Bridal Shagun Banner */}
      <div className="bg-[#4c0519] border-b border-[#fbbf24]/30 py-2.5 px-6 text-center text-xs tracking-widest text-[#fde68a] uppercase font-sans">
        &diams; 卐 SHUBH VIVAH STRIDHAN HERD &bull; THE LIVING ENDURING GIFT FOR GENERATIONS 卐 &diams;
      </div>

      {/* Header */}
      <header className="border-b border-[#fbbf24]/20 bg-[#240612]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl border-2 border-[#fbbf24] bg-[#4c0519] flex items-center justify-center text-[#fbbf24] font-bold text-lg shadow-lg">
              <Gift className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg text-white block tracking-wide font-serif">
                HIRA SHUBH STRIDHAN
              </span>
              <span className="text-[10px] text-[#fbbf24] uppercase tracking-wider font-sans">
                Generational Wedding Gift // 39
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-6 font-sans text-xs">
            <Link href="/" className="text-[#fde68a] hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#shagun-horizon"
              className="px-5 py-2.5 rounded-full bg-[#fbbf24] text-black font-bold uppercase tracking-wider hover:bg-[#f59e0b] transition shadow-lg"
            >
              Gift ₹2,00,001 Shagun Unit
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border-2 border-[#fbbf24]/30 bg-gradient-to-b from-[#4c0519] to-[#2c0716] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-block px-4 py-1 rounded-full border border-[#fbbf24]/40 bg-[#5c0720] text-[#fbbf24] text-xs font-sans tracking-widest uppercase">
            &diams; SHUBH STRIDHAN LIVING ENDOWMENT &diams;
          </div>

          <h1 className="text-4xl sm:text-6xl text-white tracking-tight leading-tight font-serif">
            The Living Shagun Gift: <br />
            <span className="italic text-[#fbbf24]">₹2L Shagun Endows 88 Cattle in 10 Years.</span>
          </h1>

          <p className="text-[#ffe4e6]/80 text-base leading-relaxed font-sans font-light max-w-2xl">
            Gold jewelry depreciates with making charges, but a living Murrah buffalo pair multiplies forever. Gift your daughter or newlyweds an auspicious Stridhan herd unit of ₹2,00,001: 1 prime mother yielding 14L of pure milk daily, and 1 pedigree female calf. In 10 years, it blossoms into an 88-animal family estate yielding ₹82.32 Lacs annual income.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#fbbf24]/20 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#1c040d] border border-[#fbbf24]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">Shagun Envelope</span>
              <span className="text-xl font-bold text-[#fbbf24] mt-1 block">₹2,00,001</span>
              <span className="text-[#ffe4e6]/60 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#1c040d] border border-[#fbbf24]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">10-Year Stridhan</span>
              <span className="text-xl font-bold text-white mt-1 block">88 Animals</span>
              <span className="text-[#ffe4e6]/60 text-[10px]">Pure Murrah Genetics</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#1c040d] border border-[#fbbf24]/30">
              <span className="text-[#fde68a] uppercase text-[10px] block">Year 10 Milk Gold</span>
              <span className="text-xl font-bold text-[#fbbf24] mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#ffe4e6]/60 text-[10px]">Annual Milk Revenue</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="shagun-horizon" className="rounded-3xl border border-[#fbbf24]/30 bg-[#360717] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#fbbf24]/20 pb-4 font-sans">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#fbbf24] font-semibold">
                Ten Years of Stridhan Bounty
              </span>
              <h2 className="text-2xl font-serif text-white mt-0.5">
                Inspect 10-Year Generational Growth
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-full transition font-semibold ${
                    p.year === selectedYear
                      ? "bg-[#fbbf24] text-black shadow-md"
                      : "bg-[#1c040d] text-[#fde68a] hover:bg-[#500a22]"
                  }`}
                >
                  Year {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 font-sans text-xs">
            <div className="p-4 rounded-2xl bg-[#1c040d] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">TOTAL HERD</span>
              <span className="text-3xl font-serif text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#fbbf24] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c040d] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">DAILY MILK YIELD</span>
              <span className="text-3xl font-serif text-[#fbbf24] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span className="text-[#ffe4e6]/70 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString()} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c040d] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-serif text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#ffe4e6]/70 text-[11px] block mt-1">@ ₹70/L Farm Gate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#1c040d] border border-[#fbbf24]/20">
              <span className="text-[#fde68a] uppercase text-[10px] block">TOTAL STRIDHAN VALUE</span>
              <span className="text-3xl font-serif text-[#fbbf24] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#ffe4e6]/70 text-[11px] block mt-1">Livestock Value + Milk Net</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#1c040d] border-l-2 border-[#fbbf24] text-xs font-sans text-[#fde68a]">
            <strong>Year {active.year} Blessing:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-39" />
    </div>
  );
}
