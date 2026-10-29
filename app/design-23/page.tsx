"use client";

import { useState } from "react";
import Link from "next/link";
import { DesignSwitcher } from "@/components/DesignSwitcher";
import { calculate10YearProjection, formatINR, DEFAULT_CONFIG } from "@/lib/dairy-compounding";
import {
  Trophy,
  Award,
  Sun,
  Shield,
  Layers,
  CheckCircle,
} from "lucide-react";

export default function Design23Page() {
  const [selectedYear, setSelectedYear] = useState<number>(10);
  const projections = calculate10YearProjection(DEFAULT_CONFIG);
  const active = projections[selectedYear - 1];

  return (
    <div className="min-h-screen bg-[#1c2e1f] text-[#fef9c3] font-sans antialiased selection:bg-[#eab308] selection:text-black">
      {/* Top Banner */}
      <div className="bg-[#142316] border-b border-[#eab308]/30 py-2.5 px-6 flex items-center justify-between text-xs font-bold text-[#facc15]">
        <span>🌾 HISAR & ROHTAK MURRAH BREED STANDARDS &bull; ASLI KISAN SAMRAT HERD</span>
        <span className="hidden sm:inline-block">88 BUFFALO DYNASTY &bull; 100% SEX-SORTED AI</span>
      </div>

      {/* Header */}
      <header className="border-b border-[#eab308]/20 bg-[#172719]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#eab308] text-black font-black flex items-center justify-center text-lg shadow-lg">
              👑
            </div>
            <div>
              <span className="font-black text-xl text-white block tracking-tight">
                KISAN SAMRAT HERD
              </span>
              <span className="text-[10px] text-[#eab308] font-bold uppercase tracking-wider">
                Punjab & Haryana Murrah Royalty // 23
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 text-xs font-bold">
            <Link href="/" className="text-[#fef08a] hover:text-white transition hidden sm:inline-block">
              All 40 Themes
            </Link>
            <a
              href="#kisan-schedule"
              className="px-5 py-2.5 rounded-2xl bg-[#eab308] text-black hover:bg-[#ca8a04] transition shadow-lg shadow-amber-500/20"
            >
              OWN ₹2L CHAMPION PACK
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border-2 border-[#eab308]/40 bg-gradient-to-b from-[#243d28] to-[#18291b] p-8 sm:p-12 space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eab308]/20 border border-[#eab308]/40 text-[#facc15] text-xs font-bold">
            <Trophy className="w-3.5 h-3.5" /> High-Fat A2 Black Gold of North India
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Asli Landed Royalty: <br />
            <span className="text-[#facc15]">1 Murrah Buffalo &rarr; 88 Head in 10 Years.</span>
          </h1>

          <p className="text-[#fef9c3]/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            For generations, North Indian farming families built fortunes not on paper, but on champion Murrah livestock. Invest ₹2,00,000 to acquire a verified 1st/2nd lactation mother yielding 14L/day, plus a genetically superior female calf. Supported by certified artificial insemination, your herd reaches 88 animals by Year 10.
          </p>

          <div className="pt-2 grid grid-cols-3 gap-4 border-t border-[#eab308]/20 text-xs">
            <div className="p-4 rounded-2xl bg-[#142316] border border-[#eab308]/30">
              <span className="text-[#fde047] uppercase text-[10px] font-bold block">Champion Entry</span>
              <span className="text-xl font-black text-white mt-1 block">₹2,00,000</span>
              <span className="text-[#fef9c3]/60 text-[10px]">1 Mother + 1 Calf</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#142316] border border-[#eab308]/30">
              <span className="text-[#fde047] uppercase text-[10px] font-bold block">10-Year Herd</span>
              <span className="text-xl font-black text-[#facc15] mt-1 block">88 Cattle</span>
              <span className="text-[#fef9c3]/60 text-[10px]">28 Milking Mothers</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#142316] border border-[#eab308]/30">
              <span className="text-[#fde047] uppercase text-[10px] font-bold block">Yr 10 Milk Turnover</span>
              <span className="text-xl font-black text-white mt-1 block">₹82.32 Lacs</span>
              <span className="text-[#fef9c3]/60 text-[10px]">Annual Milk Cashflow</span>
            </div>
          </div>
        </div>

        {/* 10-Year Horizon */}
        <section id="kisan-schedule" className="rounded-3xl border border-[#eab308]/30 bg-[#172719] p-8 space-y-8 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#eab308]/20 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#facc15]">
                10-YEAR HERD COMPOUNDING SCHEDULE
              </span>
              <h2 className="text-2xl font-black text-white mt-0.5">
                Inspect Growth By Year
              </h2>
            </div>
            <div className="flex flex-wrap gap-1 text-xs">
              {projections.map((p) => (
                <button
                  key={p.year}
                  onClick={() => setSelectedYear(p.year)}
                  className={`px-3 py-1.5 rounded-xl font-bold transition ${
                    p.year === selectedYear
                      ? "bg-[#eab308] text-black shadow-md"
                      : "bg-[#101b12] text-[#fef9c3] hover:bg-[#203623]"
                  }`}
                >
                  Yr {p.year}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-[#101b12] border border-[#eab308]/20">
              <span className="text-[#fde047] uppercase text-[10px] font-bold block">TOTAL CATTLE</span>
              <span className="text-3xl font-black text-white block mt-1">{active.totalHerdSize} Head</span>
              <span className="text-[#facc15] text-[11px] block mt-1">
                {active.matureBuffaloes} Milking | {active.growingHeifers + active.calvesBornThisYear} Heifers
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#101b12] border border-[#eab308]/20">
              <span className="text-[#fde047] uppercase text-[10px] font-bold block">DAILY MILK YIELD</span>
              <span className="text-3xl font-black text-[#facc15] block mt-1">{active.dailyMilkProductionLiters} Liters</span>
              <span suppressHydrationWarning className="text-[#fef9c3]/70 text-[11px] block mt-1">
                {(active.annualMilkProductionLiters).toLocaleString('en-IN')} L / yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#101b12] border border-[#eab308]/20">
              <span className="text-[#fde047] uppercase text-[10px] font-bold block">ANNUAL MILK SALES</span>
              <span className="text-3xl font-black text-white block mt-1">{formatINR(active.grossMilkingRevenueINR)}</span>
              <span className="text-[#fef9c3]/70 text-[11px] block mt-1">@ ₹70/L Mandi Rate</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#101b12] border border-[#eab308]/20">
              <span className="text-[#fde047] uppercase text-[10px] font-bold block">TOTAL HERD CAPITAL</span>
              <span className="text-3xl font-black text-[#facc15] block mt-1">{formatINR(active.totalCumulativeWealthINR)}</span>
              <span className="text-[#fef9c3]/70 text-[11px] block mt-1">Livestock Value + Net Milk</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#101b12] border-l-2 border-[#eab308] text-xs text-[#fef9c3]">
            <strong className="text-[#facc15]">Year {active.year} Milestone:</strong> {active.milestoneDescription}
          </div>
        </section>
      </main>

      {/* Floating Design Switcher */}
      <DesignSwitcher currentDesignId="design-23" />
    </div>
  );
}
